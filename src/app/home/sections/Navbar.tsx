'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { NAV_LINKS, CONTACT_PHONE } from '@/constants';


const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-300`}
      >
        <div 
          className={`pointer-events-auto relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
            scrolled || isMobileMenuOpen
              ? 'bg-white/90 backdrop-blur-xl shadow-lg border border-white/20 w-full max-w-5xl' 
              : 'bg-transparent w-full max-w-7xl'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="relative z-10 block shrink-0">
            <Image
              src="/logo.webp"
              alt="My Apt Logo"
              width={100}
              height={40}
              className="h-8 w-auto md:h-10 object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
             <div className="flex p-1 bg-gray-100/50 backdrop-blur-sm rounded-full border border-white/20">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setActiveTab(link.name)}
                  onMouseLeave={() => setActiveTab('')}
                  className="relative px-5 py-2 text-sm font-body-medium text-text-secondary transition-colors hover:text-primary rounded-full"
                >
                  {activeTab === link.name && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-[-1] bg-white shadow-sm rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4 relative z-10">
            <motion.a
              href={`tel:${CONTACT_PHONE}`}
              className="px-6 py-2.5 bg-black text-white text-sm font-body-medium rounded-full hover:bg-primary transition-colors shadow-lg hover:shadow-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl md:hidden overflow-hidden flex flex-col items-center justify-center"
          >
             <div className="w-full max-w-sm px-6 space-y-6 text-center">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-3xl font-heading text-text-primary hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8"
                >
                  <a
                    href={`tel:${CONTACT_PHONE}`}
                    className="inline-block px-8 py-4 bg-primary text-white text-lg font-body-medium rounded-full shadow-xl"
                  >
                    Call Now
                  </a>
                </motion.div>
             </div>

             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
             <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
