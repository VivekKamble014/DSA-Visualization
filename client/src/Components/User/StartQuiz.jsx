import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StartQuiz.css';

export default function StartQuiz() {
  const { quizId } = useParams(); // Get quizId from URL
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isStarted, setIsStarted] = useState(false); // State to control when quiz starts
  const [answers, setAnswers] = useState({}); // State to manage user's answers
  const [score, setScore] = useState(null); // State to manage the quiz score
  const [correctAnswers, setCorrectAnswers] = useState({}); // State to manage correct answers
  const [timeRemaining, setTimeRemaining] = useState(0); // State for countdown timer
  const timerRef = useRef(null); // Ref for the timer interval
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`http://localhost:5006/api/quizzes/${quizId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch quiz');
        }
        const quizData = await response.json();
        setQuiz(quizData.quiz);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quiz:', error);
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleStartQuiz = () => {
    setIsStarted(true); // Change state to indicate quiz has started
    setTimeRemaining(quiz.quizTime * 60); // Set the countdown timer based on quiz time in minutes

    // Start the timer
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          handleSubmitQuiz(); // Automatically submit the quiz when time is up
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmitQuiz = async () => {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      alert('You must be logged in to submit the quiz!');
      navigate('/login');  // Redirect to login page if user is not logged in
      return;
    }
  
    // Continue with quiz submission...
    if (!window.confirm('Are you sure you want to submit the quiz?')) {
      return;  // If user cancels, do not proceed with submission
    }
  
    let calculatedScore = 0;
    const correctAnswers = {};
  
    quiz.questions.forEach((question) => {
      if (answers[question._id] === question.correctAnswer) {
        calculatedScore += 1;
        correctAnswers[question._id] = true;
      } else {
        correctAnswers[question._id] = false;
      }
    });
  
    setScore(calculatedScore);
    setCorrectAnswers(correctAnswers);
  
    // Submit the quiz results to the backend
    const response = await fetch(`http://localhost:5006/api/submitQuiz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quizId,
        userId,  // Pass the userId directly
        answers,
        score: calculatedScore,
        status: calculatedScore >= quiz.passingScore ? 'passed' : 'failed',
      }),
    });
  
    if (response.ok) {
      console.log('Quiz submitted successfully');
    } else {
      console.error('Failed to submit quiz');
    }
  };

  useEffect(() => {
    return () => {
      // Clean up the timer when the component unmounts
      clearInterval(timerRef.current);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!quiz) {
    return <div>Quiz not found!</div>;
  }

  return (
    <div className="start-quiz-container">
      {!isStarted ? (
        <>
          <h1>Start Quiz: {quiz.subjectId.name}</h1>
          <p><strong>Time Limit:</strong> {quiz.quizTime} minutes</p>
          <div className="quiz-rules">
            <h2>Rules</h2>
            <ul>
              <li>Answer all questions within the time limit.</li>
              <li>No skipping questions.</li>
              <li>You cannot change your answer once submitted.</li>
              <li>Each question has multiple choices, select one answer per question.</li>
            </ul>
          </div>
          <button onClick={handleStartQuiz} className="start-quiz-button">
            Start Quiz
          </button>
        </>
      ) : (
        <>
          <h1>{quiz.subjectId.name} Quiz</h1>
          <div className="timer">
            <h2>Time Remaining: {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}</h2>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmitQuiz(); }}>
            {quiz.questions.map((question) => (
              <div key={question._id} className={`question-container ${correctAnswers[question._id] !== undefined ? (correctAnswers[question._id] ? 'correct' : 'incorrect') : ''}`}>
                <h3><strong>{question.question}</strong></h3>
                {question.options.map((option, index) => (
                  <div key={index} className="option-container">
                    <label>
                      <input
                        type="radio"
                        name={question._id}
                        value={option}
                        checked={answers[question._id] === option}
                        onChange={() => handleAnswerChange(question._id, option)}
                        disabled={score !== null}  // Disable inputs after submission
                      />
                      {option}
                    </label>
                  </div>
                ))}
                {score !== null && answers[question._id] !== question.correctAnswer && (
                  <div className="correct-answer">
                    Correct Answer: {question.correctAnswer}
                  </div>
                )}
              </div>
            ))}
            <button type="submit" className="submit-quiz-button" disabled={score !== null}>Submit Quiz</button>
          </form>
          {score !== null && (
            <div className="score-container">
              <h2>Your Score: {score} / {quiz.questions.length}</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}