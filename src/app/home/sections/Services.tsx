'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { SERVICES } from '@/constants';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="services" ref={ref} className="py-24 pb-12 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-linear-to-r from-primary/5 to-accent/5 -skew-y-6 transform -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-accent font-heading font-semibold tracking-wider uppercase text-sm mb-4">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-6">
            Comprehensive <span className="italic text-primary">Service</span> Suite
          </h2>
          <p className="text-xl font-body text-text-secondary max-w-2xl mx-auto">
            We handle the complexities of property management so you don't have to.
          </p>
        </motion.div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate={isInView ? "visible" : "hidden"}
           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className="relative bg-white rounded-4xl p-8 h-full shadow-lg border border-transparent hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className="mb-8 relative">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} opacity-10 absolute inset-0 transform rotate-6 group-hover:rotate-12 transition-transform duration-500`} />
                    <div className="w-16 h-16 flex items-center justify-center text-4xl relative z-10">
                        {service.icon}
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body-medium text-text-secondary/80 text-sm uppercase tracking-wide mb-4">
                    {service.subtitle}
                  </p>
                  <p className="font-body text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                 {/* Bottom Line */}
                 <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-linear-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
             <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-text-primary text-white font-body-medium rounded-full hover:bg-primary transition-colors duration-300 shadow-xl"
            >
              Start Transforming Your Society
              <span className="text-xl">→</span>
            </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
