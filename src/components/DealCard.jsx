// src/components/DealCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const DealCard = ({ deal }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-soft overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={deal.image}
          alt={deal.title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{deal.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">${deal.price}</span>
            {deal.originalPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${deal.originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={16} className="mr-1" />
            <span>Valid until {new Date(deal.validUntil).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DealCard;