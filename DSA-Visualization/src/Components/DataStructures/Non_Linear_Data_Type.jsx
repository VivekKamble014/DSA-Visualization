import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';

export default function Non_Linear_Data_Type() {
  return (
    <div>
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Non Linear Datatype :</h3>

            <div className="navigation-buttons">
            <Link to="/LinkedList">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Tree">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
