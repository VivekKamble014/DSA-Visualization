// import React, { useState } from 'react';
// import axios from 'axios';
// import './css/Login.css'; // Custom CSS for styling

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5006/api/auth/login', {
//         username,
//         password,
//       });
//       setSuccessMessage('Login successful!');
//       setErrorMessage('');
//       localStorage.setItem('token', response.data.token); // Save JWT token to localStorage
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || 'Invalid credentials');
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       {successMessage && <div className="success-message">{successMessage}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import { Link } from 'react-router-dom';  // Import Link for navigation
import './css/Login.css'; // Custom CSS for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Initialize the navigate function for redirection
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5006/api/auth/login', {
        username,
        password,
      });
      setSuccessMessage('Login successful!');
      setErrorMessage('');
      localStorage.setItem('token', response.data.token); // Save JWT token to localStorage

      // Redirect to Admin Dashboard after successful login
      navigate('/admin-dashboard'); // Adjust the path to your actual admin dashboard route
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Invalid credentials');
      setSuccessMessage('');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
      
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;