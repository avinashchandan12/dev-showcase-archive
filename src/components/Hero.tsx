
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import ScrollReveal from './ui/ScrollReveal';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-noise opacity-[0.02] z-0 pointer-events-none"
        style={{ backgroundSize: '200px 200px' }}
      />
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <ScrollReveal delay={0.1}>
            <p className="text-primary font-medium mb-4">Full Stack Developer</p>
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
              <a href="#contact" className="button-primary">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#projects" className="button-secondary">
                View my work
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Circle decorations */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
};

export default Hero;
