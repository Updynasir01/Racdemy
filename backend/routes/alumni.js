const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');
const jwt = require('jsonwebtoken');

// Middleware to check admin role
const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Get all alumni
router.get('/', async (req, res) => {
  try {
    const alumni = await Alumni.find()
      .populate('program', 'name')
      .sort('-graduationYear');
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching alumni', error: error.message });
  }
});

// Get featured alumni
router.get('/featured', async (req, res) => {
  try {
    const featuredAlumni = await Alumni.find({ isFeature: true })
      .populate('program', 'name')
      .sort('-graduationYear');
    res.json(featuredAlumni);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured alumni', error: error.message });
  }
});

// Get single alumni
router.get('/:id', async (req, res) => {
  try {
    const alumni = await Alumni.findById(req.params.id).populate('program', 'name');
    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching alumni', error: error.message });
  }
});

// Create new alumni (admin only)
router.post('/', adminMiddleware, async (req, res) => {
  try {
    const alumni = new Alumni(req.body);
    await alumni.save();
    res.status(201).json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Error creating alumni', error: error.message });
  }
});

// Update alumni (admin only)
router.put('/:id', adminMiddleware, async (req, res) => {
  try {
    const alumni = await Alumni.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Error updating alumni', error: error.message });
  }
});

// Delete alumni (admin only)
router.delete('/:id', adminMiddleware, async (req, res) => {
  try {
    const alumni = await Alumni.findByIdAndDelete(req.params.id);
    if (!alumni) {
      return res.status(404).json({ message: 'Alumni not found' });
    }
    res.json({ message: 'Alumni deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting alumni', error: error.message });
  }
});

module.exports = router; 