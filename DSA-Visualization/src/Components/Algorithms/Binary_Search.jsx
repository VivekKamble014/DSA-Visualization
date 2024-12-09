import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/Searching.css'; // Ensure to import the updated CSS

export default function Binary_Search() {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Default sorted array
  const [target, setTarget] = useState(4); // Default target
  const [foundIndex, setFoundIndex] = useState(null); // Index of the found target
  const [showPopup, setShowPopup] = useState(false); // To show or hide the popup
  const [inputValue, setInputValue] = useState(""); // State for input string

  // Binary search function with visualization
  const binarySearch = async (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const barLow = document.getElementById(`bar-${low}`);
      const barHigh = document.getElementById(`bar-${high}`);
      const barMid = document.getElementById(`bar-${mid}`);

      // Highlight the low, high, and mid bars
      barLow.classList.add('highlight');
      barHigh.classList.add('highlight');
      barMid.classList.add('mid-highlight');

      // Pause for a short period to visualize the animation
      await new Promise(resolve => setTimeout(resolve, 500));

      if (arr[mid] === target) {
        setFoundIndex(mid);
        barMid.classList.add('found'); // Highlight the found bar
        setShowPopup(true); // Show popup if found
        return mid;
      } else if (arr[mid] < target) {
        low = mid + 1;
        barLow.classList.remove('highlight');
        barMid.classList.remove('mid-highlight');
      } else {
        high = mid - 1;
        barHigh.classList.remove('highlight');
        barMid.classList.remove('mid-highlight');
      }
    }

    setFoundIndex(-1); // Indicate that the element was not found
    setShowPopup(true); // Show popup if not found
    return -1;
  };

  const handleSearch = () => {
    binarySearch(array, target);
  };

  const handleArrayChange = (e) => {
    setInputValue(e.target.value); // Update the input value with the current text
  };

  const handleArraySubmit = () => {
    const newArray = inputValue.split(" ").map((item) => parseInt(item)).filter((item) => !isNaN(item)); // Convert the space-separated string into an array of numbers
    setArray(newArray); // Update the array with the new values
    setInputValue(""); // Clear the input field after submission
  };

  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Binary Search :</h3>
          <section>
              <h5>Description</h5>
              <p>Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half.</p>
            </section>
            
            {/* Algorithm Steps */}
            <section>
              <h5>Algorithm Steps</h5>
              <ol>
                <li>Initialize the low and high indices to the first and last indices of the list, respectively.</li>
                <li>Compute the mid index as the average of low and high indices.</li>
                <li>Compare the target element with the element at the mid index:</li>
                <li>If the target element is equal to the mid element, return the mid index.</li>
                <li>If the target element is less than the mid element, set the high index to mid - 1.</li>
                <li>If the target element is greater than the mid element, set the low index to mid + 1.</li>
                <li>Repeat steps 2-5 until the target element is found or the low index exceeds the high index.</li>
                <li>If the target element is not found, return -1.</li>
              </ol>
            </section>
            
            {/* JavaScript Code Implementation */}
            <section>
              <h5>JavaScript Code Implementation</h5>
              <pre>
                <code>
{`function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

// Example usage
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 4;
let result = binarySearch(array, target);
console.log(result !== -1 ? "Element found at index: " + result : "Element not found");
`}
                </code>
              </pre>
            </section>
              {/* Interactive Visualization (Placeholder) */}
              <section>
              <h5>Interactive Visualization</h5>
              <p>(Interactive visualization goes here)</p>
            </section>
            
            {/* Complexity Analysis */}
            <section>
              <h5>Complexity Analysis</h5>
              <p>Time Complexity: O(log n) where n is the number of elements in the list.</p>
              <p>Space Complexity: O(1) due to the use of a constant amount of extra space.</p>
            </section>
          {/* Input for Array and Target */}
          <div className='BinarySearch-Visu'>
          <h3>Example:</h3>
            <div>
              <input 
                className="input-field"
                type="text" 
                placeholder="Enter Sorted Array (space separated)"
                value={inputValue}
                onChange={handleArrayChange}
              />
              <button className="submit-button" onClick={handleArraySubmit}>Submit Array</button>
              <input 
                className="input-field"
                type="number" 
                placeholder="Enter Target"
                value={target}
                onChange={(e) => setTarget(Number(e.target.value))}
              />
              <button className="submit-button" onClick={handleSearch}>Start Search</button>
            </div>
          
            {/* Visualization */}
            <div className="bar-container">
              {array.map((value, index) => (
                <div key={index} id={`bar-${index}`} className="bar-wrapper">
                  <div className="bar" style={{ height: `${value * 30}px` }}></div>
                  <div className="bar-value">{value}</div>
                </div>
              ))}
            </div>
          
          </div>

          {/* Popup Modal for "Element not found" */}
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <h4>
                  {foundIndex !== -1 
                    ? `Element found at index: ${foundIndex}` 
                    : `Element ${target} not found in the array`}
                </h4>
                <button onClick={() => setShowPopup(false)}>Close</button>
              </div>
            </div>
          )}

          <div className="navigation-buttons">
            <Link to="/LinearSearch">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/BubbleSort">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}