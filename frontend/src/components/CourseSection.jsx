import { motion } from 'framer-motion';

const courses = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn modern web development with HTML, CSS, JavaScript, React, and Node.js",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
    category: "Programming",
    duration: "4 months",
    students: "120+",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript"]
  },
  {
    id: 2,
    title: "Game Development",
    description: "Create, code, and play—game development in action",
    image: "https://images.unsplash.com/photo-1615525137689-198778541af6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Programing",
    duration: "32 weeks",
    students: "300+",
    technologies: ["Python", "C++", "C#", "Java"]
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Create iOS and Android apps using React Native and Flutter",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    category: "Programming",
    duration: "4 months",
    students: "120+",
    technologies: ["React Native", "Flutter", "Firebase", "Swift"]
  },
  {
    id: 4,
    title: "Blockchain Development",
    description: "Secure, decentralized, and innovative—Blockchain development in action",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Programing",
    duration: "16 weeks",
    students: "250+",
    technologies: ["Rust", "Go", "JavaScript", "Solidity"]
  }
];

const CategoryBadge = ({ category }) => {
  const bgColor = {
    Programming: 'bg-blue-600',
    Data: 'bg-green-600',
    Design: 'bg-purple-600'
  }[category] || 'bg-indigo-600';

  return (
    <span className={`px-3 py-1 ${bgColor} text-white text-sm font-medium rounded-full`}>
      {category}
    </span>
  );
};

const TechBadge = ({ tech }) => (
  <span className="inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded mr-2 mb-2">
    {tech}
  </span>
);

export default function CourseSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Courses
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Explore our comprehensive range of courses designed to help you master the latest technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700"
            >
              <div className="relative group">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-70 transition-all duration-300"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <CategoryBadge category={course.category} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 hover:text-indigo-400 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="mb-4">
                  {course.technologies.map((tech, i) => (
                    <TechBadge key={i} tech={tech} />
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    {course.students} Students
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-2 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 