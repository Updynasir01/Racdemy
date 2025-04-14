import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        isDarkMode 
          ? 'bg-indigo-600 focus:ring-indigo-500' 
          : 'bg-gray-200 focus:ring-yellow-500'
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <span className="sr-only">Toggle theme</span>
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`${
          isDarkMode ? 'translate-x-11 bg-indigo-900' : 'translate-x-1 bg-white'
        } inline-block h-8 w-8 transform rounded-full shadow-lg transition-transform duration-300`}
      >
        {isDarkMode ? (
          // Moon icon
          <svg
            className="h-8 w-8 p-1 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          // Sun icon
          <svg
            className="h-8 w-8 p-1 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
      </motion.span>
    </motion.button>
  );
} 