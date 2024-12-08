import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
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
          const doublyLinkedList = values.map(value => ({ prev: null, data: value, next: null }));
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

    switch (position) {
      case 'start':
        list.unshift(value);
        break;
      case 'end':
        list.push(value);
        break;
      case 'random':
        const randomIndex = Math.floor(Math.random() * list.length);
        list.splice(randomIndex, 0, value);
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
        list.shift();
        break;
      case 'end':
        list.pop();
        break;
      case 'position':
        const position = prompt("Enter the position to delete (0-based index):");
        list.splice(position, 1);
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

  // Update a node by its value
  const updateNode = (oldValue, newValue) => {
    let list = [...getCurrentList()];
    const index = list.indexOf(oldValue);
    if (index !== -1) {
      list[index] = newValue;
      updateList(list);
    }
  };

  // Function to update the linked list
  const updateList = (list) => {
    switch (selectedList) {
      case 'Singly Linked List':
        setSinglyList(list);
        break;
      case 'Doubly Linked List':
        const doublyLinkedList = list.map(value => ({ prev: null, data: value, next: null }));
        setDoublyList(doublyLinkedList);
        break;
      case 'Circular Linked List':
        const circularLinkedList = list.map(value => ({ data: value, next: null }));
        if (circularLinkedList.length > 1) {
          circularLinkedList[circularLinkedList.length - 1].next = circularLinkedList[0];
        }
        setCircularList(circularLinkedList);
        break;
      default:
        break;
    }
  };

  // Function to display nodes with links and pointers
  const displayNodes = () => {
    let listToDisplay = [];
    switch (selectedList) {
      case 'Singly Linked List':
        listToDisplay = singlyList;
        break;
      case 'Doubly Linked List':
        listToDisplay = doublyList;
        break;
      case 'Circular Linked List':
        listToDisplay = circularList;
        break;
      default:
        break;
    }

    return listToDisplay.map((node, index) => {
      return (
        <div key={index} className="node">
          <div className="node-box">
            <div className="value">{node.data || node}</div>
            {selectedList === 'Singly Linked List' && (
              <div className="pointer">{index < singlyList.length - 1 ? "→" : "null"}</div>
            )}
            {selectedList === 'Doubly Linked List' && (
              <>
                <div className="pointer">{node.prev ? "←" : "null"}</div>
                <div className="pointer">{node.next ? "→" : "null"}</div>
              </>
            )}
          </div>
          {(index < listToDisplay.length - 1 || selectedList === 'Circular Linked List') && (
            <div className="arrow">→</div>
          )}
        </div>
      );
    });
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
            <button onClick={() => handleListSelection('Singly Linked List')} className="linked-list-button">Singly Linked List</button>
            <button onClick={() => handleListSelection('Doubly Linked List')} className="linked-list-button">Doubly Linked List</button>
            <button onClick={() => handleListSelection('Circular Linked List')} className="linked-list-button">Circular Linked List</button>
          </div>

          <div>
            <h3>Selected Linked List Type: {selectedList}</h3>
            {selectedList && <p>You have selected {selectedList}.</p>}

            {selectedList && (
              <div>
                <h4>Current Nodes:</h4>
                <div className="linked-list-visualization">{displayNodes()}</div>

                <button onClick={openPopup}>Create Linked List</button>

                {isPopupOpen && (
                  <div className="popup">
                    <div className="popup-content">
                      <h3>Enter Node Values (space-separated)</h3>
                      <textarea
                        value={newNodes}
                        onChange={handleNodeValuesChange}
                        placeholder="Enter node values separated by space"
                      />
                      <button onClick={createLinkedList}>Create Linked List</button>
                      <button onClick={closePopup}>Cancel</button>
                    </div>
                  </div>
                )}

                <div>
                  <button onClick={() => insertNode('start', prompt("Enter value to insert at the start"))}>Insert at Start</button>
                  <button onClick={() => insertNode('end', prompt("Enter value to insert at the end"))}>Insert at End</button>
                  <button onClick={() => insertNode('random', prompt("Enter value to insert at random position"))}>Insert Random</button>

                  <button onClick={() => deleteNode('start')}>Delete from Start</button>
                  <button onClick={() => deleteNode('end')}>Delete from End</button>
                  <button onClick={() => deleteNode('position')}>Delete by Position</button>

                  <button onClick={reverseList}>Reverse List</button>
                  <button onClick={() => updateNode(prompt("Enter value to update"), prompt("Enter new value"))}>Update by Value</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}