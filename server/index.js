const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json()); // For parsing application/json

// Allow CORS for both React apps
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5174'], // Allow both origins
    credentials: true // Allow cookies and credentials
}));

// Setup session middleware
app.use(session({
    secret: 'your_secret_key', // Replace with a secret key
    resave: false,
    saveUninitialized: true
}));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/DSA-Visualization', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error", err));

// Define Admin Model
const Admin = mongoose.model('Admin', new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
}));

// Define User Model
const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
}));

// Admin Register Route
app.post('/admin/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin registered successfully' });
});

// Admin Login Route
app.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (admin && await bcrypt.compare(password, admin.password)) {
        req.session.userId = admin._id;  // Store admin session
        res.json({ message: 'Admin login successful' });
    } else {
        res.status(400).json({ message: 'Invalid admin username or password' });
    }
});

// User Register Route
app.post('/user/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
});

// User Login Route
app.post('/user/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id;  // Store user session
        res.json({ message: 'User login successful' });
    } else {
        res.status(400).json({ message: 'Invalid user username or password' });
    }
});

// Get Admin Details Route (Admin only)
app.get('/admin/details', async (req, res) => {
    const userId = req.session.userId;
    if (!userId) return res.status(403).json({ message: 'Not authenticated' });

    const admin = await Admin.findById(userId);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    res.json({ username: admin.username });
});

// Get User Details Route (User only)
app.get('/user/details', async (req, res) => {
    const userId = req.session.userId;
    if (!userId) return res.status(403).json({ message: 'Not authenticated' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ username: user.username });
});

// Logout Route (Clear Session)
app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.json({ message: 'Logged out successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});