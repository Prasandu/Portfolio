import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';

// Professional color palette with CSS variables
const ColorSystem = {
  // Primary brand colors
  brand: {
    primary: 'hsla(243, 80%, 62%, 1)',       // Vibrant indigo
    primaryDark: 'hsla(243, 80%, 42%, 1)',    // Dark indigo
    primaryLight: 'hsla(243, 80%, 82%, 1)',   // Light indigo
    secondary: 'hsla(330, 81%, 60%, 1)',      // Vibrant pink
    secondaryDark: 'hsla(330, 81%, 40%, 1)',  // Dark pink
    secondaryLight: 'hsla(330, 81%, 80%, 1)', // Light pink
  },
  // Neutral colors
  neutral: {
    900: 'hsla(222, 47%, 11%, 1)',           // Darkest
    800: 'hsla(215, 28%, 17%, 1)',
    700: 'hsla(217, 19%, 27%, 1)',
    600: 'hsla(215, 14%, 34%, 1)',
    500: 'hsla(220, 9%, 46%, 1)',
    400: 'hsla(220, 13%, 69%, 1)',
    300: 'hsla(220, 20%, 85%, 1)',
    200: 'hsla(220, 30%, 92%, 1)',
    100: 'hsla(210, 40%, 98%, 1)',           // Lightest
  },
  // Accent colors
  accent: {
    blue: 'hsla(211, 100%, 50%, 1)',
    teal: 'hsla(172, 66%, 50%, 1)',
    amber: 'hsla(38, 92%, 50%, 1)',
    emerald: 'hsla(160, 84%, 39%, 1)',
  },
  // Utility colors
  utility: {
    success: 'hsla(142, 71%, 45%, 1)',
    warning: 'hsla(32, 95%, 44%, 1)',
    error: 'hsla(0, 84%, 60%, 1)',
    info: 'hsla(199, 89%, 48%, 1)',
  },
};

interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
  color?: string;
}

const Hero: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/prasandu-yasith-88598136b/',
      color: ColorSystem.accent.blue
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Prasandu',
      color: ColorSystem.neutral[600]
    },
    { 
      name: 'Email', 
      url: 'prasanduyasithlk@gmail.com',
      color: ColorSystem.accent.blue
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/1YfMjGEYPv/',
      color: ColorSystem.brand.secondary
    },
  ];

  const handleDownloadCV = (): void => {
    const cvUrl = '/Prasandu_Yasith.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Prasandu_Yasith_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(
          152deg, 
          ${ColorSystem.brand.primaryDark} 0%, 
          ${ColorSystem.neutral[900]} 100%
        )`,
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 -z-10 opacity-10" style={{
        backgroundImage: `
          linear-gradient(${ColorSystem.neutral[100]} 1px, transparent 1px),
          linear-gradient(90deg, ${ColorSystem.neutral[100]} 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              backgroundColor: i % 3 === 0 ? ColorSystem.brand.primaryLight : 
                             i % 3 === 1 ? ColorSystem.brand.secondaryLight : 
                             ColorSystem.neutral[100],
              opacity: i % 3 === 0 ? 0.15 : i % 3 === 1 ? 0.1 : 0.2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="mb-6 font-mono text-sm md:text-base tracking-wider"
            style={{ color: ColorSystem.brand.primaryLight }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            PRASANDU YASITH
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
            style={{ color: ColorSystem.neutral[100] }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Software Engineer &<br />
            <span style={{
              background: `linear-gradient(90deg, ${ColorSystem.brand.primary}, ${ColorSystem.brand.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Digital Experience Creator
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed"
            style={{ color: ColorSystem.neutral[400] }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Specializing in architecting high-performance web applications with elegant interfaces. 
            Currently crafting exceptional experiences at the intersection of design and technology.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={handleDownloadCV}
              className="px-8 py-3.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 group"
              style={{
                background: `linear-gradient(135deg, ${ColorSystem.brand.primary}, ${ColorSystem.brand.secondary})`,
                color: ColorSystem.neutral[100],
                boxShadow: `0 4px 20px -5px ${ColorSystem.brand.primary}80`,
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 6px 25px -3px ${ColorSystem.brand.secondary}80`,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Download CV</span>
              <ExternalLink size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3.5 border rounded-lg font-medium transition-all duration-300 flex items-center gap-3 group"
              style={{
                borderColor: ColorSystem.neutral[600],
                color: ColorSystem.neutral[300],
              }}
              whileHover={{ 
                scale: 1.03,
                backgroundColor: `${ColorSystem.neutral[800]}30`,
                borderColor: ColorSystem.brand.primaryLight,
                color: ColorSystem.neutral[100],
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Work</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium flex items-center gap-2 transition-all duration-300 group"
                style={{ color: social.color || ColorSystem.neutral[400] }}
                whileHover={{ 
                  y: -2,
                  color: ColorSystem.neutral[100],
                }}
              >
                <span className="border-b border-transparent group-hover:border-current transition-all duration-300">
                  {social.name}
                </span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            {/* Main profile container */}
            <motion.div
              className="w-72 h-72 md:w-96 md:h-96 rounded-full relative overflow-hidden"
              style={{
                border: `1px solid ${ColorSystem.neutral[700]}`,
                boxShadow: `
                  0 0 0 1px ${ColorSystem.neutral[800]},
                  inset 0 0 0 1px ${ColorSystem.neutral[800]},
                  0 20px 40px -15px ${ColorSystem.neutral[900]}80
                `,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile image */}
              <motion.img
                src="/prasandu.jpg"
                alt="Prasandu Yasith"
                className="w-full h-full object-cover rounded-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              
              {/* Subtle overlay gradient */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: `linear-gradient(
                    to bottom, 
                    transparent 60%, 
                    ${ColorSystem.neutral[900]}90
                  )`,
                }}
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 rounded-full pointer-events-none"
              style={{ 
                backgroundColor: ColorSystem.accent.amber,
                opacity: 0.8,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full pointer-events-none"
              style={{ 
                backgroundColor: ColorSystem.neutral[100],
                opacity: 0.8,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-full -z-10 pointer-events-none"
              style={{
                background: `radial-gradient(
                  circle at center,
                  ${ColorSystem.brand.primary}20 0%,
                  transparent 70%
                )`,
                filter: 'blur(20px)',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
      >
        <div className="flex flex-col items-center">
          <ChevronDown 
            className="w-6 h-6 animate-bounce" 
            style={{ color: ColorSystem.brand.primaryLight }} 
          />
          <span 
            className="text-xs mt-2 tracking-widest uppercase"
            style={{ color: ColorSystem.neutral[500] }}
          >
            Explore More
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
