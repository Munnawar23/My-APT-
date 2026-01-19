'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '@/constants';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={ref} className="pt-12 pb-32 bg-white relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-b from-primary/5 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-linear-to-t from-accent/5 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-primary font-heading font-semibold tracking-wider uppercase text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-primary mb-6">
            Voices of the <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Community.
            </span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side - Image Grid / Navigation */}
                <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                    {TESTIMONIALS.map((testimonial, index) => (
                         <motion.button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-6 rounded-3xl text-left transition-all duration-300 border ${
                                activeIndex === index 
                                    ? 'bg-text-primary text-white scale-105 shadow-xl border-transparent z-10' 
                                    : 'bg-background-secondary text-text-secondary hover:bg-white hover:shadow-md border-transparent hover:border-gray-100'
                            }`}
                         >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-lg">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <p className={`font-heading font-bold text-sm ${activeIndex === index ? 'text-white' : 'text-text-primary'}`}>{testimonial.name}</p>
                                    <p className={`text-xs ${activeIndex === index ? 'text-white/60' : 'text-text-secondary'}`}>{testimonial.role}</p>
                                </div>
                            </div>
                         </motion.button>
                    ))}
                </div>

                {/* Right Side - Active Testimonial */}
                <div className="order-1 lg:order-2 relative min-h-[300px] flex items-center">
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-white rounded-4xl p-10 shadow-2xl border border-gray-100 relative"
                        >
                             <div className="text-6xl text-primary/20 font-serif absolute top-6 left-6 leading-none">"</div>
                             <div className="relative z-10 pt-6">
                                <p className="text-xl md:text-2xl font-body text-text-primary leading-relaxed mb-6">
                                    {TESTIMONIALS[activeIndex].content}
                                </p>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-xl ${i < TESTIMONIALS[activeIndex].rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                                    ))}
                                </div>
                             </div>
                        </motion.div>
                     </AnimatePresence>
                </div>
            </div>
        </div>

        {/* Global Trust Indicator */}
        <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.6 }}
             className="mt-20 flex justify-center"
        >
             <div className="inline-flex items-center gap-4 bg-background-secondary border border-white/50 backdrop-blur-sm rounded-full px-6 py-3 shadow-inner">
                 <div className="flex -space-x-3">
                     {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-gray-200 to-gray-300 border-2 border-white" />
                     ))}
                 </div>
                 <p className="text-sm font-body-medium text-text-secondary">Trusted by <span className="font-bold text-text-primary">500+ Residents</span> across Udaipur</p>
             </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
