import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/Searching.css'; // Ensure to import the updated CSS

export default function Linear_search() {
  const [array, setArray] = useState([2, 4, 0, 1, 9]); // Default array
  const [target, setTarget] = useState(1); // Default target
  const [foundIndex, setFoundIndex] = useState(null); // Index of the found target
  const [showPopup, setShowPopup] = useState(false); // To show or hide the popup
  const [inputValue, setInputValue] = useState(""); // State for input string

  // Linear search function
  const linearSearch = async (arr, target) => {
    // Iterate through the array and highlight each bar as it is checked
    for (let i = 0; i < arr.length; i++) {
      const bar = document.getElementById(`bar-${i}`);
      bar.classList.add('highlight'); // Highlight the current bar

      // Pause for a short period to visualize the animation
      await new Promise(resolve => setTimeout(resolve, 500));

      if (arr[i] === target) {
        setFoundIndex(i);
        bar.classList.add('found'); // Highlight the found bar
        setShowPopup(true); // Show popup if found
        return i;
      }

      // Reset the bar color if not found
      bar.classList.remove('highlight');
    }
    setFoundIndex(-1); // Indicate that the element was not found
    setShowPopup(true); // Show popup if not found
    return -1;
  };

  const handleSearch = () => {
    linearSearch(array, target);
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
          <h3>Linear Search :</h3>
           {/* Description */}
           <section>
              <h5>Description</h5>
              <p>Linear Search is a straightforward searching algorithm that checks every element in a list until the desired element is found or the list ends. It is also known as a sequential search.</p>
            </section>
            
            {/* Algorithm Steps */}
            <section>
              <h5>Algorithm Steps</h5>
              <ol>
                <li>Start from the first element of the list.</li>
                <li>Compare the current element with the target element.</li>
                <li>If the current element matches the target, return the index.</li>
                <li>If the current element does not match, move to the next element and repeat step 2.</li>
                <li>If the end of the list is reached without finding the target element, return -1.</li>
              </ol>
            </section>
            {/* JavaScript Code Implementation */}
            <section>
              <h5>JavaScript Code Implementation</h5>
              <pre>
                <code>
{`function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Example usage
let array = [2, 4, 0, 1, 9];
let target = 1;
let result = linearSearch(array, target);
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

          <div className='LinearSearch-Visu'>
          <h3>Example: </h3>
            <div>
              <input 
                className="input-field"
                type="text" 
                placeholder="Enter Array (space separated)"
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
            <Link to="/Searching">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/BinarySearch">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}