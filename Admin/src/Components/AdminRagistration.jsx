import React, { useState } from 'react';
import axios from 'axios';

const AdminRegistration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/admin/register', { username, password });
            setSuccessMessage(response.data.message); // Display success message
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Error registering');
        }
    };

    return (
        <div className="register-container">
            <h2>Admin Registration</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            {error && <p>{error}</p>}
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default AdminRegistration;