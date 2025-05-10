// src/components/MenuCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const MenuCard = ({ item, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-soft overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">${item.price}</span>
          <button
            onClick={() => onClick(item)}
            className="btn btn-primary btn-sm"
          >
            <Plus size={18} />
            <span className="ml-1">Add</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;