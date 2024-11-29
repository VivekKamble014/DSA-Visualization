import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
export default function Non_Primitive_Data_Type() {
  return (
    <div>
    
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h1>Non Primitive data type</h1>
          </div>
        </div>
    </div>
  )
}
