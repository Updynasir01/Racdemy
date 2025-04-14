const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: String,
    required: true,
  },
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program',
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    required: true,
  },
  testimonial: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  socialLinks: {
    linkedin: String,
    twitter: String,
    website: String,
  },
  isFeature: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Alumni', alumniSchema); 