import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Navbar from './Navbar';

export default function UserDashboard() {
  const [quizzes, setQuizzes] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const navigate = useNavigate(); // useNavigate hook

  useEffect(() => {
    const fetchSubjectsAndQuizzes = async () => {
      try {
        const subjectResponse = await fetch('http://localhost:5006/api/subjects');
        if (subjectResponse.ok) {
          const subjectData = await subjectResponse.json();
          setSubjects(subjectData.subjects);
        } else {
          console.log('Failed to fetch subjects');
        }

        const quizResponse = await fetch('http://localhost:5006/api/quizzes');
        if (quizResponse.ok) {
          const quizData = await quizResponse.json();
          setQuizzes(quizData.quizzes);
        } else {
          console.log('Failed to fetch quizzes');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSubjectsAndQuizzes();
  }, []);

  const filteredQuizzes = selectedSubject
    ? quizzes.filter((quiz) => quiz.subjectId._id === selectedSubject)
    : quizzes;

    const startQuiz = (quizId) => {
        console.log(`Starting quiz with ID: ${quizId}`);
        navigate(`/quiz/${quizId}`);  // This will navigate to the StartQuiz page
      };

  return (
    <>
      <Navigation />
      <Navbar />
      <div className="main-content">
        <h1>All Quizzes</h1>

        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="subject-dropdown"
        >
          <option value="">All Quizzes</option>
          {subjects.map((subject) => (
            <option key={subject._id} value={subject._id}>
              {subject.name}
            </option>
          ))}
        </select>

        <div className="quiz-cards-container">
          {filteredQuizzes.length > 0 ? (
            filteredQuizzes.map((quiz) => (
              <div key={quiz._id} className="quiz-card">
                <h3>{quiz.subjectId.name}</h3>
                <p><strong>Number of Questions:</strong> {quiz.questions.length}</p>
                <p><strong>Time Limit:</strong> {quiz.quizTime} minutes</p>
                <button onClick={() => startQuiz(quiz._id)} className="start-quiz-button">
                  Start Quiz
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