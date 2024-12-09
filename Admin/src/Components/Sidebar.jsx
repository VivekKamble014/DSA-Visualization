import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import Link for navigation and useNavigate for redirection
import '../CSS/Sidebar.css';  // Import the CSS for the sidebar
import { FaHome, FaUsers, FaCog, FaSignOutAlt, FaBook, FaQuestionCircle } from 'react-icons/fa'; // Importing additional icons for new sections

const Sidebar = () => {
  const navigate = useNavigate();  // useNavigate hook to programmatically redirect

  const handleLogout = () => {
    // Clear session data (e.g., JWT token)
    localStorage.removeItem('authToken');  // Remove token or session data from localStorage

    // Redirect to the login page
    navigate('/');  // Redirects to the login page
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin-dashboard" className="sidebar-link">
            <FaHome className="sidebar-icon" />
            <h4 className="sidebar-text">Home</h4>
          </Link>
        </li>
        <li>
          <Link to="/manage-users" className="sidebar-link">
            <FaUsers className="sidebar-icon" />
            <h4 className="sidebar-text">Manage Users</h4>
          </Link>
        </li>
        <li>
          <Link to="/topics" className="sidebar-link">
            <FaBook className="sidebar-icon" />
            <h4 className="sidebar-text">Topics</h4>
          </Link>
        </li>
        <li>
          <Link to="/quizzes" className="sidebar-link">
            <FaQuestionCircle className="sidebar-icon" />
            <h4 className="sidebar-text">Quizzes</h4>
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link">
            <FaCog className="sidebar-icon" />
            <h4 className="sidebar-text">Settings</h4>
          </Link>
        </li>
        <li onClick={handleLogout}>
          <Link to="/" className="sidebar-link">
            <FaSignOutAlt className="sidebar-icon" />
            <h4 className="sidebar-text">Logout</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;