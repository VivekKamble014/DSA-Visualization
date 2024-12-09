import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/Sorting.css';

export default function Insertion_Sort() {
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

  const insertionSort = async (arr) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;

      // Highlight current element and its comparison
      setHighlightedBars([i, j]);
      await new Promise(resolve => setTimeout(resolve, speed));

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        setArray([...arr]);

        setHighlightedBars([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, speed));

        j = j - 1;
      }
      arr[j + 1] = key;
      setArray([...arr]);

      setHighlightedBars([j + 1]);
      await new Promise(resolve => setTimeout(resolve, speed));
    }
    setIsSorting(false);
  };

  const startSorting = () => {
    setIsSorting(true);
    const arrCopy = [...array];
    insertionSort(arrCopy);
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
          <h3>Insertion Sort</h3>
          <div className="InsertionSort-Implementation">
            {/* Description */}
            <section>
              <h5>Description</h5>
              <p>Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, Insertion Sort provides several advantages:</p>
              <ul>
                <li>Simple implementation</li>
                <li>Efficient for small data sets</li>
                <li>More efficient in practice than most other simple quadratic (i.e., O(n^2)) algorithms such as selection sort or bubble sort</li>
                <li>Stable; does not change the relative order of elements with equal keys</li>
                <li>In-place; only requires a constant amount O(1) of additional memory space</li>
              </ul>
            </section>
            
            {/* Algorithm Steps */}
            <section>
              <h5>Algorithm Steps</h5>
              <ol>
                <li>Start by considering the first element as sorted.</li>
                <li>Take the next element and compare it with the elements in the sorted portion.</li>
                <li>Shift all the elements in the sorted portion that are greater than the new element to the right.</li>
                <li>Insert the new element into the correct position.</li>
                <li>Repeat until all elements are sorted.</li>
              </ol>
            </section>
            
            {/* JavaScript Code Implementation */}
            <section>
              <h5>JavaScript Code Implementation</h5>
              <pre>
                <code>
{`function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Example usage
let array = [12, 11, 13, 5, 6];
console.log("Sorted array: " + insertionSort(array));
`}
                </code>
              </pre>
            </section>

            {/* Complexity Analysis */}
            <section>
              <h5>Complexity Analysis</h5>
              <p>Time Complexity: O(n^2) for the worst and average cases; O(n) for the best case when the array is already sorted.</p>
              <p>Space Complexity: O(1) due to the use of a constant amount of extra space.</p>
            </section>
          </div>
          
          {/* Sorting Controls */}
          <div className="InsertionSort-Graph">
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
            <Link to="/SelectionSort">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Searching">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}