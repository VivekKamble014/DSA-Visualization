import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
         <b>

          <a href="#">Data Structures</a>
         </b>
          <ul>
            <li>
            <b>

              <a href="#">Primitive Data Type</a>
            </b>
              <ul>
                <li><a href="#">Integer</a></li>
                <li><a href="#">Float</a></li>
                <li><a href="#">Character</a></li>
                <li><a href="#">Boolean</a></li>
              </ul>
            </li>
            <li>
            <b>
              <a href="#">NonPrimitive Data Type</a>

            </b>
              <ul>
                <li>
                <b>

                  <a href="#">Linear Data</a>
                </b>
                  <ul>
                    <li><a href="#">Array</a></li>
                    <li><a href="#">Stack</a></li>
                    <li><a href="#">Queue</a></li>
                    <li><a href="#">Linked List</a></li>
                  </ul>
                </li>
                <li>
                <b>

                  <a href="#">Non-linear Data</a>
                </b>
                  <ul>
                    <li><a href="#">Tree</a></li>
                    <li><a href="#">Graph</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
        <b>

          <a href="#">Algorithms</a>
        </b>
          <ul>
            <li>
            <b>

              <a href="#">Sorting</a>
            </b>
              <ul>
                <li><a href="#">Bubble Sort</a></li>
                <li><a href="#">Merge Sort</a></li>
                <li><a href="#">Quick Sort</a></li>
                <li><a href="#">Selection Sort</a></li>
                <li><a href="#">Insertion Sort</a></li>
              </ul>
            </li>
            <li>
            <b>

              <a href="#">Searching</a>
            </b>
              <ul>
                <li><a href="#">Linear Search</a></li>
                <li><a href="#">Binary Search</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}