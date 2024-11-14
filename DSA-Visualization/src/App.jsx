import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Login_and_Signup/Signup';
import Login from './Components/Login_and_Signup/Login'; 
import User_Dashboard from './Components/User_Dashboard/User_Dashboard';


function App() {
  return (
    <Router>
    
      <Routes>
        {/* Redirect from the root path to /Home */}
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<User_Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;