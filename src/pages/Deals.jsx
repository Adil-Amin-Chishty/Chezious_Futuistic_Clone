import React from 'react';
import { motion } from 'framer-motion';
import { dealsData } from '../data/dealsData';

const Deals = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Special Deals
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dealsData.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full font-bold">
                {deal.price} PKR
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              <p className="text-gray-600 mb-4">{deal.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Valid until: {deal.validity}</span>
                <button className="btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals; 