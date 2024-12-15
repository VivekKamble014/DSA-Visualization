const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  quizTime: { type: Number, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [
        { type: String, required: true },
        { type: String, required: true },
        { type: String, required: true },
        { type: String, required: true },
      ],
      correctAnswer: { type: String, required: true },
    },
  ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;