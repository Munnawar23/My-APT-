'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import logoImage from '@/assets/images/logo.webp';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-linear-to-br from-orange-start/20 to-pink-end/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-linear-to-tr from-primary/20 to-accent/20 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 md:space-y-10 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-block relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative px-6 py-3 bg-white/50 backdrop-blur-md border border-white/60 text-primary font-body-medium rounded-full text-sm sm:text-base shadow-sm">
                ✨ Technology with Human Intervention
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading text-text-primary leading-[1.1] tracking-tight"
            >
              Living Made{' '}
              <span className="relative bg-linear-to-r from-orange-start to-pink-end bg-clip-text text-transparent inline-block">
                Easy
                <motion.svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-60"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                >
                  <motion.path
                    d="M0 5 Q 50 10 100 5"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-body text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Transform apartments from mere buildings into professionally managed living ecosystems where residents focus on life, not logistics.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-black text-white font-body-medium rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </motion.a>
              <motion.a
                href="#services"
                className="px-8 py-4 bg-white border border-border text-text-primary font-body-medium rounded-full hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Our Services
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6 justify-center lg:justify-start pt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-linear-to-br from-gray-100 to-gray-300 border-2 border-white shadow-md flex items-center justify-center text-xs font-bold text-gray-500"
                  >
                    User
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-2xl font-heading font-bold text-text-primary">500+</p>
                <p className="text-sm font-body text-text-secondary">Happy Residents</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-full">
              {/* Glass Card */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-[3rem] border border-white/50 shadow-2xl overflow-hidden transform rotate-3 transition-transform hover:rotate-0 duration-700">
                 {/* Decorative Gradient Overlay inside card */}
                 <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-linear-to-b from-primary/10 to-transparent rounded-full blur-3xl opacity-60" />
                 
                <div className="w-full h-full flex items-center justify-center p-12">
                   <Image
                    src={logoImage}
                    alt="My Apt Logo"
                    priority
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Floating Badge 1 */}
              <motion.div
                className="absolute top-10 -right-4 sm:-right-8 bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-xl border border-white/60"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center text-xl sm:text-2xl">🛡️</div>
                    <div>
                        <p className="font-heading font-bold text-text-primary text-sm sm:text-base">100% Secure</p>
                        <p className="text-xs text-text-secondary">Verified Societies</p>
                    </div>
                </div>
              </motion.div>

               {/* Floating Badge 2 */}
               <motion.div
                className="absolute bottom-10 -left-4 sm:-left-8 bg-white/80 backdrop-blur-xl p-4 sm:p-6 rounded-2xl shadow-xl border border-white/60"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex items-center justify-center text-xl sm:text-2xl">🚀</div>
                    <div>
                        <p className="font-heading font-bold text-text-primary text-sm sm:text-base">Fast Service</p>
                        <p className="text-xs text-text-secondary">24/7 Support</p>
                    </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
