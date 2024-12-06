import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import Queue_Img from '../Images/Queue_Image.png';

export default function Queue() {
  return (
    <div>
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Queue: </h3>
            <p>A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order. It follows the principle of "First in, First out" (FIFO), where the first element added to the queue is the first one to be removed. Queues are commonly used in various algorithms and applications for their simplicity and efficiency in managing data flow.</p>

            <img src={Queue_Img} className='image_queue' alt="Queue image"></img>
            <p>
              <h3>Operations</h3>
              <ul>
                <li>Enqueue</li>
                <li>Dequeue</li>
                <li>Peek</li>

              </ul>
            </p>
            <div>
              <h1>BUILDING</h1>
            </div>

            <div>
              <h3>Applications</h3>
              <ul>
                <li>Multi programming: Multi programming means when multiple programs are running in the main memory. It is essential to organize these multiple programs are organized as queues</li>
                <li>Network: In a network , a queue is used in devices such as a router or a switch. Another application of a queue is a mail queue</li>
                <li>Job Scheduling: The computer has a task to execute a particular number of jobs that are scheduled to be execute one after another. These jobs are assigned one by one to the processor which is organized using a queue</li>
                <li>Shared resoures: Queues are used as waiting lists for a single resoure</li>
                <li>Breadth first traversal or BFS</li>
                <li>Level order tree traversal</li>
                <li>Reverse a path in BST using queue</li>
                <li>Construct complete binary tree from its link list representation</li>
                <li>Number of siblings of a given Node in n-ary tree</li>
                <li>Zig-zag tree traversal</li>
              </ul>
              <h3>Advantage</h3>
              <ul>
                <li>A large amount of data can be managed efficiently with ease</li>
                <li>Operations such as insertion and deletion can be performed with ease as it follows the first in first out rule</li>
                <li>Queues are useful when a particular service is used by multiple customers</li>
                <li>Queues are fast in speed for data inter process communication</li>
                <li>Queues can be used in the implementation of other data structures</li>
         

              </ul>
              <h3>Disadvantage</h3>
              <ul>
                <li>The operations such as insertion and deletion of elements from the middle are time consuming</li>
                <li>Limited space</li>
                <li>In classical queue, a new element can only be inserted when the existing elements are deleted from the queue</li>
                <li>Searching an elements takes O(N) time</li>
                <li>Maximum size of a queue must be defined prior</li>
              </ul>
            </div>

            <div className="navigation-buttons">
            <Link to="/Stack">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/LinkedList">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
