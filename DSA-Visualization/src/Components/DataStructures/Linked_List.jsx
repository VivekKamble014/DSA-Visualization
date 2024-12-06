import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import LL_Image from '../Images/Linked_List_Image.png';

export default function Linked_List() {
  return (
    <div>
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Linked List :</h3>
            <p>A linked list is a linear data structure as well as a dynamic data structure.A linked list consists of nodes where each node contains a data field and reference(address) to the next node in the list</p>
            <h3>Type of linked lists</h3>
            <ul>
              <li><b>Single linked list:</b> A single linked list is the most common type of linked list. Each node have data and an address field that contains a reference to the next node</li>
              <li><b>Double linked list:</b> In the double linked list, there are three fields that are the previous pointer, that contain a reference to the previous node.Then there is the data, and last you have the next pointer, that containes a reference to the next node. Thus you can go in both direction</li>
              <li><b>Circular linked list:</b>Circular linked list: The circular linked listis extremely similar to the single linked list. The only difference is that the last node is connected with first node, forming a circular loop in the circular linked list</li>

            </ul>
            <img src={LL_Image} className='image_ll' alt="Linked List Image"></img>
            <div>
            <h3>Properties</h3>
              <ul>
                <li>It can be visualized as a chain of nodes where each node contains a data field and reference(address) to the next node</li>
                <li>The first node of the linked list is called Head of the linked list. Through head, we can performe differnt operations on the linked list</li>
                <li>The last node of the linked list is pointing to the NUll which indicates that it is the last node(TAIl)</li>
                <li>Unlike arrays, linked list elements are not stored at contiguous memory locations</li>
                <li>Linked lists are dynamic in nature</li>
              </ul>
              <h3>Operations</h3>
              <ul>
                <li>Insertion</li>
                <li>Deletion</li>
                <li>Searching</li>
              </ul>
            </div>
            <div>
              <h1>BUILDING</h1>
            </div>
            <div>
              <h3>Applications</h3>
              <ul>
                <li>Implementation of stack and queue</li>
                <li>Implementation of graphs: adjacency list representation of graphs is most popular which is uses linked list to store adjacent vertices</li>
                <li>Dynamic memory allocation: we use linked list of free blocks</li>
                <li>Maintaining directory of names</li>
                <li>Performing arithmetic operations on long integers</li>
                <li>Manipulation of polynomials by storing constant in the node of linked list</li>
                <li>Representation of sparse matrix</li>
                <li>Next and previous operations (Image viewer, Music player, web browser etc)</li>
                <li>Redo and undo functionality</li>
                <li>Most recently used section is represented by double linked list</li>
                <li>Binary tree can also be applied by double linked list</li>
           
              </ul>
              <h3>Advantages</h3>
              <ul>
                <li>Dynamic data structure: A linked list is a dynamic arrangement so it can be grow and shrink at rntime by allocating and deallocating memory. So there is no need to give the initial size of the linked list</li>
                <li>No memory wastage: In the linked list, efficient memory utilization can be achieved since the size of the linked list increase or decrease at runtime so there is no memory wastage and there is no need to previous the allocate memory</li>
                <li>Implementation: Linear data structures like stack and queue are often easily implemented using linked list</li>
                <li>Insertion and deletion: Insertion and deletion operations are quite easier in the linked list. There is no need to shift elements after the insertion or deletion of the element only the address present in next pointer needs to be update</li>
              
              </ul>
              <h3>Disadvantage</h3>
              <ul>
                <li>Memory usage: More memory is required in the linked list as compared to an array. Because in linked list a pointer is also required to store the address of the next element and it requires extra memory for itself</li>
                <li>Traversal: In a linked list traversal is more time consuming as compared to an array. Direct access to an element is not possible in linked list as in an array by index</li>
                <li>Reverse traversing: In a single linked list reverse traversal is not possible but in the case of double linked list, it can be possible</li>
                <li>Random access: Random access is not possible in a linked list due to its dynamic memory allocation</li>
            
              </ul>
            </div>
            <div className="navigation-buttons">
            <Link to="/Queue">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/NonLinearDatatype">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
