import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    const handleBtn = id => {
        const proceed = window.confirm('Are you sure you want to delete');
        if (proceed) {
            console.log(id);
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        console.log('delted');
                        const rest = users.filter(user => user._id !== id);
                        setUsers(rest);
                    }
                });
        }


    }
    return (
        <div>
            <h1>Total Users:{users.length}</h1>
            {
                users.map(user => <li
                    key={user._id}
                >name:{user.name} email:{user.email} <Link to={`/updateuser/${user._id}`}><button>Update</button></Link> <button onClick={() => handleBtn(user._id)}>x</button></li>)
            }
        </div>
    );
};

export default Home;