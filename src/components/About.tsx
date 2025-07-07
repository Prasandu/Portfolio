
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate Learner",
      description: "Always eager to learn new technologies and improve my skills"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Thinker",
      description: "I enjoy thinking outside the box to create innovative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <img
                    src="/prasandu.jpg"
                    alt="Profile"
                    className="w-64 h-64 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Hello! I'm Prasandu Yasith</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a third-year undergraduate student pursuing a BSc in IT - Software Engineering at SLIIT. 
              My journey into the world of technology began with curiosity and has evolved into a genuine 
              passion for creating digital solutions that make a difference.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I believe in the power of code to transform ideas into reality. Whether it's building 
              responsive web applications, exploring new frameworks, or solving complex algorithms, 
              I approach every challenge with enthusiasm and dedication.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
