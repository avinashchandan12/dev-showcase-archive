
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import ScrollReveal from './ui/ScrollReveal';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div 
        className="absolute inset-0 bg-noise opacity-[0.03] z-0 pointer-events-none"
        style={{ backgroundSize: '200px 200px' }}
      />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right">
            <div className="glass dark:glass-dark p-4 rounded-xl overflow-hidden">
              <div className="rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                <Avatar className="w-full h-full rounded-lg">
                  <AvatarImage 
                    src="/lovable-uploads/dcef6e04-6b54-485f-bbd7-aa116df1cbbc.png" 
                    alt="Avinash Chandan" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl bg-primary-gradient text-white">AC</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </ScrollReveal>
          
          <div>
            <ScrollReveal direction="left">
              <p className="text-primary font-medium mb-4">About Me</p>
            </ScrollReveal>
            
            <h2 className="font-bold text-3xl sm:text-4xl mb-6">
              <AnimatedText 
                text="Expertise in full stack development"
                delay={0.2}
              />
            </h2>
            
            <ScrollReveal delay={0.4} direction="up">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I specialize in full stack development with extensive expertise in backend 
                  technologies like Django, Node.js, and system design along with microservices 
                  architecture.
                </p>
                <p>
                  My skills extend to designing full-stack applications using NodeJS, Django, Angular 
                  and leveraging cloud platforms like AWS for deployment.
                </p>
                <p>
                  I've implemented CI/CD pipelines with Jenkins, GitLab, and GitHub, automating 
                  software delivery cycles and maintaining code quality.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.6} direction="up">
              <div className="mt-8 flex items-center space-x-4">
                <a 
                  href="https://github.com/avinashchandan12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background hover:bg-primary hover:text-white transition-colors dark:bg-gray-800"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/avinashchandan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background hover:bg-primary hover:text-white transition-colors dark:bg-gray-800"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:avinashchandan12@gmail.com"
                  className="p-3 rounded-full bg-background hover:bg-primary hover:text-white transition-colors dark:bg-gray-800"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
