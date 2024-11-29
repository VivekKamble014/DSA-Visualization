import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';

export default function Integer() {
  return (
    <div>
      <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Integer :</h3>
            <p>The integer (or int) data type represents whole numbers without any fractional or decimal part. Integers are commonly used in programming for exact numeric values, counters, and indexes.</p>
            <p>Key Characteristics</p>
            <ul>
              <h5>Range and Size: Integer range depends on its storage size, typically in bits.</h5>
              <li>8-bit integers: Range from -128 to 127.</li>
              <li>6-bit integers: Range from -32,768 to 32,767.</li>
              <li>32-bit integers: Range from -2,147,483,648 to 2,147,483,647.</li>
              <li>64-bit integers: Range from approximately -9 quintillion to 9 quintillion.</li>
              <h5>Signed vs. Unsigned:</h5>
              <li>Signed integers allow positive and negative values.</li>
              <li>Unsigned integers only represent non-negative values, effectively doubling the upper range (e.g., 32-bit unsigned integers range from 0 to 4,294,967,295).</li>

            </ul>
            <p>Special Characteristics</p>
            <ul>
              <li>Exact Representation: Unlike floating-point numbers, integers are represented exactly without rounding errors.</li>
              <li>Overflow and Underflow: If an integer exceeds its range, it may cause overflow or wrap around to the opposite limit, depending on the language.</li>

            </ul>
            <p>Common Uses</p>
            <p>Integers are widely used for indexing, counting, loops, and applications needing exact values without fractional parts, like age or item quantities.</p>


            <div className="navigation-buttons">
            <Link to="/PrimitiveDataType">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Float">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
