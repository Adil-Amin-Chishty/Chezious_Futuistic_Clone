// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Rocket, Star, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-void-black text-nebula-blue border-t border-nebula-blue/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold space-text">
                <Sparkles className="inline-block mr-2" />
                Cheezious
              </h2>
            </div>
            <p className="text-nebula-blue mb-4">
              Embark on a cosmic culinary journey with our intergalactic flavors and stellar service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-nebula-blue hover:text-cosmic-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-nebula-blue hover:text-cosmic-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-nebula-blue hover:text-cosmic-pink transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-purple">
              <Star className="inline-block mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/menu" className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center">
                  <Rocket size={16} className="mr-2" />
                  Menu
                </a>
              </li>
              <li>
                <a href="/deals" className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center">
                  <Rocket size={16} className="mr-2" />
                  Deals
                </a>
              </li>
              <li>
                <a href="/locations" className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center">
                  <Rocket size={16} className="mr-2" />
                  Locations
                </a>
              </li>
              <li>
                <a href="/contact" className="text-nebula-blue hover:text-cosmic-pink transition-colors flex items-center">
                  <Rocket size={16} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-purple">
              <Star className="inline-block mr-2" />
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-nebula-blue">
                <Phone size={18} className="mr-2" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center text-nebula-blue">
                <Mail size={18} className="mr-2" />
                <span>info@cheezious.com</span>
              </li>
              <li className="flex items-center text-nebula-blue">
                <MapPin size={18} className="mr-2" />
                <span>123 Food Street, Karachi</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neon-purple">
              <Star className="inline-block mr-2" />
              Cosmic Newsletter
            </h3>
            <p className="text-nebula-blue mb-4">
              Subscribe to our cosmic newsletter for exclusive deals and updates from across the galaxy.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg w-full bg-void-black border border-nebula-blue/20 text-nebula-blue focus:outline-none focus:ring-2 focus:ring-nebula-blue"
              />
              <button
                type="submit"
                className="btn-primary rounded-l-none"
              >
                <Rocket size={20} className="mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-nebula-blue/20 mt-8 pt-8 text-center text-nebula-blue">
          <p>&copy; {new Date().getFullYear()} Cheezious. All rights reserved across the galaxy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;