import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';

export default function Linear_Data_Type() {
  return (
    <div>
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Linear data type: </h3>


            <div className="navigation-buttons">
            <Link to="/NonPrimitiveDataType">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Array">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
