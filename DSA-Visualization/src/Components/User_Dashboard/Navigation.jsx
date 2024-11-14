// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file for navbar styling
import logo from '../Images/logo.png'; // Ensure the correct path to your logo image
import { RiAccountCircleLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";


export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in
        const userLoggedIn = Boolean(localStorage.getItem('userToken')); // Example check
        setIsLoggedIn(userLoggedIn);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setIsLoggedIn(false); // Update state without reloading the page
    };

    return (
        <div className="First-navbar">
            <div className='First-navbar-content'>
                <div className='First-navbar-logo'>
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className='First-navbar-items'>
                    {isLoggedIn ? (
                        <>
                            <Link to="/Quizzes">Quizzes</Link>
                            <Link to="/rank">Rank</Link>
                            <Link to="/profile">
                                <RiAccountCircleLine size={40} />
                            </Link>
                            {/* <Link onClick={handleLogout} className="btn-1">Logout</Link> */}
                            <Link onClick={handleLogout} className="btn-logout"><FiLogOut size={33} /></Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn-1">Login</Link>
                            <Link to="/signup" className="btn-2">Signup</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}