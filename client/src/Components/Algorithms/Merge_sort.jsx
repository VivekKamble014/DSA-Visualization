import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import '../CSS/Sorting.css';

export default function MergeSort() {
  const [array, setArray] = useState([]);
  const [numBars, setNumBars] = useState(10);
  const [speed, setSpeed] = useState(100);
  const [isSorting, setIsSorting] = useState(false);
  const [highlightedBars, setHighlightedBars] = useState([]);
  const isRunning = useRef(false); // Track if sorting is in progress

  useEffect(() => {
    generateRandomArray(numBars);
  }, [numBars]);

  const generateRandomArray = (num) => {
    const newArray = Array.from({ length: num }, () => Math.floor(Math.random() * 100) + 1);
    setArray(newArray);
  };

  const mergeSort = async (arr) => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Visualize dividing step
    setHighlightedBars([middle - 1, middle]);
    await new Promise(resolve => setTimeout(resolve, speed));

    const sortedLeft = await mergeSort(left);
    const sortedRight = await mergeSort(right);

    const merged = await merge(sortedLeft, sortedRight);
    return merged;
  };

  const merge = async (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    let tempHighlighted = [];

    while (leftIndex < left.length && rightIndex < right.length) {
      // Highlight bars during comparison
      tempHighlighted = [leftIndex, rightIndex];
      setHighlightedBars(tempHighlighted);
      await new Promise(resolve => setTimeout(resolve, speed));

      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }

      // Update array visually in between each comparison
      setArray([...array]);
    }

    const mergedArray = resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));

    setArray(mergedArray); // Update the array after merge
    return mergedArray;
  };

  const startSorting = async () => {
    setIsSorting(true);
    await mergeSort(array);
    setIsSorting(false);
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
          <h3>Merge Sort :</h3>

          {/* Description */}
          <section>
            <h5>Description</h5>
            <p>Merge Sort is a divide-and-conquer algorithm that splits the array into halves, recursively sorts each half, and then merges the sorted halves to produce a sorted array. It is known for its efficiency and stability in sorting large datasets.</p>
          </section>

          {/* Algorithm Steps */}
          <section>
            <h5>Algorithm Steps</h5>
            <ol>
              <li>Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).</li>
              <li>Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.</li>
            </ol>
          </section>

          {/* JavaScript Code Implementation */}
          <section>
            <h5>JavaScript Code Implementation</h5>
            <pre>
              <code>
{`function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

// Example usage
let array = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted array: " + mergeSort(array));
`}
              </code>
            </pre>
          </section>

          {/* Complexity Analysis */}
          <section>
            <h5>Complexity Analysis</h5>
            <p>Time Complexity: O(n log n) in all cases (worst, average, and best).</p>
            <p>Space Complexity: O(n) due to the additional space required for the temporary arrays.</p>
          </section>
          <div className="Merge-Graph">

          <h3>Example: </h3>
          <div >
            <div>
              <h4>Merge Sort</h4>
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
          </div>
          <div className="navigation-buttons">
            <Link to="/BubbleSort">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/QuickSort">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}