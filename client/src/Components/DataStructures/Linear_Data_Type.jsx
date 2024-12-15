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
            <p>Linear data types are a category of data structures where data elements are organised sequentially, and each element is connected to its adjacent elements. These structures follow a linear order, where every element has a unique predecessor and successor except for the first and last elements.</p>
            <h3>Examples of Non-Primitive Data Types:</h3>
            <ul>
              <li>Arrays: a collection of values of the same data type stored in contiguous memory locations.</li>
              <li>Stacks: a Last-In-First-Out (LIFO) data structure that follows the principle of last element inserted is the first one to be removed.</li>
              <li>Queues: a First-In-First-Out (FIFO) data structure that follows the principle of first element inserted is the first one to be removed.</li>
              <li>Linked Lists: a dynamic collection of values where each element points to the next element.</li>
            </ul>
            <h3>Usage of Linear Data Types:</h3>
            <h4>Array</h4>
            <ul>
              <li>Efficient storage and quick access of elements by index.</li>
              <li> Used in situations requiring fixed-size sequential data storage (e.g., tables, matrices).</li>
             
            </ul>
            <h4>Linked List</h4>
            <ul>
              <li>Used for dynamic memory allocation.</li>
              <li>Useful when the size of the data structure can vary at runtime.</li>
              <li>Commonly used in tasks requiring frequent insertion and deletion of elements.</li>
              
            </ul>

            <h4>Stacks</h4>
            <ul>
              <li>Useful in recursion, backtracking, and function call management.</li>
              <li>Applications include undo operations, parsing expressions, and evaluating postfix expressions.</li>
             
            </ul>

            <h4>Queues</h4>
            <ul>
              <li>Used in scheduling tasks, managing resource sharing (e.g., CPU scheduling), and breadth-first search (BFS) algorithms.</li>
            </ul>
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
