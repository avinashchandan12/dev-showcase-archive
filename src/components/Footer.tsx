
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import WaveSVG from './svg/WaveSVG';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950 relative overflow-hidden">
      <WaveSVG className="absolute top-0 left-0 w-full h-32 text-background flip" />
      
      <div className="container max-w-6xl mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-gradient">Avinash Chandan</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/avinashchandan12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/avinashchandan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:avinashchandan12@gmail.com"
              className="p-3 rounded-full hover:bg-accent/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Avinash Chandan. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
