const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const subjectRoutes = require('./routes/subject');
const quizRoutes = require('./routes/quizzes'); // Adjust path to your routes file
const User  =require('./routes/UserRoutes');
const submitQuiz  =require('./routes/quiz');



const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api', subjectRoutes);
app.use('/api', quizRoutes);
app.use(quizRoutes); // Register the route
app.use('/api', User); // Register the route
app.use('/api', submitQuiz); // Register the route




const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});