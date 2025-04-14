const jwt = require('jsonwebtoken');

const adminAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'Admin access required' });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    console.error('Admin auth error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = adminAuth; 