'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_LINKS, COMPANY_TAGLINE, COMPANY_DESCRIPTION } from '@/constants';


const Footer = () => {

  return (
    <footer id="contact" className="bg-background text-text-primary relative overflow-hidden pt-24 pb-12">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-body-medium rounded-full text-sm mb-6">
                    Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight mb-6 leading-[1.1]">
                    Ready to transform <br />
                    <span className="text-text-secondary">your society?</span>
                </h2>
                <div className="flex gap-4 flex-wrap">
                    <a href="mailto:myapt.office@gmail.com" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-body-medium hover:bg-accent transition-colors shadow-lg">
                        Let's Talk
                    </a>
                </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
                {CONTACT_INFO.map((info, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        className="p-6 rounded-2xl bg-background-secondary border border-border hover:bg-white transition-colors shadow-sm hover:shadow-md"
                    >
                        <div className="text-3xl mb-4">{info.icon}</div>
                        <h3 className="text-text-secondary text-sm font-body-medium uppercase tracking-wider mb-1">{info.title}</h3>
                        <p className="text-lg font-heading">{info.content}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className="w-full h-px bg-border mb-16" />

        <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
                 <Image
                    src="/logo.webp"
                    alt="My Apt Logo"
                    width={150}
                    height={50}
                    className="h-10 w-auto mb-6"
                  />
                  <p className="text-text-secondary max-w-sm leading-relaxed mb-6">
                    {COMPANY_DESCRIPTION}
                  </p>
                  <p className="text-lg font-heading text-text-primary mb-6">"{COMPANY_TAGLINE}"</p>
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                      >
                        {social.icon === 'instagram' ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        ) : (
                          <span className="text-lg">{social.icon}</span>
                        )}
                      </a>
                    ))}
                  </div>
            </div>

            <div>
                <h3 className="font-heading text-lg mb-6">Company</h3>
                <ul className="space-y-4">
                  {FOOTER_LINKS.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-text-secondary hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>

             <div>
                <h3 className="font-heading text-lg mb-6">Legal</h3>
                <ul className="space-y-4">
                  {FOOTER_LINKS.legal.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-text-secondary hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary">
            <p>© 2025 My Apt. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
