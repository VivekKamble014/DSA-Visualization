import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate for routing
import '../CSS/Navigation.css'; // Import the CSS file for navbar styling
import logo from '../Images/logo.png'; // Ensure the correct path to your logo image
import { RiAccountCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in (using localStorage or sessionStorage)
  useEffect(() => {
    const userLoggedIn = Boolean(localStorage.getItem('userToken')); // Example check
    setIsLoggedIn(userLoggedIn);
  }, []); // Empty dependency array so it runs only once after the initial render

  // Handle logout logic
  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Remove user token
    setIsLoggedIn(false); // Update state to reflect that user is logged out
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="First-navbar">
      <div className="First-navbar-content">
        <div className="First-navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="First-navbar-items">
          {isLoggedIn ? (
            <>
              {/* Show these items if the user is logged in */}
              <Link to="/UserDashboard">Quizzes</Link>
              
              <Link to="/profile">
                <RiAccountCircleLine size={40} />
              </Link>
              <Link onClick={handleLogout} className="btn-logout">
                <FiLogOut size={33} />
              </Link>
            </>
          ) : (
            <>
            
              {/* Show these items if the user is not logged in */}
              <Link href="/mernquizapp/client/src/pages/common/Login/index.js" className="btn-1">Login</Link>
              <Link href="/signup" className="btn-2">Signup</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}