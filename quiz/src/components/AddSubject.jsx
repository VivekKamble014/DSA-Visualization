import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import './css/AdminDashboard.css'; // Import styling
import './css/AddSubject.css';

export default function AddSubject() {
  const [subjectName, setSubjectName] = useState('');
  const [subjectInfo, setSubjectInfo] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [editingSubject, setEditingSubject] = useState(null); // Track which subject is being edited

  // Fetch all subjects from the backend when the component mounts
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('http://localhost:5006/api/subjects');
        if (response.ok) {
          const data = await response.json();
          setSubjects(data.subjects); // Assuming the response contains a 'subjects' array
        } else {
          console.log('Failed to fetch subjects');
        }
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };
    fetchSubjects();
  }, []);
  

  // Handle form submission for adding a new subject
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const subjectData = {
      name: subjectName,
      info: subjectInfo,
    };
  
    try {
      const response = await fetch('http://localhost:5006/api/subject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subjectData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Subject Added:', data);
        setSubjects([...subjects, data.subject]); // Update state to include the newly added subject
  
        // Clear the form fields after successful addition
        setSubjectName('');
        setSubjectInfo('');
      } else {
        console.log('Failed to add subject');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Handle delete subject with confirmation
  const handleDelete = async (subjectId) => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete this subject?');
  
    if (isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5006/api/subject/${subjectId}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          setSubjects(subjects.filter(subject => subject._id !== subjectId)); // Remove deleted subject from the state
          console.log('Subject deleted');
        } else {
          console.log('Failed to delete subject');
        }
      } catch (error) {
        console.error('Error deleting subject:', error);
      }
    } else {
      console.log('Subject deletion cancelled');
    }
  };

  // Handle start editing a subject
  const handleEdit = (subject) => {
    setEditingSubject(subject); // Set the subject to be edited
    setSubjectName(subject.name);
    setSubjectInfo(subject.info);
  };

  // Handle save after editing
  const handleSaveEdit = async (e) => {
    e.preventDefault();

    const updatedSubjectData = {
      name: subjectName,
      info: subjectInfo,
    };

    try {
      const response = await fetch(`http://localhost:5006/api/subject/${editingSubject._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSubjectData),
      });

      if (response.ok) {
        const updatedSubject = await response.json();
        setSubjects(subjects.map(subject => subject._id === updatedSubject._id ? updatedSubject : subject));
        setEditingSubject(null); // Clear the editing state
        console.log('Subject updated');
      } else {
        console.log('Failed to update subject');
      }
    } catch (error) {
      console.error('Error updating subject:', error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <h1>{editingSubject ? 'Edit Subject' : 'Add New Subject'}</h1>
        </header>

        <form onSubmit={editingSubject ? handleSaveEdit : handleSubmit} className="subject-form">
          <div className="form-group">
            <label htmlFor="subject-name">Subject Name</label>
            <input
              type="text"
              id="subject-name"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              required
              placeholder="Enter the subject name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject-info">Enter Information</label>
            <textarea
              id="subject-info"
              value={subjectInfo}
              onChange={(e) => setSubjectInfo(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            {editingSubject ? 'Save Changes' : 'Add Subject'}
          </button>
        </form>

        {/* Display all subjects in cards */}
        <div className="subject-cards">
          {subjects.length > 0 ? (
            subjects.map((subject) => (
              <div key={subject._id} className="subject-card">
                <h3>{subject.name}</h3>
                <p>{subject.info}</p>
                <button onClick={() => handleEdit(subject)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDelete(subject._id)} className="delete-button">
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No subjects available.</p>
          )}
        </div>
      </div>
    </div>
  );
}