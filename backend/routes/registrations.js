const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const adminAuth = require('../middleware/adminAuth');

// Get all registrations (admin only)
router.get('/', adminAuth, async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ createdAt: -1 });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching registrations', error: error.message });
  }
});

// Create new registration
router.post('/', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(201).json(registration);
  } catch (error) {
    res.status(500).json({ message: 'Error creating registration', error: error.message });
  }
});

// Get registration by ID (admin only)
router.get('/:id', adminAuth, async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }
    res.json(registration);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching registration', error: error.message });
  }
});

// Update registration status (admin only)
router.put('/:id/status', adminAuth, async (req, res) => {
  try {
    const { status } = req.body;
    const registration = await Registration.findById(req.params.id);
    
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    registration.status = status;
    await registration.save();

    res.json(registration);
  } catch (error) {
    res.status(500).json({ message: 'Error updating registration status', error: error.message });
  }
});

module.exports = router; 