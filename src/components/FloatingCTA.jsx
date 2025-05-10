// src/components/FloatingCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingCTA = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
    >
      <Link
        to="/menu"
        className="flex items-center justify-center btn-primary p-4 rounded-full shadow-neon hover:shadow-glow transition-all duration-300 float"
      >
        <Rocket size={24} />
        <span className="ml-2 font-medium">Launch Order</span>
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;