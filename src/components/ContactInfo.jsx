// src/components/ContactInfo.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Address</h4>
              <p className="text-gray-600">123 Main Street, Downtown, Islamabad, Pakistan</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Phone</h4>
              <p className="text-gray-600">(051) 111-446-699</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Email</h4>
              <p className="text-gray-600">info@cheezious.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-medium">Working Hours</h4>
              <p className="text-gray-600">Monday - Thursday: 11AM - 10PM</p>
              <p className="text-gray-600">Friday - Saturday: 11AM - 11PM</p>
              <p className="text-gray-600">Sunday: 12PM - 9PM</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com/cheezious"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://instagram.com/cheezious"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://twitter.com/cheezious"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;