import { useState } from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    id: 1,
    name: "Full Stack Development",
    description: "Master modern web development with our comprehensive full stack program. Learn to build scalable applications from front to back.",
    duration: "16 Weeks",
    startDates: "Monthly Cohorts",
    level: "Beginner to Advanced",
    icon: "💻",
    color: "from-blue-600 to-indigo-600",
    modules: [
      {
        name: "Frontend Development",
        description: "Build modern, responsive user interfaces with React and Next.js",
        topics: [
          "HTML5, CSS & Modern JavaScript",
          "React & Redux Architecture",
          "Next.js & Server Components",
          "TypeScript & Static Typing"
        ],
        tools: ["React", "Next.js", "JavaScript", "Tailwind CSS"]
      },
      {
        name: "Backend Development",
        description: "Create robust and scalable server-side applications",
        topics: [
          "Node.js & Express",
          "RESTful API Design",
          "GraphQL & Apollo",
          "Database Design & ORM"
        ],
        tools: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
      },
      {
        name: "Git & Github",
        description: " Master Git & Github to manage your code and collaborate with others",
        topics: [
          "Git Basics",
          "GitHub Workflow",
          "Git Branching Strategies",
          "Collaboration & Conflict Resolution"
        ],
        tools: ["Git", "GitHub", "GitLab", "Bitbucket"]
      }
    ]
  },
  {
    id: 2,
    name: "Mobile Development",
    description: "Build mobile applications using React Native. Develop cross-platform apps for iOS and Android.",
    duration: "16 Weeks",
    startDates: "Monthly Cohorts",
    level: "Beginner to Advanced",
    icon: "📱",
    color: "from-purple-600 to-pink-600",
    modules: [
      {
        name: "React Native Fundamentals",
        description: "Master the fundamentals of React Native development",
        topics: [
          "React Native Architecture",
          "React Native Components",
          "React Native Navigation",
          "React Native State Management"
        ],
        tools: ["React Native", "Expo", "JavaScript", "TypeScript"]
      },
      {
        name: "Mobile Design Principles",
        description: "Learn to design beautiful and user-friendly mobile interfaces",
        topics: [
          "UI/UX Design",
          "Responsive Design",
          "Animation & Transitions",
          "Material Design"
        ],
        tools: ["Figma", "Adobe XD", "Sketch", "Invision"]
      },
      {
        name: "Mobile Testing & Debugging",
        description: "Learn to test and debug mobile applications",
        topics: [
          "Unit Testing",
          "Debugging Tools",
          "Performance Optimization",
          "Error Handling"
        ],
        tools: ["Jest", "React Native Testing Library", "Eslint", "Prettier"]
      }
    ]
  },
  {
    id: 3,
    name: "Cloud Architecture",
    description: "Learn to design, deploy, and manage cloud-native applications and infrastructure at scale.",
    duration: "20 Weeks",
    startDates: "Flexible Entry",
    level: "Intermediate to Advanced",
    icon: "☁️",
    color: "from-green-600 to-teal-600",
    modules: [
      {
        name: "Cloud Fundamentals",
        description: "Master core cloud computing concepts and services",
        topics: [
          "Cloud Service Models",
          "Network & Security",
          "Identity & Access Management",
          "Cost Optimization"
        ],
        tools: ["AWS", "Azure", "GCP", "Terraform"]
      },
      {
        name: "Cloud Native Development",
        description: "Build applications optimized for cloud deployment",
        topics: [
          "Containerization",
          "Orchestration",
          "Serverless Architecture",
          "Microservices"
        ],
        tools: ["Docker", "Kubernetes", "AWS Lambda", "Cloud Functions"]
      },
      {
        name: "DevOps & SRE",
        description: "Implement modern DevOps practices and tools",
        topics: [
          "Infrastructure as Code",
          "CI/CD Automation",
          "Monitoring & Logging",
          "Incident Response"
        ],
        tools: ["Jenkins", "GitLab", "Prometheus", "ELK Stack"]
      }
    ]
  },
  {
    id: 4,
    name: "Blockchain Development",
    description: "Secure, decentralized, and innovative—Blockchain development in action.",
    duration: "16 weeks",
    startDates: "Monthly Cohorts",
    level: "Intermediate to Advanced",
    icon: "🔗",
    color: "from-blue-600 to-indigo-800",
    modules: [
      {
        name: "Blockchain Fundamentals",
        description: "Master the core concepts and architecture of blockchain technology",
        topics: [
          "Distributed Ledger Technology",
          "Consensus Mechanisms",
          "Cryptography Principles",
          "Blockchain Security"
        ],
        tools: ["Bitcoin", "Ethereum", "Hyperledger", "Cryptography Tools"]
      },
      {
        name: "Smart Contract Development",
        description: "Learn to develop and deploy secure smart contracts",
        topics: [
          "Solidity Programming",
          "Smart Contract Security",
          "Testing & Auditing",
          "Contract Optimization"
        ],
        tools: ["Solidity", "Truffle", "Hardhat", "OpenZeppelin"]
      },
      {
        name: "Decentralized Applications",
        description: "Build complete decentralized applications with modern tools and frameworks",
        topics: [
          "Web3.js & Ethers.js",
          "DApp Architecture",
          "Token Standards (ERC20, ERC721)",
          "Decentralized Finance Principles"
        ],
        tools: ["JavaScript", "React", "Web3.js", "MetaMask"]
      }
    ]
  },
  {
    id: 5,
    name: "Game Development",
    description: "Create, code, and play—game development in action",
    duration: "32 weeks",
    startDates: "Quarterly Cohorts",
    level: "Beginner to Advanced",
    icon: "🎮",
    color: "from-purple-600 to-blue-600",
    modules: [
      {
        name: "Game Design Fundamentals",
        description: "Learn the core principles of game design and player engagement",
        topics: [
          "Game Mechanics & Systems",
          "Level Design Principles",
          "Player Psychology",
          "Balancing & Difficulty Curves"
        ],
        tools: ["Unity", "Unreal Engine", "Game Design Documents", "Prototyping Tools"]
      },
      {
        name: "Game Engine Programming",
        description: "Master programming techniques specific to game development",
        topics: [
          "Game Physics & Mathematics",
          "Rendering & Graphics Pipeline",
          "AI & Pathfinding",
          "Optimization Techniques"
        ],
        tools: ["C++", "C#", "Python", "Java"]
      },
      {
        name: "Game Assets & Animation",
        description: "Create and integrate visual and audio assets into your games",
        topics: [
          "2D & 3D Asset Creation",
          "Character Animation",
          "Sound Design & Implementation",
          "VFX & Particle Systems"
        ],
        tools: ["Blender", "Maya", "Photoshop", "Audacity"]
      }
    ]
  },
  {
    id: 6,
    name: "AI Development",
    description: "Master artificial intelligence concepts and techniques to build intelligent applications.",
    duration: "24 Weeks",
    startDates: "Quarterly Cohorts",
    level: "Intermediate to Advanced",
    icon: "🤖",
    color: "from-teal-600 to-cyan-600",
    modules: [
      {
        name: "Machine Learning Fundamentals",
        description: "Learn core machine learning algorithms and techniques",
        topics: [
          "Supervised & Unsupervised Learning",
          "Neural Networks & Deep Learning",
          "Model Evaluation & Optimization",
          "Feature Engineering"
        ],
        tools: ["Python", "TensorFlow", "PyTorch", "scikit-learn"]
      },
      {
        name: "Natural Language Processing",
        description: "Build applications that understand and generate human language",
        topics: [
          "Text Processing & Embeddings",
          "Sentiment Analysis & Classification",
          "Language Models & Transformers",
          "Conversational AI"
        ],
        tools: ["NLTK", "spaCy", "Hugging Face", "LangChain"]
      },
      {
        name: "Computer Vision",
        description: "Develop systems that can interpret and analyze visual data",
        topics: [
          "Image Classification & Segmentation",
          "Object Detection & Tracking",
          "Generative Models & GANs",
          "Augmented Reality Applications"
        ],
        tools: ["OpenCV", "TensorFlow Vision", "PyTorch Vision", "YOLO"]
      }
    ]
  }
];

