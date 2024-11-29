import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';

export default function Float() {
  return (
    <div>
    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Float :</h3>
            <p>The float data type represents real numbers with a fractional part and is essential for calculations requiring non-integer values. Floats are typically stored in 32-bit (single precision, ~7 decimal places) or 64-bit (double precision, ~15-16 decimal places) formats, depending on precision needs.</p>

            <p>They are stored in scientific notation using three parts:</p>
            <ul>
              <li>Sign: Indicates positive or negative.</li>
              <li>Exponent: Scales the value range.</li>
              <li>Mantissa: Stores the significant digits.</li>
            </ul>
            <p>Properties</p>
            <ul>
              <li>Precision Limitations: Floats cannot represent every decimal precisely, leading to minor rounding errors, especially with repeating decimals like 0.1.</li>
              <li>Special Values: Floats include Infinity (for overflow) and NaN (Not a Number) for undefined results.</li>
              <li>Applications: Used widely in scientific calculations, graphics, and applications where exact precision is less critical.</li>

            </ul>
            <p>Floats offer flexibility for large ranges but should be used with care in exact-value calculations, like currency, where errors from rounding could be problematic.</p>



            <div className="navigation-buttons">
            <Link to="/PrimitiveDataType">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Character">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
