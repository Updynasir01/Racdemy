import { motion } from 'framer-motion';
import CourseSection from "../components/CourseSection";
import ImpactSection from "../components/ImpactSection";
const codeSnippets = [
  {
    language: 'javascript',
    code: 'const future = await education.learn("programming");'
  },
  {
    language: 'python',
    code: 'def create_success(dedication):\n    return success'
  },
  {
    language: 'jsx',
    code: '<Future>Your Success Story</Future>'
  }
];

const techIcons = [
  { icon: '⚛️', label: 'React' },
  { icon: '🌐', label: 'Web Dev' },
  { icon: '🤖', label: 'AI/ML' },
  { icon: '📱', label: 'Mobile' },
  { icon: '🎨', label: 'UI/UX' }
];

const features = [
  {
    icon: "💻",
    title: "Modern Tech Stack",
    description: "Learn the latest technologies used by top companies worldwide.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: "🔄",
    title: "Continuous Learning",
    description: "Regular updates to keep you aligned with industry trends.",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: "🚀",
    title: "Career Launch",
    description: "Get hired with our industry partnerships and career support.",
    color: "from-green-600 to-teal-600"
  }
];

const stats = [
  { value: "15+", label: "Programming Languages" },
  { value: "50+", label: "Industry Projects" },
  { value: "95%", label: "Placement Rate" },
  { value: "24/7", label: "Learning Support" }
];

export default function Home() {
  return (
    <div className="space-y-16 bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/10" />
            ))}
          </div>
        </div>

        {/* Floating tech elements */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute hidden md:block text-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: [0.5, 1, 0.5],
              y: [0, -20, 0],
              x: Math.sin(index) * 20
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2
            }}
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 20)}%`
            }}
          >
            {tech.icon}
          </motion.div>
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Code Your Future
                <span className="text-indigo-400"> Today</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Master the art of programming with our comprehensive courses. 
                Transform your passion into expertise.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-x-4"
              >
                <a
                  href="/curriculum"
                  className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Courses
                </a>
                <a
                  href="/about"
                  className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </a>
              </motion.div>
            </div>

            {/* Animated code terminal */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
              >
                <div className="flex items-center space-x-2 px-4 py-2 bg-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="p-6 space-y-4">
                  {codeSnippets.map((snippet, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                      className="font-mono text-sm"
                    >
                      <span className="text-green-400">→ </span>
                      <span className="text-indigo-400">{snippet.language}:</span>
                      <pre className="mt-1 text-gray-300 whitespace-pre-wrap">
                        {snippet.code}
                      </pre>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                    className="text-gray-400 font-mono"
                  >
                    <span className="animate-pulse">▋</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CourseSection />
      <ImpactSection />

      {/* Features Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Academy
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of tech education with our innovative approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`} />
                <div className="relative bg-gray-800 p-8 rounded-xl transform transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Begin Your Tech Journey?
                </h2>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful developers who started their career with us
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <a
                    href="/register"
                    className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-indigo-600 font-bold hover:bg-opacity-90 transform transition-all duration-300"
                  >
                    Start Learning Now
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white opacity-10 rounded-full" />
              <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white opacity-10 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
} 