export default function Curriculum() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);

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
              Tech-Focused Curriculum
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-aligned programs designed to transform you into a tech professional.
              Learn from experts and build real-world projects.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Program List */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white mb-4">Programs</h2>
                  <div className="space-y-2">
                    {programs.map((program) => (
                      <motion.button
                        key={program.id}
                        onClick={() => setSelectedProgram(program)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                          selectedProgram.id === program.id
                            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white'
                            : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{program.icon}</span>
                          <span className="font-medium">{program.name}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Program Details */}
          <div className="lg:col-span-3">
            <motion.div
              key={selectedProgram.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{selectedProgram.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {selectedProgram.name}
                    </h2>
                    <p className="text-gray-400">
                      {selectedProgram.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-lg font-medium text-white">{selectedProgram.duration}</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-sm text-gray-400">Start Dates</p>
                    <p className="text-lg font-medium text-white">{selectedProgram.startDates}</p>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <p className="text-sm text-gray-400">Level</p>
                    <p className="text-lg font-medium text-white">{selectedProgram.level}</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-6">Course Modules</h3>
                <div className="space-y-8">
                  {selectedProgram.modules.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-b border-gray-700 pb-8 last:border-0"
                    >
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {module.name}
                      </h4>
                      <p className="text-gray-400 mb-4">{module.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-sm font-semibold text-indigo-400 mb-2">
                            Topics Covered
                          </h5>
                          <ul className="space-y-2">
                            {module.topics.map((topic, i) => (
                              <li key={i} className="text-gray-400 flex items-center">
                                <span className="text-indigo-400 mr-2">→</span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-indigo-400 mb-2">
                            Tools & Technologies
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {module.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition-all duration-300"
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 