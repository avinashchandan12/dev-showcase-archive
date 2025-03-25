
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import ScrollReveal from './ui/ScrollReveal';
import CodeSVG from './svg/CodeSVG';
import WaveSVG from './svg/WaveSVG';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-noise opacity-[0.02] z-0 pointer-events-none"
        style={{ backgroundSize: '200px 200px' }}
      />
      
      {/* Background gradients */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-primary-gradient opacity-20 animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-8 h-8 rounded-full bg-accent-gradient opacity-20 animate-bounce-gentle" />
      <div className="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-secondary-gradient opacity-10 animate-pulse-slow" />
      
      <WaveSVG className="absolute bottom-0 left-0 w-full h-32 text-primary" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <ScrollReveal delay={0.1}>
              <p className="text-accent font-medium mb-4">Full Stack Developer</p>
            </ScrollReveal>
            
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <AnimatedText 
                text="Avinash Chandan" 
                tag="span"
                className="block"
              />
              <AnimatedText 
                text="Software Engineer"
                tag="span" 
                className="text-gradient block"
                delay={0.3}
              />
            </h1>
            
            <ScrollReveal delay={0.6} direction="up">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                A logical interpreter and Full Stack Developer with expertise in Backend development,
                system design, and ensuring system reliability.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.8} direction="up">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="button-primary group">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#projects" className="button-secondary">
                  View my work
                </a>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={0.5} direction="left">
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-gradient rounded-full opacity-10 blur-xl animate-pulse-slow"></div>
                <CodeSVG className="w-80 h-80 svg-icon animate-float" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
