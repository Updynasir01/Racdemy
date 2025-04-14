import { motion } from 'framer-motion';

const successStories = [
  {
    name: "John Smith",
    position: "Senior Software Engineer at Google",
    story: "After graduating from our Computer Science program, John joined Google and has been instrumental in developing key features for Google Cloud Platform.",
    graduationYear: "2019",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    tech: ["Cloud Computing", "Kubernetes", "Go", "System Design"],
    project: "Developed a distributed caching system that improved query performance by 40%"
  },
  {
    name: "Sarah Chen",
    position: "Data Scientist at Microsoft",
    story: "Sarah's journey from our Data Science program to Microsoft showcases the power of dedicated learning and practical application in AI/ML.",
    graduationYear: "2020",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "Deep Learning", "NLP"],
    project: "Built an AI model that increased user engagement by 25%"
  },
  {
    name: "Michael Rodriguez",
    position: "CEO of TechStart",
    story: "Michael founded his own successful tech startup after completing our program, raising $5M in seed funding.",
    graduationYear: "2018",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    tech: ["Entrepreneurship", "Full Stack", "Product Management"],
    project: "Created a SaaS platform with 100K+ active users"
  }
];

const testimonials = [
  {
    name: "Emma Wilson",
    program: "Full Stack Development",
    quote: "The practical experience and industry connections I gained were invaluable in landing my dream job at Amazon.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    role: "Software Development Engineer"
  },
  {
    name: "David Park",
    program: "AI/ML Engineering",
    quote: "The curriculum was challenging but rewarding. The mentorship helped me transition into AI research.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    role: "AI Research Engineer"
  }
];

const statistics = [
  {
    value: "95%",
    label: "Employment Rate",
    description: "Of our graduates find tech roles within 6 months"
  },
  {
    value: "150+",
    label: "Partner Companies",
    description: "Including FAANG and top startups"
  },
  {
    value: "$125K",
    label: "Avg. Starting Salary",
    description: "For our full-time program graduates"
  }
];

export default function Alumni() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet our alumni who are making waves in the tech industry and building the future.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{story.name}</h3>
                  <span className="text-indigo-400 text-sm">Class of {story.graduationYear}</span>
                </div>
                <p className="text-indigo-400 mb-3">{story.position}</p>
                <p className="text-gray-400 mb-4">{story.story}</p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Achievement</h4>
                  <p className="text-gray-400">{story.project}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {story.tech.map((tech, i) => (
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

      {/* Testimonials */}
      <div className="relative bg-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            What Our Alumni Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-indigo-400">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.program}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
 