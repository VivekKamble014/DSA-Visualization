

import React from 'react';
import Navbigation from './Navigation';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from '../Home/Navbar';
import Sidebar from './Sidebar';
import './UserDashboard.css';
import algorithm from '../Images/Algorithm.png';
import datastructure from '../Images/datastructure.png';

export default function User_Dashboard() {
  return (
    <div>
      <Navbigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h1>Data Structures and Algorithms</h1>
          <div className="dashboard-containt">
            
           <a href=""><div className='data-structure'>
              <img src={datastructure} alt="data structure" />
              <h4>Data Structure</h4>
            </div>
            </a> 
            <a href="">

            <div className='algorithm'>
              <img src={algorithm} alt="Algorithm" />
              <h4>Algorithms</h4>
            </div>
           

            </a>
       
          </div>
        </div>
      </div>
    </div>
  );
}
