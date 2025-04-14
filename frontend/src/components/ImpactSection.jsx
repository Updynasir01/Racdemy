import { motion } from 'framer-motion';

const impactMetrics = [
  {
    icon: "👨‍🎓",
    value: "500+",
    label: "Graduates",
    description: "Tech professionals trained",
    color: "from-blue-600 to-indigo-600"
  },
  {
    icon: "💻",
    value: "11",
    label: "Coding Bootcamps",
    description: "Specialized tech programs",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: "🏢",
    value: "3",
    label: "Campuses",
    description: "State-of-the-art facilities",
    color: "from-green-600 to-teal-600"
  },
  {
    icon: "🎯",
    value: "8",
    label: "Tech Events",
    description: "Industry networking",
    color: "from-orange-600 to-red-600"
  }
];

export default function ImpactSection() {
  return (
    <div className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-0 w-96 h-96 bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute -top-48 right-0 w-96 h-96 bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-48 left-1/2 w-96 h-96 bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming lives through technology education and innovation
          </p>
        </motion.div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur`} />
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{metric.icon}</span>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: index * 0.1 
                    }}
                    className={`h-12 w-12 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}
                  >
                    <span className="text-2xl font-bold text-white">{metric.value}</span>
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-400">
                  {metric.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 relative rounded-xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Tech Education Impact"
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-xl text-white font-medium max-w-2xl">
              Our graduates are making an impact at leading tech companies worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 