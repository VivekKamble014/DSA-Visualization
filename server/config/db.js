const mongoose = require('mongoose');
const dotenv = require('dotenv');  // Make sure this line is here

dotenv.config();  // This loads environment variables from the .env file

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/quiz'; // Default to local DB if not set

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;