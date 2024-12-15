import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  // Import Navigate component
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard'; // Import Admin Dashboard component
import Register from './components/Register'; // Import Register component

import AddSubject from './components/AddSubject';  // Import Add Subject page
import CreateQuiz from './components/AddQuiz';  // Import Create Quiz page
import AdminProfile from './components/AdminProfile';  // Import Admin Profile page
import ShowQuizes from './components/ShowQuizes';  // Import Admin Profile page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the default route */}
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login on the root route */}
        
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />


        <Route path="/add-subject" element={<AddSubject />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/show-quizes" element={<ShowQuizes />} />
      </Routes>
    </Router>
  );
};

export default App;