import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';
export default function Non_Primitive_Data_Type() {
  return (
    <div>
    
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Non Primitive data type: </h3>
            <p>Non-primitive data types, also known as reference types or composite data types, are complex data structures that are built using primitive data types. They can store multiple values or complex entities, and are used to organise and manage data in a more sophisticated way.</p>
            <h3>Examples of Non-Primitive Data Types:</h3>
            <ul>
              <li>Arrays: a collection of values of the same data type stored in contiguous memory locations.</li>
              <li>Linked Lists: a dynamic collection of values where each element points to the next element.</li>
              <li>Stacks: a Last-In-First-Out (LIFO) data structure that follows the principle of last element inserted is the first one to be removed.</li>
              <li>Queues: a First-In-First-Out (FIFO) data structure that follows the principle of first element inserted is the first one to be removed.</li>
             
            </ul>
            <h3>Application of Non-Primitive Data Types:</h3>

            <ul>
            <li>Non-primitive data types are used to implement complex data structures such as stacks, queues, trees, and graphs.</li>
            <li>They are used to organise and manage large and complex sets of data.</li>
            <li>They are used to implement algorithms and data structures that require efficient insertion, deletion, and searching of elements.</li>
            </ul>
            <div className="navigation-buttons">
            <Link to="/Boolean">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/LinearDataType">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
