import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { registrations } from '../services/api';

const techIcons = [
  { icon: '⚛️', label: 'React', color: 'from-blue-500 to-cyan-500' },
  { icon: '🤖', label: 'AI', color: 'from-purple-500 to-pink-500' },
  { icon: '🌐', label: 'Web3', color: 'from-green-500 to-emerald-500' },
  { icon: '📱', label: 'Mobile', color: 'from-orange-500 to-red-500' },
];

export default function Registration() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    gender: '',
    location: '',
    educationLevel: '',
    institutionName: '',
    hasLaptop: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required';
    } else if (!/^\+?[1-9]\d{1,14}$/.test(formData.whatsapp.replace(/\D/g, ''))) {
      newErrors.whatsapp = 'Please enter a valid phone number';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.educationLevel) {
      newErrors.educationLevel = 'Please select your education level';
    }

    if (!formData.institutionName.trim()) {
      newErrors.institutionName = 'Institution name is required';
    }

    if (!formData.hasLaptop) {
      newErrors.hasLaptop = 'Please indicate if you have a laptop';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await registrations.create(formData);
        setShowSuccess(true);
        // Reset form after success
        setFormData({
          fullName: '',
          email: '',
          whatsapp: '',
          gender: '',
          location: '',
          educationLevel: '',
          institutionName: '',
          hasLaptop: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ submit: 'Failed to submit registration. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border ${
    isDarkMode 
      ? 'bg-gray-800/50 border-gray-700 text-white focus:border-indigo-500' 
      : 'bg-white/50 border-gray-300 text-gray-900 focus:border-indigo-600'
  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 backdrop-blur-sm transition-all duration-200`;

  const labelClasses = `block text-sm font-medium mb-2 ${
    isDarkMode ? 'text-gray-300' : 'text-gray-700'
  }`;

  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <div className={`min-h-screen pt-20 pb-12 relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className={`absolute bg-gradient-to-r ${tech.color} rounded-full opacity-10 blur-3xl`}
              initial={{ scale: 0.8, opacity: 0.1 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.15, 0.1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: index * 2,
              }}
              style={{
                width: '30rem',
                height: '30rem',
                left: `${(index * 25) + 10}%`,
                top: `${(index * 20) + 10}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Tech Icons */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute hidden md:block text-4xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              y: [0, -20, 0],
              x: Math.sin(index) * 20
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5
            }}
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${index < 2 ? -10 : 100}%`,
            }}
          >
            {tech.icon}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${
            isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
          } rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm border ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}
        >
          {/* Header */}
          <div className={`px-8 py-10 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className={`text-4xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent mb-4`}>
                Join Our Tech Community
              </h1>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Start your journey to becoming a tech professional. Fill out the form below to begin your transformation.
              </p>
            </motion.div>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-8 py-4 bg-green-500/10 border-l-4 border-green-500 mx-8 mt-8"
            >
              <p className="text-green-500 font-medium">
                Registration successful! We'll contact you soon.
              </p>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-10 space-y-8">
            {/* Full Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="fullName" className={labelClasses}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className={errorClasses}>{errors.fullName}</p>}
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className={labelClasses}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="you@example.com"
              />
              {errors.email && <p className={errorClasses}>{errors.email}</p>}
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="whatsapp" className={labelClasses}>
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className={inputClasses}
                placeholder="+1234567890"
              />
              {errors.whatsapp && <p className={errorClasses}>{errors.whatsapp}</p>}
            </motion.div>

            {/* Gender */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className={labelClasses}>Gender</label>
              <div className="mt-2 space-y-2">
                {['Male', 'Female', ].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value={option}
                      checked={formData.gender === option}
                      onChange={handleChange}
                      className="mr-2 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {errors.gender && <p className={errorClasses}>{errors.gender}</p>}
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label htmlFor="location" className={labelClasses}>
                Where do you live?
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your city/location"
              />
              {errors.location && <p className={errorClasses}>{errors.location}</p>}
            </motion.div>

            {/* Education Level */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <label htmlFor="educationLevel" className={labelClasses}>
                Level of Education
              </label>
              <select
                id="educationLevel"
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select education level</option>
                <option value="high_school">High School</option>
                <option value="diploma">Diploma</option>
                <option value="bachelors">Bachelor's Degree</option>
                <option value="masters">Master's Degree</option>
                <option value="phd">PhD</option>
                <option value="other">Other</option>
              </select>
              {errors.educationLevel && <p className={errorClasses}>{errors.educationLevel}</p>}
            </motion.div>

            {/* Institution Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <label htmlFor="institutionName" className={labelClasses}>
                University/School Name
              </label>
              <input
                type="text"
                id="institutionName"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter your institution name"
              />
              {errors.institutionName && <p className={errorClasses}>{errors.institutionName}</p>}
            </motion.div>

            {/* Laptop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <label className={labelClasses}>Do you have a laptop?</label>
              <div className="mt-2 space-y-2">
                {['Yes', 'No'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="hasLaptop"
                      value={option}
                      checked={formData.hasLaptop === option}
                      onChange={handleChange}
                      className="mr-2 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {errors.hasLaptop && <p className={errorClasses}>{errors.hasLaptop}</p>}
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-xl font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Start Your Tech Journey'
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className={`text-lg italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            "The future belongs to those who learn more skills and combine them in creative ways."
          </p>
          <p className={`mt-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            - Robert Greene
          </p>
        </motion.div>
      </div>
    </div>
  );
} 