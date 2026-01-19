'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { BENEFITS, STATS } from '@/constants';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
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
            About Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading text-text-primary mb-6">
            The My Apt Way
          </h2>
          <p className="text-xl font-body text-text-secondary max-w-3xl mx-auto">
            To transform apartments from mere buildings into professionally managed living ecosystems—where residents focus on life, not logistics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading text-text-primary mb-4">
                Our Mission
              </h3>
              <p className="font-body text-text-secondary leading-relaxed">
                We believe that living in an apartment should be effortless. Our mission is to combine cutting-edge technology with personalized human service to create living spaces where every detail is taken care of—so you can focus on what truly matters.
              </p>
            </div>

            <div className="bg-linear-to-br from-primary to-accent rounded-3xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-heading mb-4">
                Why Choose Us?
              </h3>
              <p className="font-body leading-relaxed opacity-95">
                We're not just property managers—we're your partners in creating a better living experience. With our proven systems and dedicated team, we ensure your society runs smoothly, efficiently, and transparently.
              </p>
            </div>
          </motion.div>

          {/* Right - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading text-text-primary mb-6">
              What Changes With My Apt
            </h3>
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-heading text-sm group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <p className="font-body text-text-secondary pt-1">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-4xl font-heading bg-linear-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="font-body text-text-secondary text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
