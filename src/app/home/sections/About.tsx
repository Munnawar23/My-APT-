'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { BENEFITS, STATS } from '@/constants';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" ref={ref} className="py-32 bg-background-secondary relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left Column - Heading & Mission */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-primary font-heading font-semibold tracking-wider uppercase text-sm mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary leading-tight">
                Refining the Art of <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                  Living.
                </span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="prose prose-lg text-text-secondary">
               <p className="text-xl leading-relaxed">
                To transform apartments from mere buildings into professionally managed living ecosystems—where residents focus on life, not logistics.
              </p>
              <p className="opacity-80">
                We believe that living in an apartment should be effortless. Our mission is to combine cutting-edge technology with personalized human service to create living spaces where every detail is taken care of.
              </p>
            </motion.div>

             <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-xl font-heading font-semibold mb-4">Why Choose Us?</h3>
              <p className="text-text-secondary">
                We're not just property managers—we're your partners in creating a better living experience. With our proven systems and dedicated team, we ensure your society runs smoothly.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Benefits & Stats */}
          <div className="space-y-12">
            <motion.div variants={itemVariants}>
               <h3 className="text-2xl font-heading font-semibold mb-8">What Changes With My Apt</h3>
               <div className="grid gap-4">
                {BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-primary/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-heading text-sm font-bold shrink-0">
                      {index + 1}
                    </div>
                    <span className="font-body text-text-secondary">{benefit}</span>
                  </motion.div>
                ))}
               </div>
            </motion.div>

             {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
               {STATS.map((stat, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border border-border text-center group hover:border-primary/30 transition-colors">
                  <div className="text-3xl lg:text-4xl font-heading font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.number}
                  </div>
                  <div className="text-sm font-body font-medium text-text-secondary uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
               ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
