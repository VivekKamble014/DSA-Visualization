// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import '../CSS/Login.css'; // Import the new CSS file
import axios from 'axios';
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import Navigation from '../Navigation/Navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate(); // Use useNavigate for programmatic navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading symbol
        setError(''); // Clear previous error

        try {
            const result = await axios.post('http://localhost:3001/login', { email, password });
            console.log(result);

            if (result.data === 'Success') {
                localStorage.setItem('userToken', 'exampleToken'); // Save token to localStorage
                setLoading(false); // Hide loading symbol
                navigate('/Dashboard'); // Redirect to Dashboard
            } else {
                setLoading(false); // Hide loading symbol if login fails
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error(err);
            setLoading(false); // Hide loading symbol if an error occurs
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
        <Navigation/>
        <div className='Login-container'>
       
        <div className="container">
            <h2>Login Form</h2>
            {error && <div className="alert">{error}</div>}
            {loading && <div className="loading">Loading...</div>} {/* Loading symbol */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    {/* <label className="form-label" htmlFor="formEmail">Email</label> */}
                    <input
                        type="email"
                        id="formEmail"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Email Id'
                        required
                    />
                </div>

                <div className="form-group">
                    {/* <label className="form-label" htmlFor="formPassword">Password</label> */}
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="formPassword"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter Password'
                            required
                            />
                        <Link className='hide-btn' 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ?  <BiShow />: <BiSolidHide  />
                                
                            }
                        </Link>
                        
                    </div>
                </div>

                <div className="form-group">
                    <Link  to="/forgot-password">Forgot Password?</Link>
                </div>

                <button type="submit" disabled={loading}>Login</button>
            </form>

            <div className="mt-3">
                <p>
                    Don't have an account? <Link to="/signup">Sign up here</Link>
                </p>
            </div>
        </div> </div>
        </>
    );
}