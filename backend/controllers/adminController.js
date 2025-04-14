const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({
      $or: [{ email }, { username }]
    });

    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create new admin
    const admin = new Admin({
      username,
      email,
      password
    });

    await admin.save();

    // Generate token
    const token = jwt.sign(
      { adminId: admin._id, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email
      }
    });
  } catch (error) {
    console.error('Admin registration error:', error);
    res.status(500).json({ message: 'Error registering admin' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await admin.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign(
      { adminId: admin._id, isAdmin: true },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await User.find({})
      .select('fullName email whatsapp gender createdAt')
      .sort({ createdAt: -1 });

    res.json(students);
  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}; 