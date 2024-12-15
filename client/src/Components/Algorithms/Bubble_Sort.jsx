import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/Sorting.css';

export default function Bubble_Sort() {
  const [array, setArray] = useState([]);
  const [numBars, setNumBars] = useState(10);
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false); // State to track sorting status
  const [highlightedBars, setHighlightedBars] = useState([]); // Track highlighted bars

  useEffect(() => {
    generateRandomArray(numBars);
  }, [numBars]);

  const generateRandomArray = (num) => {
    const newArray = Array.from({ length: num }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setIsSorting(true); // Disable buttons when sorting starts
    let arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Highlight the bars being compared
        setHighlightedBars([j, j + 1]);
        
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, speed)); // Delay for visualization
        }

        // Reset the highlighted bars after a short delay
        setHighlightedBars([]);
      }
    }
    setIsSorting(false); // Enable buttons after sorting is complete
  };

  const shuffleArray = () => {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setArray(arr);
  };

  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Bubble Sort :</h3>

          {/* Description */}
          <section>
            <h5>Description</h5>
            <p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm is known for its simplicity but is not suitable for large data sets.</p>
          </section>

          {/* Algorithm Steps */}
          <section>
            <h5>Algorithm Steps</h5>
            <ol>
              <li>Start at the beginning of the list.</li>
              <li>Compare the first two elements. If the first is greater than the second, swap them.</li>
              <li>Move to the next pair of elements, and repeat step 2 until the end of the list is reached.</li>
              <li>Repeat steps 1-3 for the rest of the list until no swaps are needed. The list is now sorted.</li>
            </ol>
          </section>

          {/* JavaScript Code Implementation */}
          <section>
            <h5>JavaScript Code Implementation</h5>
            <pre>
              <code>
{`function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n-1; i++) {
    for (let j = 0; j < n-i-1; j++) {
      if (arr[j] > arr[j+1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array: " + bubbleSort(array));
`}
              </code>
            </pre>
          </section>

          {/* Complexity Analysis */}
          <section>
            <h5>Complexity Analysis</h5>
            <p>Time Complexity: O(n<sup>2</sup>) in the worst and average case, O(n) in the best case when the array is already sorted.</p>
            <p>Space Complexity: O(1) since Bubble Sort only requires a single additional memory space for the temp variable used for swapping.</p>
          </section>
          <h3>Example: </h3>
          <div className='Bubble-Graph'>

          <div>
          <h4>Bubble Sort</h4>
            <label htmlFor="numBars">Number of bars: </label>
            <input
              type="range"
              id="numBars"
              min="1"
              max="50"
              value={numBars}
              onChange={(e) => setNumBars(e.target.value)}
            />
            <span>{numBars}</span>
          </div>
          <div>
            <label htmlFor="speed">Speed: </label>
            <input
              type="range"
              id="speed"
              min="10"
              max="1000"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
            <span>{speed} ms</span>
          </div>
          <button onClick={bubbleSort} disabled={isSorting}>Sort</button>
          <button onClick={() => generateRandomArray(numBars)} disabled={isSorting}>Mix</button>

          <div className="bar-container">
            {array.map((value, idx) => (
              <div
                key={idx}
                className={`bar-wrapper ${highlightedBars.includes(idx) ? 'highlight' : ''}`}
              >
                <div
                  className="bar"
                  style={{
                    width: `${600 / numBars}px`,
                    height: `${value * 3}px`,
                  }}
                >
                </div>
                  <div className="bar-value">{value}</div>
              </div>
            ))}
          </div>
         
          </div>
          <div className="navigation-buttons">
            <Link to="/Sorting">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/MergeSort">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}