// middleware/auth.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');  // Get the token from the header
  
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify the token with the correct secret
    req.user = decoded.user;  // Attach the decoded user info to the request
    next();
  } catch (err) {
    console.error(err.message);  // Log the error message for debugging
    res.status(401).json({ msg: 'Token is not valid' });  // Return an error if token is invalid
  }
};

module.exports = authMiddleware;