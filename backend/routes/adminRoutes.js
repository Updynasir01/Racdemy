const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const adminAuth = require('../middleware/adminAuth');

// Admin registration and login
router.post('/register', adminController.register);
router.post('/login', adminController.login);

// Protected admin routes
router.get('/students', adminAuth, adminController.getStudents);

module.exports = router; 