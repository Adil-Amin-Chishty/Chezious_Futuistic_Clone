import React from 'react';
import { motion } from 'framer-motion';
import { locationsData } from '../data/locationsData';

const FindUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {locationsData.slice(0, 6).map((location, index) => (
        <motion.div
          key={location.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48">
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{location.name}</h3>
            <p className="text-gray-600 mb-2">{location.address}</p>
            <p className="text-gray-600 mb-4">{location.phone}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{location.operatingHours}</span>
              <button className="bg-primary hover:bg-primary-dark text-black font-bold py-2 px-4 rounded-lg transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FindUs; 