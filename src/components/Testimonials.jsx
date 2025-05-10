// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="section bg-space-gradient relative">
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
            Cosmic Reviews
            <Sparkles className="inline-block ml-2" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-nebula-blue max-w-2xl mx-auto"
          >
            Hear from our intergalactic customers about their stellar dining experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="card p-6 float"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-nebula-blue"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-neon-purple">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.rating ? "#4CC9F0" : "none"}
                        stroke={i < testimonial.rating ? "#4CC9F0" : "#4CC9F0"}
                        className="mr-1"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-nebula-blue">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;