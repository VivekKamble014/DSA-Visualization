const express = require('express');
const router = express.Router();
const User = require('../models/User');
const QuizResult = require('../models/QuizResult');

router.post('/submitQuiz', async (req, res) => {
  const { quizId, userId, answers, score, status } = req.body;

  try {
    const quizResult = new QuizResult({
      quizId,
      userId,
      answers,
      score,
      status,
    });

    const savedQuizResult = await quizResult.save();

    await User.findByIdAndUpdate(userId, {
      $push: {
        quizzes: savedQuizResult._id
      }
    });

    res.status(200).json({ message: 'Quiz submitted successfully' });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    res.status(500).json({ message: 'Failed to submit quiz' });
  }
});

module.exports = router;