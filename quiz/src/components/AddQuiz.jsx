import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './css/AddQuiz.css'; // Include your custom styles here
import { useNavigate } from 'react-router-dom';  // Use useNavigate from react-router-dom v6

export default function AddQuiz() {
  const [subjects, setSubjects] = useState([]);
  const [subjectId, setSubjectId] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [quizTime, setQuizTime] = useState(''); // New state for quiz time
  const [questions, setQuestions] = useState([]); // New state to store questions
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  // Fetch subjects from the backend to populate the subject dropdown
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch('http://localhost:5006/api/subjects');
        if (response.ok) {
          const data = await response.json();
          console.log('Subjects fetched:', data.subjects);  // Log to check
          setSubjects(data.subjects);
        } else {
          console.log('Failed to fetch subjects');
        }
      } catch (error) {
        console.error('Error fetching subjects:', error);
      }
    };

    fetchSubjects();
  }, []);

  // Handle form submission for quiz details (subject, number of questions, and time limit)
  const handleQuizDetailsSubmit = (e) => {
    e.preventDefault();
    console.log('Quiz Details Submitted');
    console.log('Subject ID:', subjectId);
    console.log('Number of Questions:', numQuestions);
    console.log('Time Limit:', quizTime);  // Log the time limit

    if (!subjectId || !numQuestions || !quizTime) {
      console.log('Please fill in all fields.');
      return;
    }

    // Generate empty question forms based on number of questions
    const initialQuestions = [];
    for (let i = 0; i < numQuestions; i++) {
      initialQuestions.push({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
      });
    }
    setQuestions(initialQuestions); // Set the state with empty questions
  };

  // Handle change in question, options, and correct answer
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === 'question') {
      updatedQuestions[index].question = value;
    } else if (field.startsWith('option')) {
      const optionIndex = parseInt(field.split('-')[1], 10);
      updatedQuestions[index].options[optionIndex] = value;
    } else if (field === 'correctAnswer') {
      updatedQuestions[index].correctAnswer = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleQuizQuestionsSubmit = async (e) => {
    e.preventDefault();
    console.log('Quiz Questions Submitted');
    console.log('Questions:', questions);  // Log the questions array
  
    // Ensure that subjectId, quizTime, and questions are available
    if (!subjectId || !quizTime || !questions.length) {
      console.log('Please fill in all fields');
      return;
    }
  
    // Create the quiz object
    const quizData = {
      subjectId,
      quizTime,
      questions,
    };
  
    try {
      // Send a POST request to the backend to save the quiz data
      const response = await fetch('http://localhost:5006/api/quizzes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Quiz saved successfully:', data);
  
        // Clear all fields
        setSubjectId('');
        setNumQuestions('');
        setQuizTime('');
        setQuestions([]);
  
        // Show the success modal
        setShowModal(true);
      } else {
        console.error('Failed to save the quiz');
      }
    } catch (error) {
      console.error('Error saving quiz:', error);
    }
  };

  // Close the modal and navigate to quiz list
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/create-quiz');
  };

  return (
    <div>
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <h1>Add New Quiz</h1>
        </header>

        {/* Step 1: Add Quiz Details Form */}
        <form onSubmit={handleQuizDetailsSubmit} className="quiz-form">
          <div className="form-group">
            <label htmlFor="subject-select">Select Subject</label>
            <select
              id="subject-select"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              required
            >
              <option value="">Select a Subject</option>
              {subjects.map((subject) => (
                <option key={subject._id} value={subject._id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="num-questions">Number of Questions</label>
            <input
              type="number"
              id="num-questions"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="quiz-time">Time Limit (in minutes)</label>
            <input
              type="number"
              id="quiz-time"
              value={quizTime}
              onChange={(e) => setQuizTime(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Next: Add Questions
          </button>
        </form>

        {/* Step 2: Add Questions Form (conditionally rendered) */}
        {questions.length > 0 && (
          <form onSubmit={handleQuizQuestionsSubmit} className="quiz-form">
            <h2>Add Questions</h2>
            {questions.map((question, index) => (
              <div key={index} className="question-group">
                <div className="form-group">
                  <label htmlFor={`question-${index}`}>Question {index + 1}</label>
                  <input
                    type="text"
                    id={`question-${index}`}
                    value={question.question}
                    onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                    placeholder="Enter question"
                    required
                  />
                </div>

                {question.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="form-group">
                    <label htmlFor={`option-${index}-${optionIndex}`}>Option {optionIndex + 1}</label>
                    <input
                      type="text"
                      id={`option-${index}-${optionIndex}`}
                      value={option}
                      onChange={(e) => handleQuestionChange(index, `option-${optionIndex}`, e.target.value)}
                      placeholder={`Enter option ${optionIndex + 1}`}
                      required
                    />
                  </div>
                ))}

                <div className="form-group">
                  <label htmlFor={`correct-answer-${index}`}>Correct Answer</label>
                  <select
                    id={`correct-answer-${index}`}
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(index, 'correctAnswer', e.target.value)}
                    required
                  >
                    <option value="">Select Correct Answer</option>
                    {question.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            <button type="submit" className="submit-button">
              Save Quiz
            </button>
          </form>
        )}

        {/* Modal Popup */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Quiz Saved Successfully!</h2>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}