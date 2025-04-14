const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  topics: [{
    type: String,
  }],
});

const programSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  startDates: {
    type: String,
    required: true,
  },
  modules: [moduleSchema],
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Program', programSchema); 