const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensures the subject name is required
  },
  info: {
    type: String,
    required: true, // Ensures subject information is required
  },
});

const Subject = mongoose.model('Subject', SubjectSchema);

module.exports = Subject;