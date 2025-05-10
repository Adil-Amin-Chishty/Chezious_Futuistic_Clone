// src/components/FeaturedItems.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Rocket, Star } from 'lucide-react';
import { menuItems } from '../data/menuData';

const FeaturedItems = () => {
  const featuredItems = menuItems.slice(0, 6);

  return (
    <section className="py-16 bg-void-black relative">
      <div className="absolute inset-0 bg-nebula opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold space-text">
            <Star className="inline-block mr-2" />
            Cosmic Creations
          </h2>
          <Link to="/menu" className="text-nebula-blue hover:text-cosmic-pink transition-colors inline-flex items-center">
            Explore Menu
            <Rocket className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden float"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void-black to-transparent"></div>
                <div className="absolute top-4 right-4 bg-nebula-blue text-void-black px-3 py-1 rounded-full font-bold shadow-neon">
                  {item.price} PKR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-neon-purple">{item.name}</h3>
                <p className="text-nebula-blue mb-4">{item.description}</p>
                <button className="w-full btn-primary inline-flex items-center justify-center">
                  <Rocket className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;