const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz'); // Assuming you have a Quiz model

// POST route to save a new quiz
router.post('/quizzes', async (req, res) => {
  const { subjectId, quizTime, questions } = req.body;

  try {
    const newQuiz = new Quiz({
      subjectId,
      quizTime,
      questions,
    });

    await newQuiz.save();
    res.status(201).json({ message: 'Quiz saved successfully', quiz: newQuiz });
  } catch (error) {
    console.error('Error saving quiz:', error);
    res.status(500).json({ message: 'Failed to save quiz' });
  }
});
// Route to get all quizzes
router.get('/api/quizzes', async (req, res) => {
    try {
      console.log('API route for quizzes hit');
      const quizzes = await Quiz.find().populate('subjectId'); // Populate subjectId to get subject details
      console.log('Fetched quizzes:', quizzes);
      res.json({ quizzes });
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      res.status(500).json({ message: 'Failed to fetch quizzes', error });
    }
  });

  // DELETE route to delete a quiz by its ID
router.delete('/api/quizzes/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const quiz = await Quiz.findByIdAndDelete(id);
  
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
  
      res.status(200).json({ message: 'Quiz deleted successfully' });
    } catch (error) {
      console.error('Error deleting quiz:', error);
      res.status(500).json({ message: 'Failed to delete quiz', error });
    }
  });
  
module.exports = router;
