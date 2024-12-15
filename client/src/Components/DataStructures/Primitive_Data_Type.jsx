import React from 'react'
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import DataType from '../Images/Types_DataStructure.png';
import '../CSS/DataStructures.css';

export default function Primitive_Data_Type() {
  return (
    <div>
    
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <img src={DataType} className='DataStructureImage'></img>

            <div className="navigation-buttons">
            <Link to="/datastructure">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Integer">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
