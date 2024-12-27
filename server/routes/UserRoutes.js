const express = require('express');
// const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure you have the correct User model path

const router = express.Router();




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




router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password, occupation } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !password || !occupation) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      occupation,
    });

    await newUser.save();  // Save the user to the database

    res.status(201).json({ message: 'Registration successful', user: newUser });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

// POST route to handle user login
// Example backend login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Assume the logic for finding the user and validating password
  const user = await User.findOne({ email });
  if (!user || !user.isValidPassword(password)) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Create JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.json({
    token: token,
    userId: user._id,  // Send userId in response
  });
});
// // Assuming you have a User model and you want to save the quiz answers in the user collection
// router.post('/users/submitQuiz', async (req, res) => {
//     const { quizId, answers } = req.body;
//     const userId = req.user._id;  // Assuming user is authenticated
  
//     try {
//       const user = await User.findById(userId);
//       user.quizzes.push({ quizId, answers }); // Store the quiz ID and answers in the user's quizzes array
//       await user.save();
  
//       res.status(200).json({ message: 'Quiz submitted successfully' });
//     } catch (error) {
//       console.error('Error submitting quiz:', error);
//       res.status(500).json({ message: 'Failed to submit quiz' });
//     }
//   });

module.exports = router;