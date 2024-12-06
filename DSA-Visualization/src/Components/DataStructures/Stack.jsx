import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import Stack_IMG from '../Images/Stack_Image.png';

export default function Stack() {
  return (
    <div>
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Stack: </h3>
            <p>A Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out). LIFO implies that the element that is inserted last, comes out first and FILO implies that the element that is inserted first, comes out last.</p>
            <img src={Stack_IMG} className='image_stack' alt="Stack Image"></img>
            <p>
              <h3>Properties</h3>
              <ul>
                <li>The insertion and deletion happens at the same end i.e from the top of the stack</li>
                <li>Stack is implemented through Array or Linked list</li>
                <li>If the allocated space for stack is full, and any attempt to add more elements will lead to stack overflow. The opposite, any attempt to extract elements on an empty stack leads to stack underflow</li>
                

              </ul>
              <h3>Operations</h3>
              <ul>
                <li>Push</li>
                <li>Pop</li>
                <li>Peek</li>

              </ul>
            </p>
            <div>
              <h3>Building </h3>
            </div>
            <div>
              <p>
                <h3>Applications</h3>
                <ul>
                  <li>Expression evaluation and conversion</li>
                  <li>Backtracking</li>
                  <li>Function call (call stack function)</li>
                  <li>Parentheses checking</li>
                  <li>String reversal</li>
                  <li>Syntax parsing</li>
                  <li>Memory management</li>
                </ul>
                <h3>Advantage</h3>
                <ul>
                  <li>Efficient data management: Stack helps you manage the data in a LIFO</li>
                  <li>Efficient management of functions: When a function is called , the local variables are stored in stack, and it is automatically destroyed once returned</li>
                  <li>Control over memory</li>
                  <li>Smart memory management</li>
                </ul>
                <h3>Disadvantage</h3>
                <ul>
                  <li>Limited memory size</li>
                  <li>Chances of stack overflow</li>
                  <li>Random access not possible</li>
                  <li>Unreliable</li>
                  <li>Undesires termination</li>

                </ul>
              </p>
            </div>
            <div className="navigation-buttons">
            <Link to="/Array">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Queue">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
