import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import Array_Img from '../Images/Array_Image.png';



export default function Array() {
  return (
    <div>
  
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Array :</h3>
            <p>An Array is a linear data structure that collects elements of the same data type and store them in Contiguous and Adjacent memory location. Array works on an indexing system start from 0 to (n-1) where n is the size of the array </p>
            <h3>Example:</h3>
            <img className='image_array' src={Array_Img} alt="Array"></img>
            <p><h3>Properties</h3><br></br>
            <ul>
              <li>It is a derived data type, compose of a collection of various primitive data types</li>
              <li>Elements of an array are stored in contiguous blocks in prime memory</li>
              <li>The name of the array stored the base address of the array. It acts as a pointer to the memory block where the first element has been stored</li>

            </ul>
            <h3>Operations</h3>
            <ul>
              <li>Insertion</li>
              <li>Deletion</li>
              <li>Updation</li>
              <li>Searching</li>
              <li>Sorting</li>
            </ul>
            
            </p>
            <div>
              <h3>CREATING AN ARRAY:</h3>
              <p>Built in process</p>

            </div>

            <div className="navigation-buttons">
            <Link to="/LinearDataType">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Stack">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
