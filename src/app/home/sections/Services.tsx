'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SERVICES } from '@/constants';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary font-body-medium rounded-full text-sm mb-4"
          >
            What We Offer
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading text-text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl font-body text-text-secondary max-w-3xl mx-auto">
            At My Apt, we provide a comprehensive suite of property management services tailored for residential societies. Our goal is to ensure seamless operations and enhance the living experience for all residents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-heading text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-primary font-body-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="font-body text-text-secondary leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-linear-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-linear-to-br from-primary to-accent rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-heading text-white mb-4">
              Ready to Transform Your Society?
            </h3>
            <p className="text-white/90 font-body text-lg mb-8 max-w-2xl mx-auto">
              Join the growing number of societies that trust My Apt for professional, efficient, and transparent management.
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-primary font-body-medium rounded-full hover:bg-background-secondary transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
