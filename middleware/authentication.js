const jwt = require('jsonwebtoken');
const config = require('config');

const jwtKey = config.get("secret.key");

// JWT Authentication Middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from 'Authorization' header
  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized: No token provided.' });
  }

  jwt.verify(token, jwtKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: 'Unauthorized: Invalid token.' });
    }
    req.user = decoded;  // Attach decoded user data to the request object
    next();  // Proceed to the next middleware or route handler
  });
}

module.exports = { authenticateToken };