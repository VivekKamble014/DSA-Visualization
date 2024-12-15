import React from 'react';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';

export default function Boolean() {
  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Boolean :</h3>
          <p>The boolean data type, or bool, represents values of true or false and is one of the simplest data types. It’s often used in programming for decision-making, logic control, and conditions.</p>
          <p>Properties</p>
          <ul>
            <li>Binary Nature: Booleans only have two possible values: true (1) or false (0).</li>
            <li>Storage: Typically stored in a single bit, though many systems allocate a byte for convenience.</li>
            <li>Operations: Commonly used in logical operations like AND (&&), OR (||), and NOT (!).</li>
            <li>Comparison: Often results from comparison operators (e.g., ==, &lt;, &gt;, !=), which return true or false.</li>
          </ul>
          <p>Applications</p>
          <ul>
            <li>Control Flow: Used in conditionals (if, while, for) to control the program’s execution.</li>
            <li>Flags and States: Commonly used as flags (e.g., isRunning) to track a program’s or object’s state.</li>
          </ul>
          <p>Booleans are fundamental for creating logic in programming, enabling decisions and branching based on conditions.</p>

          <div className="navigation-buttons">
            <Link to="/Character">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/NonPrimitiveDataType">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}