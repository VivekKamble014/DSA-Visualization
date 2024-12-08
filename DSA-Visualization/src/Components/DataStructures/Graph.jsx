import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';

export default function Graph() {
  return (
    <div>
      <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Graph: </h3>
            <p>A graph is a non-linear data structure that represents a set of objects (called vertices or nodes) connected by edges. Unlike a tree, a graph does not have a hierarchical structure and can contain cycles. Graphs are used to model relationships and connections in the real world, such as networks, social media, and road maps.</p>
            <h5>Key Components of a Graph:</h5>
            <ol>
              <li>Vertex (Node):</li>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <li>Edge:</li>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <li>Directed Graph (Digraph):</li>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <li>Undirected Graph:</li>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <li>Weight (Cost):</li>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <li>Degree of a Vertex:</li>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </ol>
            <div className="navigation-buttons">
            <Link to="/Tree">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Graph">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
