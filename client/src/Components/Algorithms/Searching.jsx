import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/DataStructures.css' // Ensure you have the appropriate styles for the page

export default function Searching() {
  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Searching:</h3>

          {/* Section for Description */}
          <section>
            <h5>Description</h5>
            <p>Searching algorithms are used to locate a specific item or value in a dataset. There are various searching algorithms, each with different performance characteristics depending on the data structure being used (e.g., arrays, linked lists).</p>
          </section>

          {/* Section for Common Searching Algorithms */}
          <section>
            <h5>Common Searching Algorithms</h5>
            <p>Some common searching algorithms include:</p>
            <ul>
              <li><strong>Linear Search</strong>: This algorithm checks every element in the list one by one from the beginning to the end until the target element is found or the list is exhausted.</li>
              <li><strong>Binary Search</strong>: This is a more efficient search method that requires a sorted array. It repeatedly divides the search interval in half and compares the target value to the middle element.</li>
              <li><strong>Jump Search</strong>: This algorithm divides the data into smaller blocks and performs linear search on the smaller blocks.</li>
              <li><strong>Exponential Search</strong>: This algorithm combines binary search and linear search to find an element in a sorted array.</li>
            </ul>
          </section>

          {/* Section for Time and Space Complexity */}
          <section>
            <h5>Time and Space Complexity</h5>
            <p>The efficiency of searching algorithms is evaluated in terms of their time and space complexities:</p>
            <ul>
              <li><strong>Linear Search:</strong> Time complexity: O(n), Space complexity: O(1)</li>
              <li><strong>Binary Search:</strong> Time complexity: O(log n), Space complexity: O(1)</li>
              <li><strong>Jump Search:</strong> Time complexity: O(√n), Space complexity: O(1)</li>
              <li><strong>Exponential Search:</strong> Time complexity: O(log n), Space complexity: O(1)</li>
            </ul>
          </section>

          {/* Section for Practical Applications of Searching */}
          <section>
            <h5>Practical Applications of Searching</h5>
            <p>Searching algorithms are widely used in various applications, such as:</p>
            <ul>
              <li>Searching for specific data in databases</li>
              <li>Searching elements in lists or arrays for data retrieval</li>
              <li>Implementing search features in web applications (e.g., search bars, filters)</li>
              <li>Efficient searching in large-scale data (e.g., in search engines, recommendation systems)</li>
            </ul>
          </section>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <Link to="/InsertionSort">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/LinearSearch">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}