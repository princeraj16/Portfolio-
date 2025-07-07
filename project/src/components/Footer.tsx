import React from 'react';
import { Heart, Github, Linkedin, Mail, MessageCircle, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/princeraj-sharma/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: '#',
      color: 'hover:text-gray-800'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/916367063091',
      color: 'hover:text-green-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '#',
      color: 'hover:text-pink-600'
    },
    {
      icon: Mail,
      name: 'Gmail',
      url: 'mailto:princerajsharma857@gmail.com',
      color: 'hover:text-red-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: '#',
      color: 'hover:text-blue-700'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      url: '#',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <footer className="bg-pale-sage py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-earthy-brown">
              Prince Raj Sharma
            </h3>
            <p className="text-gray-700 leading-relaxed">
              DevOps & Data Science Explorer passionate about automating ideas and powering insights through technology.
            </p>
            <p className="text-gray-600 italic">
              "Automating Ideas with DevOps, Powering Insights with Data Science."
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Me', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-700 hover:text-earthy-brown transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold text-gray-800">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Email:</span>{' '}
                <a 
                  href="mailto:princerajsharma857@gmail.com"
                  className="text-earthy-brown hover:underline"
                >
                  princerajsharma857@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span>{' '}
                <a 
                  href="tel:+916367063091"
                  className="text-earthy-brown hover:underline"
                >
                  +91-6367063091
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Location:</span> Jaipur, India 🇮🇳
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-earthy-brown/20 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-serif font-semibold text-gray-800 mb-4">Connect With Me</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/80 shadow-lg`}
                  title={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-earthy-brown/20 pt-6">
          <div className="text-center space-y-2">
            <p className="text-gray-700 flex items-center justify-center gap-2">
              Crafted with <Heart className="text-red-500" size={16} fill="currentColor" /> by Prince Raj Sharma
            </p>
            <p className="text-gray-600 text-sm">
              © {currentYear} Prince Raj Sharma. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="mt-8 text-center">
          <svg 
            className="mx-auto opacity-20" 
            width="200" 
            height="20" 
            viewBox="0 0 200 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M0 10C50 0 50 20 100 10C150 0 150 20 200 10" 
              stroke="#D4A373" 
              strokeWidth="2" 
              fill="none"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;