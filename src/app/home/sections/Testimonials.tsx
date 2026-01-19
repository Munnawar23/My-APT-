'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Resident, Prabhat Nagar',
      content: 'My Apt has completely transformed our society. The maintenance is prompt, the communication is transparent, and we finally have peace of mind knowing everything is being handled professionally.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      name: 'Priya Sharma',
      role: 'Society Secretary',
      content: 'As a committee member, My Apt has reduced our workload significantly. The technology platform makes tracking complaints and maintenance so easy. Highly recommend their services!',
      rating: 5,
      image: '👩‍💼',
    },
    {
      name: 'Amit Patel',
      role: 'Resident, Sector 5',
      content: 'The proactive maintenance approach is what sets My Apt apart. They fix issues before they become problems. Our society has never looked better or run smoother.',
      rating: 5,
      image: '👨',
    },
    {
      name: 'Sunita Verma',
      role: 'Resident',
      content: 'The 24/7 support and quick response time is incredible. Whether it\'s a small issue or an emergency, the My Apt team is always there to help. Truly professional service.',
      rating: 5,
      image: '👩',
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

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
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading text-text-primary mb-6">
            What Our Residents Say
          </h2>
          <p className="text-xl font-body text-text-secondary max-w-3xl mx-auto">
            Don't just take our word for it—hear from the residents who experience the My Apt difference every day.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-6xl text-primary/20 mb-4">"</div>
              
              {/* Content */}
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-2xl font-body text-text-primary leading-relaxed mb-8"
              >
                {testimonials[activeIndex].content}
              </motion.p>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-2xl text-yellow-400"
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-3xl">
                  {testimonials[activeIndex].image}
                </div>
                <div>
                  <p className="font-heading text-text-primary text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="font-body text-text-secondary">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              onClick={() => setActiveIndex(index)}
              className={`group relative p-4 rounded-2xl transition-all ${
                activeIndex === index
                  ? 'bg-linear-to-br from-primary to-accent shadow-lg'
                  : 'bg-white hover:bg-background-secondary shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                  activeIndex === index ? 'bg-white/20' : 'bg-linear-to-br from-primary to-accent'
                }`}>
                  {testimonial.image}
                </div>
                <div className="text-left hidden md:block">
                  <p className={`font-body-medium text-sm ${
                    activeIndex === index ? 'text-white' : 'text-text-primary'
                  }`}>
                    {testimonial.name}
                  </p>
                  <p className={`font-body text-xs ${
                    activeIndex === index ? 'text-white/80' : 'text-text-secondary'
                  }`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-accent border-2 border-white flex items-center justify-center text-lg">
                  {t.image}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-heading text-text-primary">500+ Happy Residents</p>
              <p className="font-body text-text-secondary text-sm">Across Udaipur</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
