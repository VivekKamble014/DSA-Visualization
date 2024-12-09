const express = require('express');
const Admin = require('../models/Admin'); // Import the correct Admin model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Import JWT
const router = express.Router();

const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your actual secret key

// Admin Register Endpoint
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new admin
        const newAdmin = new Admin({
            username,
            password: hashedPassword
        });

        // Save the new admin to the database
        await newAdmin.save();
        res.status(201).json({ message: "Admin registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

// Admin Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (admin) {
            const isMatch = await bcrypt.compare(password, admin.password);
            if (isMatch) {
                // Generate JWT token
                const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '1h' });
                res.json({ message: "Admin login successful", token });
            } else {
                res.status(400).json({ message: "Incorrect password" });
            }
        } else {
            res.status(404).json({ message: "Admin not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Middleware to authenticate and verify the JWT token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from the Authorization header

    if (!token) {
        return res.status(403).json({ message: 'Not authenticated' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = user; // Attach the decoded user info to the request object
        next();
    });
};

// Admin Details Route (fetch username from JWT)
router.get('/admin/details', authenticateToken, async (req, res) => {
    try {
        const admin = await Admin.findById(req.user.id); // Fetch admin by ID from the decoded JWT
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Send back the admin username (or other details if needed)
        res.json({ username: admin.username });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;