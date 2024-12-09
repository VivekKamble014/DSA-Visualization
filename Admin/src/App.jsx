import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import Ragister from './Components/AdminRagistration';
import AdminDashboard from './Components/AdminDashboard.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path='/Ragister' element={<Ragister/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard />} />  

        </Routes>
      </div>
    </Router>
  );
}

export default App;