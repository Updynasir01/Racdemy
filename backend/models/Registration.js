const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female'],
  },
  location: {
    type: String,
    required: true,
  },
  educationLevel: {
    type: String,
    required: true,
    enum: ['high_school', 'diploma', 'bachelors', 'masters', 'phd', 'other'],
  },
  institutionName: {
    type: String,
    required: true,
  },
  hasLaptop: {
    type: String,
    required: true,
    enum: ['Yes', 'No'],
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'approved', 'rejected'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Registration', registrationSchema); 