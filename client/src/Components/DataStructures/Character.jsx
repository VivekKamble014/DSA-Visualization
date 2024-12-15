import React from 'react'
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';

export default function Character() {
  return (
    <div>

    <Navigation />
     <Navbar />
     <div className="dashboard">
        <Sidebar />
          <div className="right-side">
            <h3>Character :</h3>
            <p>The char (character) data type is used to store a single character, such as a letter, digit, or symbol. In most programming languages, a character is typically stored as an 8-bit integer that maps to a specific character in an encoding standard, most commonly ASCII or Unicode.</p>
            <ul>
              <li>Size: Usually occupies 1 byte (8 bits) and represents values from 0 to 255 in extended ASCII or 0 to 127 in standard ASCII.</li>
              <li>Representation: Encodes characters like letters (A, a), digits (1, 5), symbols ($, %), and control characters (e.g., newline \n, tab \t).</li>
              <li>Unicode Support: Many modern languages allow characters to be stored as Unicode, enabling representation of a wide range of global symbols and languages.</li>
              <h4>Special Uses</h4>
              <li>Control Characters: Includes non-printing characters like newline, tab, and backspace, used for formatting text.</li>
              <li>String Formation: Chars are combined in sequences to form strings in languages like C, Java, and Python.
            </li>
            </ul>
            <p>Characters are ideal for storing and manipulating single symbols, whether letters, punctuation, or control characters, making them essential in text processing.</p>




            <div className="navigation-buttons">
            <Link to="/Float">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Boolean">
              <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
        </div>
    </div>
  )
}
