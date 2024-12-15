import React, { useState } from 'react';
import Modal from 'react-modal';
import Navigation from '../Navigation/Navigation';
import Navbar from '../Navigation/Navbar';
import Sidebar from '../User_Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import Array_Img from '../Images/Array_Image.png';
import '../CSS/Array.css';

Modal.setAppElement('#root');

export default function Array() {
  const [selectedArrayType, setSelectedArrayType] = useState(''); 
  const [arrayInput, setArrayInput] = useState(''); 
  const [arrayElements, setArrayElements] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  const [showInsertDeleteButtons, setShowInsertDeleteButtons] = useState(false); 
  const [customPrompt, setCustomPrompt] = useState(null); // Manage custom prompt state

  const handleArrayTypeChange = (type) => {
    setSelectedArrayType(type);
    setArrayInput('');
    setArrayElements([]);
    setIsModalOpen(false); 
    setShowInsertDeleteButtons(false); 
  };

  const handleArrayInputChange = (e) => {
    setArrayInput(e.target.value);
  };

  const handleArrayCreation = () => {
    if (selectedArrayType === '1D') {
      const elements = arrayInput.split(' ').map(Number);
      setArrayElements(elements);
    } else if (selectedArrayType === '2D') {
      const rows = arrayInput.trim().split('\n');
      const matrix = rows.map(row => row.split(' ').map(Number));
      setArrayElements(matrix);
    }
    setIsModalOpen(false);
    setShowInsertDeleteButtons(true);
  };

  // Handle Insert Data with custom prompt modal
  const handleInsertData = () => {
    setCustomPrompt({
      action: 'insert',
      promptMessage: 'Enter the value to insert:',
    });
  };

  // Handle Delete Data with custom prompt modal
  const handleDeleteData = () => {
    setCustomPrompt({
      action: 'delete',
      promptMessage: 'Enter the index of the element to delete:',
    });
  };

  // Handle Update Data with custom prompt modal
  const handleUpdateData = () => {
    setCustomPrompt({
      action: 'update',
      promptMessage: 'Enter the index and new value to update:',
      updateIndex: '',
      updateValue: ''
    });
  };

  // Custom prompt submission
  const handlePromptSubmit = () => {
    if (customPrompt.action === 'insert') {
      setArrayElements([...arrayElements, Number(customPrompt.input)]);
    } else if (customPrompt.action === 'delete') {
      const indexToDelete = Number(customPrompt.input);
      if (indexToDelete >= 0 && indexToDelete < arrayElements.length) {
        setArrayElements(arrayElements.filter((_, index) => index !== indexToDelete));
      } else {
        alert("Invalid index.");
      }
    } else if (customPrompt.action === 'update') {
      const indexToUpdate = Number(customPrompt.updateIndex);
      if (indexToUpdate >= 0 && indexToUpdate < arrayElements.length) {
        setArrayElements(arrayElements.map((value, index) => 
          index === indexToUpdate ? Number(customPrompt.updateValue) : value
        ));
      } else {
        alert("Invalid index.");
      }
    }
    setCustomPrompt(null); // Close the prompt after submission
  };

  // Handle Reverse Data
  const handleReverseData = () => {
    setArrayElements([...arrayElements].reverse());
  };

  return (
    <div>
      <Navigation />
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <div className="right-side">
          <h3>Array :</h3>
          <p>
            An Array is a linear data structure that collects elements of the same data type and stores them in contiguous and adjacent memory locations.
          </p>
          <h3>Example:</h3>
          <img className="image_array" src={Array_Img} alt="Array" />
          <div>
            <h3>Operations</h3>
            <ul>
              <li>Insertion</li>
              <li>Deletion</li>
              <li>Updation</li>
              <li>Searching</li>
              <li>Sorting</li>
            </ul>
          </div>
          <div>
            <h3>Algorithms</h3>
            <ul>
              <li>Kadn`s
</li>
              <li>Flody cycle detection
</li>
              <li>KMPC</li>
              <li>Quick select
</li>
            </ul>
            <h3>Advantage</h3>
            <ul>
              <li>Arrays store multiple elements of the same type with the same name
</li>
              <li>You can randomly access elements in the array using an index number
</li>
              <li>Array memory is predefined, so there is no extra memory loss
</li>
              <li>Arrays avoid memory overflow
</li>
              <li>2D arrays an efficiently represent the tabular data
</li>
            </ul>
            <h3>Disadvantage</h3>
            <ul>
              <li>The number of elements in the array should be predefined
</li>
              <li>An array is static it can not alter its size after declaration
</li>
              <li>Insertion and deletion operations in the array is quite tricky as the array stores elements in continuous form
</li>
              <li>Allocating excess memory than required may lead to memory wastage
</li>
            </ul>
          </div>
          <div className="create-array">
            <button className={`array-buttons ${selectedArrayType === '1D' ? 'active' : ''}`} onClick={() => handleArrayTypeChange('1D')}>1D Array</button>
            <button className={`array-buttons ${selectedArrayType === '2D' ? 'active' : ''}`} onClick={() => handleArrayTypeChange('2D')}>2D Array</button>
          </div>



          {selectedArrayType === '2D' && (
            <div className="array-content">
              <h4>Create a 2D Array</h4>
              <button className="array-buttons create-array-button" onClick={() => setIsModalOpen(true)}>Create Matrix</button>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Array Input Modal"
                className="Modal"
                overlayClassName="Overlay"
              >
                <h3>Enter 2D Matrix Elements (Please Enter Numeric Values Only 0-9)</h3>
                <div className="array-input">
                  <textarea
                    value={arrayInput}
                    onChange={handleArrayInputChange}
                    placeholder="Enter numbers separated by space for each row, use newline to separate rows"
                    rows={5}
                  />
                </div>
                <button className="enter-array-buttons" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button className="enter-array-buttons" onClick={handleArrayCreation}>OK</button>
              </Modal>
            </div>
          )}



          {selectedArrayType === '1D' && (
            <div className="array-content">
              <h4>Create a 1D Array</h4>
              <button className="array-buttons create-array-button" onClick={() => setIsModalOpen(true)}>Create Array</button>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Array Input Modal"
                className="Modal"
                overlayClassName="Overlay"
              >
                <h3>Enter Array Elements (Please Enter Numeric Values Only 0-9)</h3>
                <div className="array-input">
                  <input
                  
                    type="text"
                    value={arrayInput}
                    onChange={handleArrayInputChange}
                    placeholder="Enter numbers separated by space"
                  />
                </div>
                <button className="enter-array-buttons" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button className="enter-array-buttons" onClick={handleArrayCreation}>OK</button>
              </Modal>
              {/* Insert/Delete/Update/Reverse Buttons */}
              {showInsertDeleteButtons && (
                <div className="insert-delete-buttons">
                  <button onClick={handleInsertData} className="array-buttons">Insert</button>
                  <button onClick={handleDeleteData} className="array-buttons">Delete</button>
                  <button onClick={handleUpdateData} className="array-buttons">Update</button>
                  <button onClick={handleReverseData} className="array-buttons">Reverse</button>
                </div>
              )}
            </div>
          )}

          {/* Display Created Array Below Buttons */}
          {arrayElements.length > 0 && (
            <div className="array-elements">
              <h4>Created Array:</h4>
              <div className="array-ele">
                <div className="array-labels">
                  <div><strong>Index</strong></div>
                  <hr />
                  <div><strong>Value</strong></div>
                </div>
                <div className="array-container">
                  <div className="array-pairs">
                    {arrayElements.map((value, index) => (
                      <div className="array-pair" key={index}>
                        <div className="index-val">{index}</div>
                        <div className="value-val">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Custom Prompt Modal */}
          
{customPrompt && (
  <Modal
    isOpen={true}
    onRequestClose={() => setCustomPrompt(null)}
    contentLabel="Custom Prompt"
    className="Modal"
    overlayClassName="Overlay"
  >
    <h3>{customPrompt.promptMessage}</h3>
    <div className="array-input">
      {customPrompt.action === 'update' ? (
        <div>
          <input
            type="number"
            value={customPrompt.updateIndex}
            onChange={(e) => setCustomPrompt({ ...customPrompt, updateIndex: e.target.value })}
            placeholder="Enter index to update"
          />
          <input
            type="number"
            value={customPrompt.updateValue}
            onChange={(e) => setCustomPrompt({ ...customPrompt, updateValue: e.target.value })}
            placeholder="Enter new value"
          />
        </div>
      ) : (
        <div>
          <input 
            type="text" 
            value={customPrompt.input || ''} 
            onChange={(e) => setCustomPrompt({ ...customPrompt, input: e.target.value })} 
            placeholder="Enter value" 
          />
        </div>
      )}
    </div>
    <button onClick={() => setCustomPrompt(null)} className="enter-array-buttons">Cancel</button>
    <button onClick={handlePromptSubmit} className="enter-array-buttons">Submit</button>
  </Modal>
)}
          

          <div className="navigation-buttons">
            <Link to="/LinearDataType">
              <button className="previous-button">Previous</button>
            </Link>
            <Link to="/Stack">
              <button className="next-button">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
