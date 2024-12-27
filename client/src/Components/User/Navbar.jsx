import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Your custom CSS for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">QuizApp</Link> {/* Home link */}
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/subjects">Subjects</Link> {/* Link to subjects */}
          </li>
          <li>
            <Link to="/quizzes">Quizzes</Link> {/* Link to quizzes */}
          </li>
        </ul>
      </div>
    </nav>
  );
}