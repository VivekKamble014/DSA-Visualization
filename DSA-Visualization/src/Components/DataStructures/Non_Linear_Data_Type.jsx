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
            <p>Non-linear data types are data structures where elements are not arranged sequentially. Instead, they are organized hierarchically or arbitrarily, and there is no strict relationship between adjacent elements. Non-linear structures allow for more complex relationships between elements, making them suitable for applications like hierarchical data management, graph traversal, and efficient searching.</p>
            <h4>Examples of Non-Linear Data Types:</h4>
            <ol>
              <li><h3>Trees: </h3></li>
              <p>A hierarchical data structure consisting of nodes, where each node has a value and zero or more child nodes.</p>
              <ul>
                <li>Root Node: The topmost node in the tree.</li>
                <li>Leaf Nodes: Nodes with no children.</li>
                <li>Types: Binary Tree, Binary Search Tree (BST), AVL Tree, B-Trees, Heap.</li>
              </ul>
              <li><h3>Graph:</h3> </li>
              <p>A collection of nodes (vertices) connected by edges.</p>
              <ul>
                <li>Can be directed (edges have direction) or undirected (edges have no direction).</li>
                <li>Weighted Graphs: Edges have weights (e.g., distances, costs).</li>
                <li>Used in social networks, routing, and scheduling.</li>
              </ul>
            </ol>
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
