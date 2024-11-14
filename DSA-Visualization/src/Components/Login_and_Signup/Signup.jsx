import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import './Signup.css';
import { BiSolidHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";


export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        occupation: '', 
        email: '',
        emailOtp: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted'); // Add this log to check if the function is called
        setShowModal(true);
    };

    const handleConfirm = async () => {
        const { confirmPassword, ...dataToSend } = formData;
        try {
            const response = await axios.post('http://localhost:3001/signup', dataToSend);
            console.log(response.data);
            setShowModal(false);
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            alert('Registration failed. Please try again.');
        }
    };

    const handleSendOtp = async () => {
        try {
            const response = await axios.post('http://localhost:3001/send-otp', { email: formData.email });
            console.log(response.data);
            alert('OTP sent to your email!');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            alert('Failed to send OTP. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Signup Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="formFirstName">First Name</label>
                    <input
                        type="text"
                        id="formFirstName"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Enter First Name'
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="formLastName">Last Name</label>
                    <input
                        type="text"
                        id="formLastName"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Enter Last name'
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="formOccupation">Occupation</label> {/* Changed label */}
                    <select
                        id="formOccupation" // Changed id
                        className="form-control"
                        name="occupation" // Changed name
                        value={formData.occupation} // Changed to occupation
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Occupation</option>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Professor">Professor</option>
                        <option value="Learner">Learner</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="formEmail">Email</label>
                    <input
                        type="email"
                        id="formEmail"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter Email'
                        required
                    />
                    <button type="button" onClick={handleSendOtp}>Send OTP</button>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="formEmailOtp">Enter Email OTP</label>
                    <input
                        type="text"
                        id="formEmailOtp"
                        className="form-control"
                        name="emailOtp"
                        value={formData.emailOtp}
                        onChange={handleChange}
                        placeholder='Enter Opt'
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="formPassword">Password</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="formPassword"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter your password'
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
                    <label className="form-label" htmlFor="formConfirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="formConfirmPassword"
                        className="form-control"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder='Conform your Password'
                        required
                    />
                </div>

                <button type="submit" onSubmit={handleConfirm}>Register</button>
            </form>

            <p>Already have an account? <Link to="/login">Login</Link></p>

            <div className={`modal ${showModal ? '' : 'hidden'}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>Confirm Registration</h2>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Name: {formData.firstName} {formData.lastName}<br />
                            Occupation: {formData.occupation}<br /> {/* Changed from Category to Occupation */}
                            Email: {formData.email}<br />
                            Email OTP: {formData.emailOtp}<br />
                            Password: {formData.password}<br />
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                        <button onClick={handleConfirm}>Confirm</button>
                    </div>
                </div>
            </div>

            {showSuccess && (
                <div className="fixed-alert">
                    <div className="alert alert-success">
                        <strong>Registration Successful</strong>
                        <p>You have successfully registered!</p>
                    </div>
                </div>
            )}
        </div>
    );
}