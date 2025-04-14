import { motion } from 'framer-motion';

const values = [
  {
    icon: "🚀",
    title: "Innovation",
    description: "Pushing the boundaries of technology education with cutting-edge curriculum.",
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: "💡",
    title: "Excellence",
    description: "Committed to delivering the highest quality tech education and mentorship.",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: "🌐",
    title: "Global Impact",
    description: "Building a worldwide community of skilled developers and innovators.",
    color: "from-green-600 to-teal-600"
  }
];

const team = [
  {
    name: "Eng. Mohamed Ali Dahir",
    position: "Chief Technology Officer",
    description: "Former Google Tech Lead with 15+ years in software architecture",
    image: "/images/moha.jpg",
    tech: ["System Design", "Cloud Architecture", "AI/ML"]
  },
  {
    name: "Abdalla",
    position: "Head of Engineering",
    description: "Ex-Microsoft Principal Engineer, specialized in distributed systems",
    image: "/images/Abdalla .jpg",
    tech: ["Microservices", "DevOps", "Scalability"]
  },
  {
    name: "Abdinasir Isse Ali",
    position: "Director of Innovation",
    description: "Tech startup founder with multiple successful exits",
    image: "/images/abdi.jpg",
    tech: ["Product Strategy", "Innovation", "Tech Leadership"]
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Shaping the Future of Tech Education
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're on a mission to transform passionate learners into exceptional tech professionals
            through innovative education and hands-on experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower the next generation of tech leaders with cutting-edge skills,
              real-world experience, and the mindset to drive innovation in the digital age.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the world's leading tech education platform, known for producing
              exceptional talent that shapes the future of technology.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`} />
                <div className="relative bg-gray-800 p-8 rounded-xl transform transition-all duration-300">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">
                    {value.description}
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

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Meet Our Tech Leaders
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              <div className="aspect-w-16 pt-12 aspect-h-9 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover  w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-indigo-400 mb-2">{member.position}</p>
                <p className="text-gray-400 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 