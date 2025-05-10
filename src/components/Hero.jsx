// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] bg-void-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200"
          alt="Space Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void-black via-void-black/80 to-void-black"></div>
      </div>

      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 space-text"
          >
            <Sparkles className="inline-block mr-2" />
            Intergalactic
            <br />
            <span className="text-neon-purple">Culinary</span> Experience
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-nebula-blue mb-8"
          >
            Embark on a cosmic journey through flavors from across the universe
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link 
              to="/menu" 
              className="btn-primary inline-flex items-center"
            >
              <Rocket className="mr-2" />
              Explore Menu
            </Link>
            <Link 
              to="/deals" 
              className="btn-secondary inline-flex items-center"
            >
              <Star className="mr-2" />
              Cosmic Deals
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            <motion.div className="text-center card p-4 rocket-hover" whileHover={{ y: -5 }}>
              <div className="mb-2"><Rocket className="w-8 h-8 text-nebula-blue icon-rocket" /></div>
              <p className="text-nebula-blue text-sm">Light-Speed Delivery</p>
            </motion.div>
            <motion.div className="text-center card p-4 star-hover" whileHover={{ y: -5 }}>
              <div className="mb-2"><Star className="w-8 h-8 text-neon-purple icon-star" /></div>
              <p className="text-nebula-blue text-sm">Stellar Quality</p>
            </motion.div>
            <motion.div className="text-center card p-4 sparkle-hover" whileHover={{ y: -5 }}>
              <div className="mb-2"><Sparkles className="w-8 h-8 text-cosmic-pink icon-sparkle" /></div>
              <p className="text-nebula-blue text-sm">Cosmic Freshness</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;