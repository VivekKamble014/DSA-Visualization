import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Sidebar.css';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <b>
            <NavLink to="/datastructure" activeClassName="active">Data Structures</NavLink>
          </b>
          <ul>
            <li>
              <b>
                <NavLink to="/PrimitiveDataType" activeClassName="active">Primitive Data Type</NavLink>
              </b>
              <ul>
                <li><NavLink to="/Integer" activeClassName="active">Integer</NavLink></li>
                <li><NavLink to="/Float" activeClassName="active">Float</NavLink></li>
                <li><NavLink to="/Character" activeClassName="active">Character</NavLink></li>
                <li><NavLink to="/Boolean" activeClassName="active">Boolean</NavLink></li>
              </ul>
            </li>
            <li>
              <b>
                <NavLink to="/NonPrimitiveDataType" activeClassName="active">NonPrimitive Data Type</NavLink>
              </b>
              <ul>
                <li>
                  <b>
                    <NavLink to="/LinearDataType" activeClassName="active">Linear Data Type</NavLink>
                  </b>
                  <ul>
                    <li><NavLink to="/Array" activeClassName="active">Array</NavLink></li>
                    <li><NavLink to="/Stack" activeClassName="active">Stack</NavLink></li>
                    <li><NavLink to="/Queue" activeClassName="active">Queue</NavLink></li>
                    <li><NavLink to="/LinkedList" activeClassName="active">Linked List</NavLink></li>
                  </ul>
                </li>
                <li>
                  <b>
                    <NavLink to="/NonLinearDatatype" activeClassName="active">Non-linear Data Type</NavLink>
                  </b>
                  <ul>
                    <li><NavLink to="/Tree" activeClassName="active">Tree</NavLink></li>
                    <li><NavLink to="/Graph" activeClassName="active">Graph</NavLink></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>
            <NavLink to="#" activeClassName="active">Algorithms</NavLink>
          </b>
          <ul>
            <li>
              <b>
                <NavLink to="#" activeClassName="active">Sorting</NavLink>
              </b>
              <ul>
                <li><NavLink to="#" activeClassName="active">Bubble Sort</NavLink></li>
                <li><NavLink to="#" activeClassName="active">Merge Sort</NavLink></li>
                <li><NavLink to="#" activeClassName="active">Quick Sort</NavLink></li>
                <li><NavLink to="#" activeClassName="active">Selection Sort</NavLink></li>
                <li><NavLink to="#" activeClassName="active">Insertion Sort</NavLink></li>
              </ul>
            </li>
            <li>
              <b>
                <NavLink to="#" activeClassName="active">Searching</NavLink>
              </b>
              <ul>
                <li><NavLink to="#" activeClassName="active">Linear Search</NavLink></li>
                <li><NavLink to="#" activeClassName="active">Binary Search</NavLink></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}