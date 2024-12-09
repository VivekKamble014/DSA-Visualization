import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/Sorting.css';

export default function Selection_Sort() {
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

  const selectionSort = async (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      setHighlightedBars([minIndex]);
      for (let j = i + 1; j < n; j++) {
        setHighlightedBars([minIndex, j]); // Highlight current minimum and comparison
        await new Promise(resolve => setTimeout(resolve, speed));
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
        setArray([...arr]);
      }
    }
    setIsSorting(false);
  };

  const startSorting = () => {
    setIsSorting(true);
    const arrCopy = [...array];
    selectionSort(arrCopy);
  };

  const stopSorting = () => {
    isRunning.current = false;
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
          <h3>Selection Sort</h3>
          <div>
            {/* Description */}
            <section>
              <h5>Description</h5>
              <p>Selection Sort is a simple sorting algorithm. It divides the input list into two parts: the sublist of already sorted items and the unsorted items. It finds the smallest element in the unsorted sublist and swaps it with the first unsorted element.</p>
            </section>

            {/* Algorithm Steps */}
            <section>
              <h5>Algorithm Steps</h5>
              <ol>
                <li>Start from the first element as the minimum.</li>
                <li>Compare it with the next element. If smaller, update the minimum.</li>
                <li>At the end of the loop, swap the minimum element with the first unsorted element.</li>
                <li>Repeat until the array is sorted.</li>
              </ol>
            </section>

            {/* JavaScript Code Implementation */}
            <section>
              <h5>JavaScript Code Implementation</h5>
              <pre>
                <code>
{`function selectionSort(arr) {
  let n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

// Example usage
let array = [64, 25, 12, 22, 11];
console.log("Sorted array: " + selectionSort(array));
`}
                </code>
              </pre>
            </section>

            {/* Complexity Analysis */}
            <section>
              <h5>Complexity Analysis</h5>
              <p>Time Complexity: O(n^2) for the worst, average, and best cases.</p>
              <p>Space Complexity: O(1) due to the use of a constant amount of extra space.</p>
            </section>
          </div>

          {/* Sorting Controls */}
          <div className="SelectionSort-Graph">
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
            <button onClick={() => shuffleArray()} disabled={isSorting}>Shuffle</button>

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
                      height: `${value * 3}px`, // Height based on value
                    }}
                  />
                  <div className="bar-value">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <Link to="/QuickSort">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/InsertionSort">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}