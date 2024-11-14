import React from 'react';
// import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="dropdown">
          Data Structures
          <ul className="dropdown-content">
            <li>Primitive Data Type
              <ul>
                <li>Integer</li>
                <li>Float</li>
                <li>Character</li>
                <li>Boolean</li>
              </ul>
            </li>
            <li>NonPrimitive Data Type
              <ul>
                <li>Linear Data
                  <ul>
                    <li>Array</li>
                    <li>Stack</li>
                    <li>Queue</li>
                    <li>Linked List</li>
                  </ul>
                </li>
                <li>Non-linear Data
                  <ul>
                    <li>Tree</li>
                    <li>Graph</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          Algorithms
          <ul className="dropdown-content">
            <li>Sorting
              <ul>
                <li>Bubble Sort</li>
                <li>Merge Sort</li>
                <li>Quick Sort</li>
                <li>Selection Sort</li>
                <li>Insertion Sort</li>
              </ul>
            </li>
            <li>Searching
              <ul>
                <li>Linear Search</li>
                <li>Binary Search</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}