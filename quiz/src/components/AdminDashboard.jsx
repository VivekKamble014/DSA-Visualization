// components/AdminDashboard.jsx
import { Link } from 'react-router-dom';  // Import Link for navigation

import React from 'react';
import Sidebar from './Sidebar';  // Import Sidebar component
import './css/AdminDashboard.css'; // Import CSS for Admin Dashboard styling

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content">
        <header className="header">
          <h1>Welcome to Admin Dashboard</h1>
        </header>
        <div className="dashboard-cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>150</p>
          </div>
          <div className="card">
            <h3>Active Quizzes</h3>
            <p>5</p>
          </div>
          <div className="card">
            <h3>Pending Approvals</h3>
            <p>3</p>
          </div>
        </div>
        <div className="dashboard-statistics">
          <h2>Statistics</h2>
          <p>Content related to user activity, quizzes, etc. can go here.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;