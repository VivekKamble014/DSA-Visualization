import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from './Sidebar';
import '../CSS/DataStructures.css'
export default function DataStructures() {
  return (
    <div>
     <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
        <div className="right-side">
              <h3>Data Structure :</h3>
              <p>

              Data Structure: A data structure is a specialized format to oraganizing, processing, retrieving and storing data.
              Data structures make it easy for users to access and work with data the need in appropriate ways.
              Most importantly, data structure frame the organization of information so that machines and humans can better understand it
              Why are data structure important
              </p>
              <ul>
                <li>Data structures are the buliding blocks for more sophisticated applications. They are designed by compossing data elements into logical unit representing an abstract data type that has relevance to the algorithm or application</li>
                <li>It is not only important to use data structures, but it is also important to choose the proper type of data structure for each task. Choosing an ill-suited data structure could result in slow runtimes or unresponsive code</li>
              </ul>

              <p>Five features to consider when choosing a data structure</p>
              <ul>
              <li>What kind of information will be stored</li>
              <li>How will that information be used</li>
              <li>Where should data presist, or be kept, after it is created</li>
              <li>What is the best way to organize the data</li>
              <li>What aspects of memory and storage reservation management sholud be considered</li>
              
              </ul>
              <p>How data structure are used</p>
              <ul>
              <li>Storing data</li>
              <li>Ordering and storing data</li>
              <li>Indexing data</li>
              <li>Searching data</li>
              <li>Data exchange</li>
              <li> 
              Managing resources and services</li>
              <li>Scalability</li>
              </ul>
              <div className="navigation-buttons">
            <Link to="/Dashboard">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/PrimitiveDataType">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
       
      </div>
     
  );
}