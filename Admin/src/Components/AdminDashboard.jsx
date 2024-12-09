import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Components/Sidebar';
import '../CSS/AdminDashboard.css';

const AdminDashboard = () => {
    const [adminName, setAdminName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAdminDetails = async () => {
            try {
                const response = await axios.get('http://localhost:3001/admin/details', {
                    withCredentials: true // Send session cookie with request
                });
                setAdminName(response.data.username); // Set admin username
            } catch (err) {
                setError('Error fetching admin details');
                console.error('Error fetching admin details:', err);
            }
        };

        fetchAdminDetails();
    }, []);

    return (
        <div className="admin-dashboard-container">
            <Sidebar />
            <div className="main-content">
                {error && <p>{error}</p>}
                <h1>Welcome to the Admin Dashboard, {adminName}!</h1>
                <p>Your dashboard overview and more options will appear here.</p>
            </div>
        </div>
    );
};

export default AdminDashboard;