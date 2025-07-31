import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Hospital Managemet System",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/hospital.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "talwindCss"],
      githubUrl: "https://github.com/Prasandu/Hospital-Management-System.git",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Online Fashion Store",
      description: "A full-stack e-commerce application built with php, html, and css. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/fashion.jpeg",
      technologies: ["Html", "css", "php", "javascript", "mysql"],
      githubUrl: "https://github.com/Prasandu/NOURA.git",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Online Property Management System",
      description: "A weather application that provides real-time weather data, 7-day forecasts, and interactive maps using weather APIs.",
      image: "/property.jpeg",
      technologies: ["JavaScript", "java", "tomcat", "CSS3"],
      githubUrl: "https://github.com/Prasandu/Property-management.git",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Camera Store App",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "camera.jpeg",
      technologies: ["Kotlin", "xml"],
      githubUrl: "https://github.com/Prasandu/CameraLK.git",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Financial Management App",
      description: "A comprehensive system for managing student records, grades, and attendance with role-based access control.",
      image: "/Finance.jpeg",
      technologies: ["Kotlin", "xml"],
      githubUrl: "https://github.com/Prasandu/FinTrack.git",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "This responsive portfolio website showcasing my projects and skills, built with React and modern web technologies.",
      image: "/image.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover"
              />
              
              <div className="p-4">
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <motion.a
                    href={project.githubUrl}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
