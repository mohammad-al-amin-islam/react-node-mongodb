import React from 'react';

const AddUser = () => {
    const handleAddUserForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email };
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Data added succesfully')
                e.target.reset();
            })
    }
    return (
        <div>
            <h4>Add user here</h4>
            <form onSubmit={handleAddUserForm}>
                <input type="text" name="name" required />
                <input type="email" name="email" required />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;