import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import LL_Image from '../Images/Linked_List_Image.png';
import '../CSS/LinkedList.css'; // Import CSS for styling

export default function Linked_List() {
  const [selectedList, setSelectedList] = useState('');
  const [singlyList, setSinglyList] = useState([]);
  const [doublyList, setDoublyList] = useState([]);
  const [circularList, setCircularList] = useState([]);
  const [newNodes, setNewNodes] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to handle button click for linked list type
  const handleListSelection = (listType) => {
    setSelectedList(listType);
  };

  // Function to handle opening the popup for entering multiple values
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to handle closing the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Handle input values for the nodes
  const handleNodeValuesChange = (event) => {
    setNewNodes(event.target.value);
  };

  // Function to create a linked list from space-separated values
  const createLinkedList = () => {
    if (newNodes) {
      const values = newNodes.split(' ').map(value => value.trim()).filter(value => value !== '');
      switch (selectedList) {
        case 'Singly Linked List':
          setSinglyList(values);
          break;
        case 'Doubly Linked List':
          const doublyLinkedList = values.map((value, index) => ({
            prev: index === 0 ? null : { data: values[index - 1] },
            data: value,
            next: index === values.length - 1 ? null : { data: values[index + 1] },
          }));
          setDoublyList(doublyLinkedList);
          break;
        case 'Circular Linked List':
          const circularLinkedList = values.map(value => ({ data: value, next: null }));
          // To make it circular, link the last node to the first node
          if (circularLinkedList.length > 1) {
            circularLinkedList[circularLinkedList.length - 1].next = circularLinkedList[0];
          }
          setCircularList(circularLinkedList);
          break;
        default:
          break;
      }
      setNewNodes('');
      closePopup();
    }
  };

  // Insert a node at the start, end, or specific position
  const insertNode = (position, value) => {
    let list = [...getCurrentList()];

    const newNode = { data: value, next: null };

    switch (position) {
      case 'start':
        if (list.length > 0) {
          newNode.next = list[0]; // Point new node to the first node
        } else {
          newNode.next = newNode; // If empty, point to itself
        }
        list.unshift(newNode); // Add the new node to the start
        break;
      case 'end':
        if (list.length > 0) {
          list[list.length - 1].next = newNode; // Point the last node to the new node
          newNode.next = list[0]; // Make the list circular by pointing last node to first
        } else {
          newNode.next = newNode; // If it's the only node, point to itself
        }
        list.push(newNode); // Add the new node to the end
        break;
      case 'random':
        const randomIndex = Math.floor(Math.random() * list.length);
        newNode.next = list[randomIndex].next;
        list[randomIndex].next = newNode;
        break;
      default:
        break;
    }

    updateList(list);
  };

  // Delete a node from start, end, or specific position
  const deleteNode = (position) => {
    let list = [...getCurrentList()];

    switch (position) {
      case 'start':
        if (list.length > 0) {
          if (list.length === 1) {
            list = []; // If only one node, remove it entirely
          } else {
            list[list.length - 1].next = list[0].next; // Update the last node's next to point to the new first node
            list.shift(); // Remove the first node
          }
        }
        break;
      case 'end':
        if (list.length > 0) {
          const secondLastNode = list[list.length - 2];
          secondLastNode.next = list[0]; // Update the second last node's next to point to the first node
          list.pop(); // Remove the last node
        }
        break;
      case 'position':
        const position = prompt("Enter the position to delete (0-based index):");
        if (position >= 0 && position < list.length) {
          if (list.length > 1) {
            const previousNode = list[position - 1];
            const nextNode = list[position + 1];
            previousNode.next = nextNode;
            list.splice(position, 1); // Remove the node at the specified position
          } else {
            list = []; // Remove the node entirely if it’s the only node
          }
        }
        break;
      default:
        break;
    }

    updateList(list);
  };

  // Reverse the linked list
  const reverseList = () => {
    let list = [...getCurrentList()];
    list.reverse();
    updateList(list);
  };

  // Function to update the linked list
  const updateList = (list) => {
    switch (selectedList) {
      case 'Singly Linked List':
        setSinglyList(list);
        break;
      case 'Doubly Linked List':
        setDoublyList(list);
        break;
      case 'Circular Linked List':
        setCircularList(list);
        break;
      default:
        break;
    }
  };

  // Function to get the current list (for navigation)
  const getCurrentList = () => {
    switch (selectedList) {
      case 'Singly Linked List':
        return singlyList;
      case 'Doubly Linked List':
        return doublyList;
      case 'Circular Linked List':
        return circularList;
      default:
        return [];
    }
  };

  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Linked List:</h3>
          <p>A linked list is a dynamic data structure that consists of nodes with references to the next node.</p>

          <h3>Types of Linked Lists</h3>
          <ul>
            <li><b>Singly Linked List:</b> A list where each node has a data part and a reference to the next node.</li>
            <li><b>Doubly Linked List:</b> A list where each node has a data part, a reference to the previous node, and a reference to the next node.</li>
            <li><b>Circular Linked List:</b> A list where the last node's next reference points to the first node, forming a circle.</li>
          </ul>
          <img src={LL_Image} className="image_ll" alt="Linked List Image" />

          <div>
            <h3>Choose Linked List Type</h3>
            <button onClick={() => handleListSelection('Singly Linked List')} className="button">Singly Linked List</button>
            <button onClick={() => handleListSelection('Doubly Linked List')} className="button">Doubly Linked List</button>
            <button onClick={() => handleListSelection('Circular Linked List')} className="button">Circular Linked List</button>
          </div>

          {selectedList && (
            <div>
              <h3>Enter Node Values (Space separated)</h3>
              <input
                type="text"
                value={newNodes}
                onChange={handleNodeValuesChange}
                placeholder="Enter node values"
              />
              <button onClick={createLinkedList} className="button">Create Linked List</button>
            </div>
          )}

          <div>
            <h3>Current {selectedList} Nodes</h3>
            {getCurrentList().length > 0 && (
              <>
                <div>{displayNodes()}</div>
                <div>
                  <button onClick={() => insertNode('start', prompt("Enter value to insert at start:"))} className="button">Insert at Start</button>
                  <button onClick={() => insertNode('end', prompt("Enter value to insert at end:"))} className="button">Insert at End</button>
                  <button onClick={() => insertNode('random', prompt("Enter value to insert at random position:"))} className="button">Insert at Random Position</button>
                  <button onClick={() => deleteNode('start')} className="button">Delete from Start</button>
                  <button onClick={() => deleteNode('end')} className="button">Delete from End</button>
                  <button onClick={() => deleteNode('position')} className="button">Delete from Position</button>
                  <button onClick={reverseList} className="button">Reverse List</button>
                </div>
              </>
            )}
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
  );
}