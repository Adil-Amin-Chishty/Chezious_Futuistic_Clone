// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Rocket, Star, Sparkles } from 'lucide-react';
import Hero from '../components/Hero';
import FeaturedItems from '../components/FeaturedItems';
import Testimonials from '../components/Testimonials';
import { featuredItems } from '../data/menuItems';
import { testimonials } from '../data/testimonials';
import { locations } from '../data/locations';
import DealCard from '../components/DealCard';
import { deals } from '../data/deals';

const Home = () => {
  // Featured deals for homepage
  const featuredDeals = deals.slice(0, 3);
  
  // Featured locations for homepage
  const featuredLocations = locations.slice(0, 3);

  return (
    <div className="bg-void-black">
      <Hero />
      
      {/* Featured Deals Section */}
      <section className="section bg-space-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-space-bg opacity-100"></div>
        <div className="container relative">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 space-text"
            >
              <Sparkles className="inline-block mr-2" />
              Cosmic Deals
              <Sparkles className="inline-block ml-2" />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-nebula-blue max-w-2xl mx-auto"
            >
              Experience our out-of-this-world offers and stellar combo deals
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/deals" className="btn-secondary inline-flex items-center">
              Explore All Deals
              <Rocket size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Popular Menu Items */}
      <FeaturedItems items={featuredItems} />
      
      {/* Locations Preview */}
      <section className="section bg-void-black relative">
        <div className="absolute inset-0 bg-nebula opacity-5"></div>
        <div className="container relative">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 space-text"
            >
              <Star className="inline-block mr-2" />
              Find Our Space Stations
              <Star className="inline-block ml-2" />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-nebula-blue max-w-2xl mx-auto"
            >
              Visit one of our many locations across the galaxy
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLocations.map((location) => (
              <motion.div
                key={location.id}
                whileHover={{ y: -5 }}
                className="card overflow-hidden float"
              >
                <div className="h-48 relative">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-black to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-neon-purple">{location.name}</h3>
                  <div className="flex items-start mb-3">
                    <MapPin size={18} className="text-nebula-blue mr-2 flex-shrink-0 mt-1" />
                    <p className="text-nebula-blue text-sm">{location.address}</p>
                  </div>
                  <p className="text-sm text-cosmic-pink mb-4">{location.hours}</p>
                  <Link 
                    to="/locations" 
                    className="text-nebula-blue font-medium hover:text-cosmic-pink transition-colors inline-flex items-center"
                  >
                    Get Directions
                    <Rocket size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/locations" className="btn-primary inline-flex items-center">
              View All Locations
              <Rocket size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default Home;