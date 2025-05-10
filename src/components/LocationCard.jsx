// src/components/LocationCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const LocationCard = ({ location }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-soft overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin size={18} className="mt-1 mr-2 text-gray-500" />
            <span className="text-gray-600">{location.address}</span>
          </div>
          
          <div className="flex items-center">
            <Phone size={18} className="mr-2 text-gray-500" />
            <span className="text-gray-600">{location.phone}</span>
          </div>
          
          <div className="flex items-start">
            <Clock size={18} className="mt-1 mr-2 text-gray-500" />
            <div className="text-gray-600">
              <p className="font-medium">Hours:</p>
              <ul className="text-sm">
                {Object.entries(location.hours).map(([day, hours]) => (
                  <li key={day} className="capitalize">
                    {day}: {hours}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationCard;