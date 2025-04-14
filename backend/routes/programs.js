const express = require('express');
const router = express.Router();
const Program = require('../models/Program');
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

// Get all programs
router.get('/', async (req, res) => {
  try {
    const programs = await Program.find({ isActive: true });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching programs', error: error.message });
  }
});

// Get single program
router.get('/:id', async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json(program);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching program', error: error.message });
  }
});

// Create new program (admin only)
router.post('/', adminMiddleware, async (req, res) => {
  try {
    const program = new Program(req.body);
    await program.save();
    res.status(201).json(program);
  } catch (error) {
    res.status(500).json({ message: 'Error creating program', error: error.message });
  }
});

// Update program (admin only)
router.put('/:id', adminMiddleware, async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json(program);
  } catch (error) {
    res.status(500).json({ message: 'Error updating program', error: error.message });
  }
});

// Delete program (admin only)
router.delete('/:id', adminMiddleware, async (req, res) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting program', error: error.message });
  }
});

module.exports = router; 