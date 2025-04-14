import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp, FaReact, FaNodeJs, FaPython, FaJs, FaRobot, FaCloud } from 'react-icons/fa';

const socialLinks = [
  { 
    name: 'GitHub', 
    href: '#', 
    icon: <FaGithub className="w-6 h-6 transition-colors duration-200 group-hover:text-gray-900" />,
    hoverColor: 'hover:bg-gray-100'
  },
  { 
    name: 'Twitter', 
    href: '#', 
    icon: <FaTwitter className="w-6 h-6 transition-colors duration-200 group-hover:text-[#1DA1F2]" />,
    hoverColor: 'hover:bg-blue-50'
  },
  { 
    name: 'LinkedIn', 
    href: '#', 
    icon: <FaLinkedin className="w-6 h-6 transition-colors duration-200 group-hover:text-[#0A66C2]" />,
    hoverColor: 'hover:bg-blue-50'
  },
  { 
    name: 'Instagram', 
    href: '#', 
    icon: <FaInstagram className="w-6 h-6 transition-colors duration-200 group-hover:text-[#E4405F]" />,
    hoverColor: 'hover:bg-pink-50'
  },
  { 
    name: 'Facebook', 
    href: '#', 
    icon: <FaFacebook className="w-6 h-6 transition-colors duration-200 group-hover:text-[#1877F2]" />,
    hoverColor: 'hover:bg-blue-50'
  },
  { 
    name: 'WhatsApp', 
    href: '#', 
    icon: <FaWhatsapp className="w-6 h-6 transition-colors duration-200 group-hover:text-[#25D366]" />,
    hoverColor: 'hover:bg-green-50'
  }
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Curriculum', href: '/curriculum' },
  { name: 'Alumni', href: '/alumni' },
  { name: 'Register', href: '/register' },
];

const techStack = [
  { 
    name: 'React', 
    icon: <FaReact className="w-6 h-6 transition-colors duration-200 group-hover:text-[#61DAFB]" />,
    color: 'text-[#61DAFB]'
  },
  { 
    name: 'Node.js', 
    icon: <FaNodeJs className="w-6 h-6 transition-colors duration-200 group-hover:text-[#339933]" />,
    color: 'text-[#339933]'
  },
  { 
    name: 'Python', 
    icon: <FaPython className="w-6 h-6 transition-colors duration-200 group-hover:text-[#3776AB]" />,
    color: 'text-[#3776AB]'
  },
  { 
    name: 'JavaScript', 
    icon: <FaJs className="w-6 h-6 transition-colors duration-200 group-hover:text-[#F7DF1E]" />,
    color: 'text-[#F7DF1E]'
  },
  { 
    name: 'AI/ML', 
    icon: <FaRobot className="w-6 h-6 transition-colors duration-200 group-hover:text-[#FF4081]" />,
    color: 'text-[#FF4081]'
  },
  { 
    name: 'Cloud', 
    icon: <FaCloud className="w-6 h-6 transition-colors duration-200 group-hover:text-[#4285F4]" />,
    color: 'text-[#4285F4]'
  }
];

export default function Footer() {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              className={`absolute bg-gradient-to-r ${
                index === 0 ? 'from-blue-500/10 to-indigo-500/10' :
                index === 1 ? 'from-purple-500/10 to-pink-500/10' :
                'from-green-500/10 to-emerald-500/10'
              } rounded-full blur-3xl`}
              initial={{ opacity: 0.1 }}
              animate={{
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.1, 1],
                x: [0, 30, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: index * 2,
              }}
              style={{
                width: '30rem',
                height: '30rem',
                left: `${(index * 30) + 10}%`,
                top: `${index * 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text">
                ise Academy
              </span>
            </Link>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Empowering the next generation of tech innovators through cutting-edge education and hands-on experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.href}
                    className={`text-sm ${
                      isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } transition-colors duration-200`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 p-2 rounded-lg group ${
                    isDarkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/50 hover:bg-gray-50/80'
                  } backdrop-blur-sm transition-all duration-200`}
                >
                  <span className={`${tech.color} opacity-80 group-hover:opacity-100`}>{tech.icon}</span>
                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} group-hover:text-gray-900`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`p-2 rounded-lg group ${
                    isDarkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-400' 
                      : `bg-white/50 ${social.hoverColor} text-gray-600`
                  } backdrop-blur-sm transition-colors duration-200`}
                >
                  <span className="text-xl" title={social.name}>{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            "Innovation distinguishes between a leader and a follower."
          </p>
          <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            - Steve Jobs
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} rise Academy. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <Link
              to="/privacy"
              className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 