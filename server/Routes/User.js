const express = require('express');
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Register Route (for users)
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = new User({ email, password: await bcrypt.hash(password, 10), name });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// User Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json({ message: "User login successful" });
      } else {
        res.status(400).json({ message: "Incorrect password" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;