import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Login.css'; // Include styling for the page

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to different routes

  // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5006/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         // Handle successful login (e.g., store JWT, redirect, etc.)
//         console.log('Login successful:', data);

//         // You can save the token to localStorage or state if needed
//         localStorage.setItem('token', data.token); // Store token in localStorage (optional)

//         // Redirect to the dashboard
//         navigate('/Home'); // Redirect to the dashboard page after successful login
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setError('An error occurred, please try again.');
//     }
//   };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5006/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Assuming the response contains a token and userId
      localStorage.setItem('userToken', data.token);  // Store token in localStorage
      localStorage.setItem('userId', data.userId);    // Store userId in localStorage
      console.log('Login successful');
      
      // Redirect to the Home page after successful login
      navigate('/Home');
    } else {
      setError(data.message || 'Login failed');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    setError('An error occurred, please try again.');
  }
};

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/RegisterUser">Register here</Link>
      </p>
    </div>
  );
}