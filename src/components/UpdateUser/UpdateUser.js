import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    //updating data
    const handleAddUserForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const updateUser = { name, email };

        console.log(updateUser);
        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Data Updated succesfully')
                e.target.reset();
            })
    }
    return (
        <div>
            <h3>Updating Data For:{user.name}</h3>
            <form onSubmit={handleAddUserForm}>
                <input type="text" name="name" required />
                <input type="email" name="email" required />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default UpdateUser;