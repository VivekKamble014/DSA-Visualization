import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/UserDashboard.css';
import algorithm from '../Images/Algorithm.png';
import datastructure from '../Images/datastructure.png';

export default function User_Dashboard() {
  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h1>Data Structures and Algorithms</h1>
          <div className="dashboard-containt">
            <Link to="/datastructure">
              <div className='data-structure'>
                <img src={datastructure} alt="data structure" />
                <h4>Data Structure</h4>
              </div>
            </Link>
            <Link to="/algorithms">
              <div className='algorithm'>
                <img src={algorithm} alt="Algorithm" />
                <h4>Algorithms</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}