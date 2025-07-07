
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="mb-8 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>

          {/* Main Content */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Prasandu Yasith
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Aspiring Software Engineer passionate about creating innovative solutions and building the future through code.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          {/* Copyright */}
          <motion.div
            className="flex items-center space-x-2 text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span>© 2025 Prasandu Yasith. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and lots of ☕</span>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-6 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>

          {/* Fun Quote */}
          <motion.p
            className="mt-8 text-xs text-gray-500 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            "Code is poetry written in logic" ✨
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
