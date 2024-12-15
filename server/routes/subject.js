const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject'); // Import the Subject model

// Route to get all subjects
router.get('/subjects', async (req, res) => {
    try {
      const subjects = await Subject.find(); // Find all subjects in the database
      res.json({ subjects });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  });

// Route to add a new subject
router.post('/subject', async (req, res) => {
  const { name, info } = req.body;

  try {
    // Create a new subject
    const newSubject = new Subject({
      name,
      info,
    });

    // Save the subject to the database
    await newSubject.save();
    res.status(201).json({ msg: 'Subject added successfully', subject: newSubject });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// Route to delete a subject
router.delete('/subject/:id', async (req, res) => {
    try {
      const subject = await Subject.findByIdAndDelete(req.params.id);
      if (!subject) {
        return res.status(404).json({ msg: 'Subject not found' });
      }
      res.json({ msg: 'Subject deleted' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  });
  
  // Route to update a subject
  router.put('/subject/:id', async (req, res) => {
    const { name, info } = req.body;
    try {
      const updatedSubject = await Subject.findByIdAndUpdate(
        req.params.id,
        { name, info },
        { new: true }
      );
  
      if (!updatedSubject) {
        return res.status(404).json({ msg: 'Subject not found' });
      }
  
      res.json(updatedSubject);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  });

module.exports = router;