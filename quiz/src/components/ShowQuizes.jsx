import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './css/ShowQuiz.css';

export default function ShowQuizes() {
  const [quizzes, setQuizzes] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');

  // Fetch all quizzes and subjects from the backend
  useEffect(() => {
    const fetchSubjectsAndQuizzes = async () => {
      try {
        // Fetch subjects
        const subjectResponse = await fetch('http://localhost:5006/api/subjects');
        if (subjectResponse.ok) {
          const subjectData = await subjectResponse.json();
          setSubjects(subjectData.subjects);  // Assuming 'subjects' is the array of subjects
        } else {
          console.log('Failed to fetch subjects');
        }

        // Fetch quizzes
        const quizResponse = await fetch('http://localhost:5006/api/quizzes');
        if (quizResponse.ok) {
          const quizData = await quizResponse.json();
          console.log('Quizzes fetched:', quizData);

          if (quizData.quizzes) {
            setQuizzes(quizData.quizzes);
          } else {
            console.log('No quizzes found in response');
          }
        } else {
          console.log('Failed to fetch quizzes');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSubjectsAndQuizzes();
  }, []);

  // Filter quizzes based on selected subject
  const filteredQuizzes = selectedSubject
    ? quizzes.filter((quiz) => quiz.subjectId._id === selectedSubject)
    : quizzes;

  // Delete quiz function
  const deleteQuiz = async (quizId) => {
    try {
      const response = await fetch(`http://localhost:5006/api/quizzes/${quizId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove deleted quiz from the UI
        setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
        console.log('Quiz deleted successfully');
      } else {
        console.log('Failed to delete quiz');
      }
    } catch (error) {
      console.error('Error deleting quiz:', error);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <h1>All Quizzes</h1>

        {/* Dropdown for selecting subject */}
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="subject-dropdown"
        >
          <option value="">All Quizes</option>
          {subjects.map((subject) => (
            <option key={subject._id} value={subject._id}>
              {subject.name}
            </option>
          ))}
        </select>

        {/* Display quizzes in card format */}
        <div className="quiz-cards-container">
          {filteredQuizzes.length > 0 ? (
            filteredQuizzes.map((quiz) => (
              <div key={quiz._id} className="quiz-card">
                <h3>{quiz.subjectId.name}</h3>
                <p><strong>Number of Questions:</strong> {quiz.questions.length}</p>
                <p><strong>Time Limit:</strong> {quiz.quizTime} minutes</p>
                {/* Delete button */}
                <button onClick={() => deleteQuiz(quiz._id)} className="delete-button">
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No quizzes available</p>
          )}
        </div>
      </div>
    </>
  );
}