import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/Sorting.css';

export default function Quick_Sort() {
  const [array, setArray] = useState([]);
  const [numBars, setNumBars] = useState(10);
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [highlightedBars, setHighlightedBars] = useState([]);
  const isRunning = useRef(false);

  useEffect(() => {
    generateRandomArray(numBars);
  }, [numBars]);

  const generateRandomArray = (num) => {
    const newArray = Array.from({ length: num }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
  };

  const quickSort = async (arr, left = 0, right = arr.length - 1) => {
    if (left >= right || !isRunning.current) return;  // Check if sorting should stop

    const pivotIndex = await partition(arr, left, right);
    setHighlightedBars([pivotIndex]);
    await new Promise(resolve => setTimeout(resolve, speed));
    
    // Recursively sort the sub-arrays if running
    await quickSort(arr, left, pivotIndex - 1);
    await quickSort(arr, pivotIndex + 1, right);
  };

  const partition = async (arr, left, right) => {
    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
      if (!isRunning.current) return;  // Check if sorting should stop
      setHighlightedBars([j, right]); // Highlight the elements being compared
      await new Promise(resolve => setTimeout(resolve, speed));

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        setArray([...arr]);
      }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // Place pivot in the correct position
    setArray([...arr]);
    return i + 1;
  };

  const startSorting = () => {
    setIsSorting(true);
    isRunning.current = true;  // Set isRunning to true when sorting starts
    const arrCopy = [...array];
    quickSort(arrCopy);
  };

  const stopSorting = () => {
    isRunning.current = false;  // Set isRunning to false to stop the sorting
    setIsSorting(false);
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
          <h3>Quick Sort</h3>
          <div>
            {/* Description */}
            <section>
              <h5>Description</h5>
              <p>Quick Sort is an efficient sorting algorithm that uses a divide-and-conquer approach to sort elements. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.</p>
            </section>

            {/* Algorithm Steps */}
            <section>
              <h5>Algorithm Steps</h5>
              <ol>
                <li>Choose a pivot element from the array.</li>
                <li>Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.</li>
                <li>Recursively apply the above steps to the sub-arrays.</li>
              </ol>
            </section>

            {/* JavaScript Code Implementation */}
            <section>
              <h5>JavaScript Code Implementation</h5>
              <pre>
                <code>
{`function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let array = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array: " + quickSort(array));
`}
                </code>
              </pre>
            </section>

            {/* Complexity Analysis */}
            <section>
              <h5>Complexity Analysis</h5>
              <p>Time Complexity: O(n log n) on average, O(n^2) in the worst case.</p>
              <p>Space Complexity: O(log n) due to the stack space for recursive calls.</p>
            </section>
          </div>

          {/* Bar Graph Visualization */}
          <div className="QuickSort-Graph">
            <h3>Example: </h3>
            <div>
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
            <button onClick={startSorting} disabled={isSorting}>Start Sorting</button>
            <button onClick={stopSorting} disabled={!isSorting}>Stop Sorting</button>
            <button onClick={() => shuffleArray()} disabled={isSorting}>Mix</button>

            {/* Graph Representation */}
            <div className="bar-container">
              {array.map((value, idx) => (
                <div
                  key={idx}
                  className={`bar-wrapper ${highlightedBars.includes(idx) ? 'highlight' : ''}`}
                >
                  <div
                    className="bar"
                    style={{
                      height: `${value * 3}px`, // Height based on the value
                    }}
                  />
                  <div className="bar-value">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <Link to="/MergeSort">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/SelectionSort">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}