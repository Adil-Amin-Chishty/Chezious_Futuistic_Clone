// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart, Phone, Rocket, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-void-black border-b border-nebula-blue/20 fixed w-full top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-space-gradient py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center space-x-4 text-nebula-blue">
            <a href="tel:+923001234567" className="flex items-center hover:text-cosmic-pink transition-colors">
              <Phone size={16} className="mr-1" />
              <span>+92 300 1234567</span>
            </a>
            <span className="text-neon-purple">|</span>
            <span className="flex items-center">
              <Rocket size={16} className="mr-1" />
              Order Online
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100" 
              alt="Cheezious Logo" 
              className="h-12 w-12 rounded-full border-2 border-nebula-blue"
            />
            <span className="text-2xl font-bold space-text">Cheezious</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-nebula-blue hover:text-cosmic-pink transition-colors font-medium">
              <Star size={16} className="inline-block mr-1" />
              Home
            </Link>
            <Link to="/menu" className="text-nebula-blue hover:text-cosmic-pink transition-colors font-medium">
              <Star size={16} className="inline-block mr-1" />
              Menu
            </Link>
            <Link to="/deals" className="text-nebula-blue hover:text-cosmic-pink transition-colors font-medium">
              <Star size={16} className="inline-block mr-1" />
              Deals
            </Link>
            <Link to="/locations" className="text-nebula-blue hover:text-cosmic-pink transition-colors font-medium">
              <Star size={16} className="inline-block mr-1" />
              Locations
            </Link>
            <Link to="/contact" className="text-nebula-blue hover:text-cosmic-pink transition-colors font-medium">
              <Star size={16} className="inline-block mr-1" />
              Contact
            </Link>
            <button className="btn-primary inline-flex items-center">
              <Rocket size={20} className="mr-2" />
              Order Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-nebula-blue hover:text-cosmic-pink transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 bg-void-black border-t border-nebula-blue/20"
          >
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star size={16} className="mr-2" />
                Home
              </Link>
              <Link
                to="/menu"
                className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star size={16} className="mr-2" />
                Menu
              </Link>
              <Link
                to="/deals"
                className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star size={16} className="mr-2" />
                Deals
              </Link>
              <Link
                to="/locations"
                className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star size={16} className="mr-2" />
                Locations
              </Link>
              <Link
                to="/contact"
                className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Star size={16} className="mr-2" />
                Contact
              </Link>
              <button className="btn-primary w-full inline-flex items-center justify-center">
                <Rocket size={20} className="mr-2" />
                Order Now
              </button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;