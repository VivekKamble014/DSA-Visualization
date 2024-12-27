import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';

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

import BinarySearch from './Components/Algorithms/Binary_Search';
import BubbleSort from './Components/Algorithms/Bubble_Sort';
import InsertionSort from './Components/Algorithms/Insertion_Sort';
import LinearSearch from './Components/Algorithms/Linear_search';
import MergeSort from './Components/Algorithms/Merge_sort';
import QuickSort from './Components/Algorithms/Quick_Sort';
import Searching from './Components/Algorithms/Searching';
import SelectionSort from './Components/Algorithms/Selection_Sort';
import Sorting from './Components/Algorithms/Sorting';
import Login from './Components/User/Login';
import RegisterUser from './Components/User/Registration';
import UserDashboard from './Components/User/UserDashboard';
import StartQuiz from './Components/User/StartQuiz';
import Dashboard from './Components/User_Dashboard/User_Dashboard'

function App() {
  return (
    <Router>
    
      <Routes>
        {/* Redirect from the root path to /Home */}
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />

       
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

      {/* Algorithms */}

        <Route path="/BinarySearch" element={<BinarySearch/>}/>
        <Route path="/BubbleSort" element={<BubbleSort/>}/>
        <Route path="/InsertionSort" element={<InsertionSort/>}/>
        <Route path="/LinearSearch" element={<LinearSearch/>}/>
        <Route path="/MergeSort" element={<MergeSort/>}/>
        <Route path="/QuickSort" element={<QuickSort/>}/>
        <Route path="/Searching" element={<Searching/>}/>
        <Route path="/SelectionSort" element={<SelectionSort/>}/>
        <Route path="/Sorting" element={<Sorting/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/RegisterUser" element={<RegisterUser/>}/>
        <Route path="/UserDashboard" element={<UserDashboard/>}/>

        <Route path="/quiz/:quizId" element={<StartQuiz />} /> {/* Correctly set the element */}

        
      </Routes>
    </Router>
  );
}

export default App;