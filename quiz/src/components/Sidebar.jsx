// components/Sidebar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import Link and useNavigate for routing
import './css/Sidebar.css'; // Import Sidebar styling

const Sidebar = () => {
  const navigate = useNavigate();  // Initialize navigate function for programmatic navigation

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the JWT token
    navigate('/login');  // Redirect to the login page
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-links">
        <li><Link to="/admin-dashboard">Dashboard</Link></li>
        <li><Link to="/show-quizes">Show Quizes</Link></li>
        <li><Link to="/manage-users">Manage Users</Link></li>
        <li><Link to="/add-subject">Add Subject</Link></li>
        <li><Link to="/create-quiz">Create Quiz</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        
        {/* Admin Profile and Logout buttons */}
        <li><button onClick={() => navigate('/admin-profile')} className="profile-button">Admin Profile</button></li>
        <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;