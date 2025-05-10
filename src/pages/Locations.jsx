import React from 'react';
import { motion } from 'framer-motion';
import LocationCard from '../components/LocationCard';
import LocationMap from '../components/LocationMap';
import { locationsData } from '../data/locationsData';

const Locations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Our Locations
      </motion.h1>

      <div className="mb-12">
        <LocationMap locations={locationsData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locationsData.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default Locations; 