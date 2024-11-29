import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Login_and_Signup/Signup';
import Login from './Components/Login_and_Signup/Login'; 
import User_Dashboard from './Components/User_Dashboard/User_Dashboard';
import DataStructures from './Components/User_Dashboard/DataStructures';
import Algorithms from './Components/User_Dashboard/Algorithms';

import Array from './Components/DataStructures/Array';
import Character from './Components/DataStructures/Character';
import Float from './Components/DataStructures/Float';
import Graph from './Components/DataStructures/Graph';
import Integer from './Components/DataStructures/Integer';
import LinearDataType from './Components/DataStructures/Linear_Data_Type';
import NonLinearDatatype from './Components/DataStructures/Non_Linear_Data_Type';
import PrimitiveDataType from './Components/DataStructures/Primitive_Data_Type';
import NonPrimitiveDataType from './Components/DataStructures/Non_Primitive_Data_Type';
import Queue from './Components/DataStructures/Queue';
import Stack from './Components/DataStructures/Stack';
import Tree from './Components/DataStructures/Tree';
import LinkedList from './Components/DataStructures/Linked_List';
import Boolean from './Components/DataStructures/Boolean';



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
        <Route path="/DataStructure" element={<DataStructures/>}/>
        <Route path="/Algorithms" element={<Algorithms/>}/>

        {/* Data Structures  */}
        <Route path="/Array" element={<Array/>}/>
        <Route path="/Character" element={<Character/>}/>
        <Route path="/Float" element={<Float/>}/>
        <Route path="/Graph" element={<Graph/>}/>
        <Route path="/Integer" element={<Integer/>}/>
        <Route path="/LinearDataType" element={<LinearDataType/>}/>
        <Route path="/NonLinearDatatype" element={<NonLinearDatatype/>}/>
        <Route path="/PrimitiveDataType" element={<PrimitiveDataType/>}/>
        <Route path="/NonPrimitiveDataType" element={<NonPrimitiveDataType/>}/>
        <Route path="/Queue" element={<Queue/>}/>
        <Route path="/Stack" element={<Stack/>}/>
        <Route path="/Tree" element={<Tree/>}/>
        <Route path="/LinkedList" element={<LinkedList/>}/>
        <Route path="/Boolean" element={<Boolean/>}/>
     
        
      </Routes>
    </Router>
  );
}

export default App;