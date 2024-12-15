import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import Stack_IMG from '../Images/Stack_Image.png';
import '../CSS/Stack.css';

export default function Stack() {
  const [stack, setStack] = useState([]);
  const [value, setValue] = useState('');
  const [isPushing, setIsPushing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle input value change
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Push operation
  const pushToStack = () => {
    if (value) {
      setIsPushing(true);
      setStack([value, ...stack]);
      setValue('');
      setTimeout(() => setIsPushing(false), 500); // Reset pushing state after animation
      closeModal(); // Close modal after pushing value
    }
  };

  // Pop operation
  const popFromStack = () => {
    if (stack.length > 0) {
      setStack(stack.slice(1)); // Remove top element
    } else {
      alert('Stack is empty!');
    }
  };

  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Stack: </h3>
          <p>
            A Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO (Last In First Out) or FILO (First In Last Out).
          </p>
          <img src={Stack_IMG} className="image_stack" alt="Stack Image" />

          <div className="Stack-implementation">
            {/* Button to open modal */}
            <button onClick={openModal} className="stack-button">Push to Stack</button>
            <button onClick={popFromStack} className="stack-button-pop">Pop from Stack</button>

            {/* Modal for user input */}
            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>&times;</span>
                  <h3>Enter Value to Push</h3>
                  <input 
                    type="text" 
                    value={value} 
                    onChange={handleInputChange} 
                    placeholder="Enter value" 
                  />
                  <button onClick={pushToStack} className="stack-button">Submit</button>
                </div>
              </div>
            )}

            {/* Stack Container */}
            <div className="stack-container">
              <div className="stack-box">
                {stack.length === 0 ? (
                  <p>Empty Stack</p>
                ) : (
                  stack.map((element, index) => (
                    <div
                      key={index}
                      className={`stack-element ${isPushing && index === 0 ? 'pushing' : ''}`}
                    >
                      {element}
                      {index === 0 && <div className="top-label"> ← Top </div>}
                    </div>
                  ))
                )}
              </div>
              <div className="bottom-label">Bottom</div>
            </div>
          </div>

          <div className="navigation-buttons">
            <Link to="/Array">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Queue">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}