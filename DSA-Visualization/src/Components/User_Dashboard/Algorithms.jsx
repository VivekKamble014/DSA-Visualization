import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from './Sidebar';
import '../CSS/DataStructures.css';

export default function Algorithms() {
  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Algorithms:</h3>
          
          {/* Section for Description */}
          <section>
            <h5>Description</h5>
            <p>Algorithms are step-by-step procedures or formulas for solving a problem. In computer science, algorithms are fundamental to solving complex problems efficiently. They are used to process data, perform calculations, and automate reasoning tasks.</p>
          </section>
          
          {/* Section for Types of Algorithms */}
          <section>
            <h5>Types of Algorithms</h5>
            <p>There are several types of algorithms, each designed to solve specific kinds of problems. Some of the most common types include:</p>
            <ul>
              <li><strong>Sorting Algorithms</strong>: These algorithms are used to arrange data in a particular order (e.g., Bubble Sort, Merge Sort, Quick Sort).</li>
              <li><strong>Searching Algorithms</strong>: These algorithms are used to find an element in a data structure (e.g., Linear Search, Binary Search).</li>
              <li><strong>Graph Algorithms</strong>: Used to solve problems related to graph structures (e.g., Dijkstra’s Algorithm, Bellman-Ford Algorithm).</li>
              <li><strong>Dynamic Programming</strong>: Used for optimization problems, breaking down problems into simpler subproblems (e.g., Fibonacci sequence, Knapsack Problem).</li>
              <li><strong>Divide and Conquer</strong>: A problem-solving technique that divides the problem into smaller subproblems (e.g., Merge Sort, Quick Sort).</li>
            </ul>
          </section>

          {/* Section for Algorithm Complexity */}
          <section>
            <h5>Algorithm Complexity</h5>
            <p>Algorithm complexity is crucial in determining how efficient an algorithm is in terms of time and space. It is typically measured in Big O notation:</p>
            <ul>
              <li><strong>Time Complexity</strong>: Measures the amount of time an algorithm takes to run as a function of the size of the input.</li>
              <li><strong>Space Complexity</strong>: Measures the amount of memory an algorithm uses as a function of the size of the input.</li>
            </ul>
          </section>

          {/* Section for Algorithm Usage */}
          <section>
            <h5>Algorithm Usage</h5>
            <p>Algorithms are used in various applications such as:</p>
            <ul>
              <li>Sorting and searching large datasets</li>
              <li>Optimization problems (e.g., shortest path, resource allocation)</li>
              <li>Network routing and graph traversal</li>
              <li>Machine learning models (e.g., decision trees, neural networks)</li>
              <li>Data compression and encryption</li>
            </ul>
          </section>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <Link to="/Graph">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Sorting">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}