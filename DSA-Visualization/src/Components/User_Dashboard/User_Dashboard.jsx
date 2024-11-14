
import React from 'react';
import Navbigation from './Navigation';
import Navbar from '../Home/Navbar';
import Sidebar from './Sidebar';
import './UserDashboard.css';

export default function User_Dashboard() {
  return (
    <div>
      <Navbigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h1>Hey</h1>
        </div>
      </div>
    </div>
  );
}
