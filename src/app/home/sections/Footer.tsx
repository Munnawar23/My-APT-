'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      content: '8209760788',
      link: 'tel:8209760788',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'myapt.office@gmail.com',
      link: 'mailto:myapt.office@gmail.com',
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'Prabhat Nagar Sec 5, Udaipur',
      link: '#',
    },
  ];

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Testimonials', href: '#testimonials' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Accessibility Statement', href: '#' },
    ],
  };

  return (
    <footer id="contact" className="bg-linear-to-br from-text-primary to-text-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Contact Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-body-medium rounded-full text-sm mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
            Contact Us
          </h2>
          <p className="text-xl font-body text-white/80 max-w-3xl mx-auto">
            Ready to transform your society? Get in touch with us today and let's discuss how we can help.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <p className="font-body-medium text-white/70 text-sm mb-2">
                {info.title}
              </p>
              <p className="font-heading text-white text-lg">
                {info.content}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-12" />

        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Image
                src="/assets/images/logo.webp"
                alt="My Apt Logo"
                width={150}
                height={50}
                className="h-12 w-auto brightness-0 invert mb-4"
              />
              <p className="font-body text-white/80 leading-relaxed max-w-md">
                Your Society Management Partner. Technology with human intervention—transforming apartments into professionally managed living ecosystems.
              </p>
            </motion.div>

            <div className="space-y-3">
              <p className="font-body-medium text-white">
                "आओ चलें भारत की ओर"
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  📱
                </motion.a>
                <motion.a
                  href="mailto:myapt.office@gmail.com"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✉️
                </motion.a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-heading text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-white/10"
        >
          <p className="font-body text-white/60 text-sm text-center">
            © {currentYear} by My Apt. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
