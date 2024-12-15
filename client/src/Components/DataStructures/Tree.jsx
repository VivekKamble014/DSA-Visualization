import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import Tree_img from '../Images/Tree_Image.png';
import '../CSS/Tree.css';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default function Tree() {
  const [root, setRoot] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const insertNode = (root, value) => {
    if (!root) {
      return new TreeNode(value);
    }
    if (value < root.value) {
      root.left = insertNode(root.left, value);
    } else {
      root.right = insertNode(root.right, value);
    }
    return root;
  };

  const handleInsert = () => {
    const values = inputValue.split(' ').map(Number);
    let newRoot = root;
    values.forEach(value => {
      newRoot = insertNode(newRoot, value);
    });
    setRoot(newRoot);
    setShowPopup(false);
    setInputValue('');
  };

  const renderTree = (node) => {
    if (!node) return null;
    return (
      <table>
        <tbody>
          <tr>
            <td colSpan="2">
              <div className="tree-node">
                <span>{node.value}</span>
                <div className="line-down"></div>
              </div>
            </td>
          </tr>
          <tr>
            {node.left ? (
              <td>
                <div className="line"></div>
                {renderTree(node.left)}
              </td>
            ) : (
              <td></td>
            )}
            {node.right ? (
              <td>
                <div className="line"></div>
                {renderTree(node.right)}
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Tree:</h3>
          <p>A tree is a non-linear data structure that represents hierarchical relationships between elements. It consists of nodes connected by edges, where each node may have child nodes. A tree starts with a root node and branches out to additional nodes, forming a structure resembling a real tree.</p>
          <h5>Key Components of a Tree:</h5>
          <ol>
            <li>Node: The basic unit of a tree containing data and references to its child nodes.</li>
            <li>Root: The topmost node of a tree. It is the starting point of the hierarchy.</li>
            <li>Edge: A connection between two nodes.</li>
            <li>Parent Node: A node that has child nodes.</li>
            <li>Child Node: A node that descends from a parent node.</li>
            <li>Leaf Node: A node with no children.</li>
            <li>Subtree: A tree formed by any node and its descendants.</li>
            <li>Height of Tree: The length of the longest path from the root to a leaf.</li>
            <li>Depth of Node: The distance from the root to a specific node.</li>
          </ol>
          <div className='Tree_image'>
            <h5>Example:</h5>
            <img src={Tree_img} alt="Tree image"></img>
          </div>
          <div className='Tree-Implementation'>
            <button onClick={() => setShowPopup(true)}>Insert Values</button>
            {showPopup && (
              <>
                <div className="overlay" onClick={() => setShowPopup(false)}></div>
                <div className='popup-main'>

                <div className="popup">
                  <div className="popup-inner">
                    <h3>Insert Values</h3>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter values separated by spaces"
                    />
                    <button onClick={handleInsert}>Insert</button>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                  </div>
                </div>
                </div>
              </>
            )}
            <div className="tree-visualization">
              {renderTree(root)}
            </div>
          </div>
          <h5>Types of Trees:</h5>
          <ol>
            <li><h5>Binary Tree:</h5></li>
            <ul>
              <li>Each node can have at most two children</li>
              <h5>Types:</h5>
              <ul>
                <li>Full Binary Tree: Every node has 0 or 2 children.</li>
                <li>Perfect Binary Tree: All levels are completely filled.</li>
                <li>Complete Binary Tree: All levels except possibly the last are completely filled, and nodes are as far left as possible.</li>
              </ul>
            </ul>
            <li><h5>Binary Search Tree (BST):</h5></li>
            <ul>
              <li>A binary tree with the property that:</li>
              <li>Left child - Parent - Right child.</li>
              <li>Used for efficient searching and sorting.</li>
            </ul>
            <li><h5>AVL Tree:</h5></li>
            <ul>
              <li>A self-balancing binary search tree where the difference in height between left and right subtrees is at most 1.</li>
            </ul>
            <li><h5>Heap:</h5></li>
            <ul>
              <li>A binary tree used to implement priority queues.</li>
              <h5>Types:</h5>
              <ul>
                <li>Max Heap: Parent nodes are greater than their children.</li>
                <li>Min Heap: Parent nodes are smaller than their children.</li>
              </ul>
            </ul>
            <li><h5>N-ary Tree:</h5></li>
            <ul>
              <li>Each node can have at most N children.</li>
            </ul>
            <li><h5>Trie:</h5></li>
            <ul>
              <li>A tree used for storing strings efficiently, such as in dictionaries and search engines.</li>
            </ul>
            <li><h5>B-Trees and B+ Trees:</h5></li>
            <ul>
              <li>Self-balancing trees optimized for systems that read/write large blocks of data, used in databases and file systems.</li>
            </ul>
          </ol>
          <h5>Application of Tree data structure.</h5>
          <ol>
            <li><h5>Search Operations: </h5></li>
            <ul>
              <li>Efficient searching in binary search trees (BSTs) for elements.</li>
            </ul>
            <li><h5>Sorting Algorithms: </h5></li>
            <ul>
              <li>Used in tree sort, a sorting algorithm.</li>
            </ul>
            <li><h5>Expression Parsing:</h5></li>
            <ul>
              <li>Used in parsing expressions in compilers.</li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}