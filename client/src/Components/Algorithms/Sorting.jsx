import React from 'react'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/DataStructures.css'

export default function Sorting() {
  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Sorting:</h3>

          {/* Section for Description */}
          <section>
            <h5>Description</h5>
            <p>Sorting is the process of arranging data in a particular order, often in ascending or descending order. Sorting is a fundamental operation in computer science used to optimize the efficiency of other algorithms (such as searching) and to make data more accessible.</p>
          </section>

          {/* Section for Common Sorting Algorithms */}
          <section>
            <h5>Common Sorting Algorithms</h5>
            <p>There are several algorithms used to sort data, each with different performance characteristics. Some common sorting algorithms include:</p>
            <ul>
              <li><strong>Bubble Sort</strong>: A simple algorithm that repeatedly steps through the list, compares adjacent items, and swaps them if they are in the wrong order.</li>
              <li><strong>Selection Sort</strong>: Selects the smallest element from the unsorted portion and swaps it with the first unsorted element.</li>
              <li><strong>Insertion Sort</strong>: Builds the sorted list one element at a time by comparing the current element with the elements in the sorted portion and inserting it in the correct position.</li>
              <li><strong>Merge Sort</strong>: A divide-and-conquer algorithm that splits the array into halves, recursively sorts them, and then merges them back together.</li>
              <li><strong>Quick Sort</strong>: Another divide-and-conquer algorithm that picks a pivot element and partitions the array into two subarrays according to whether elements are less than or greater than the pivot.</li>
            </ul>
          </section>

          {/* Section for Time and Space Complexity */}
          <section>
            <h5>Time and Space Complexity</h5>
            <p>Sorting algorithms have different time and space complexities, which determine their efficiency:</p>
            <ul>
              <li><strong>Time Complexity</strong>: The time it takes for an algorithm to run as a function of the input size (n). Sorting algorithms vary between O(n) (best case) and O(n^2) (worst case).</li>
              <li><strong>Space Complexity</strong>: The amount of extra space required by the algorithm, which can vary between O(1) (in-place algorithms) to O(n) (out-of-place algorithms).</li>
            </ul>
          </section>

          {/* Section for Practical Applications of Sorting */}
          <section>
            <h5>Practical Applications of Sorting</h5>
            <p>Sorting is used in various applications such as:</p>
            <ul>
              <li>Database indexing</li>
              <li>Data analysis and reporting</li>
              <li>Efficient searching (e.g., binary search on sorted data)</li>
              <li>Data visualization (e.g., sorting elements to display in graphs)</li>
              <li>Task scheduling and load balancing</li>
            </ul>
          </section>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <Link to="/Algorithms">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/BubbleSort">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}