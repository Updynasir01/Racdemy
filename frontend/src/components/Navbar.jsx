import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom/dist';
import logo from "../../public/images/logo.png"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Curriculum', href: '/curriculum' },
  { name: 'Alumni', href: '/alumni' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 text-transparent bg-clip-text">
                rise Academy
              </span> */}
              <img src={logo} alt="logo" className="w-32 h-32" />
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 transition-all duration-200"
            >
              Get Started
            </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
         <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/register">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-2 px-3 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700 transition-all duration-200"
          >
            Get Started
          </motion.button>
          </Link>
        </div> 
      </motion.div>
    </motion.nav>
  );
} 