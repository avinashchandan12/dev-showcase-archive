
import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import ScrollReveal from './ui/ScrollReveal';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built for a USA-based client with robust backend systems and user-friendly interface.",
    technologies: ["Node.js", "Angular", "PostgreSQL", "CI/CD"],
    image: "gradient-1",
    github: "#"
  },
  {
    title: "VS Code Extension with LLMs",
    description: "A hackathon-winning VS Code extension that runs on Local LLMs and acts as a co-programmer.",
    technologies: ["TypeScript", "VS Code API", "LLM", "Machine Learning"],
    image: "gradient-2",
    github: "#"
  },
  {
    title: "Automobile Management System",
    description: "Backend system for a Fortune 500 company's automobile project with optimization and smooth deployment features.",
    technologies: ["Django", "Docker", "Kubernetes", "Jenkins", "Grafana"],
    image: "gradient-3",
    github: "#"
  },
  {
    title: "21-Day Challenge App",
    description: "An Android application developed for organizational-level challenge activities.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
    image: "gradient-4",
    github: "#"
  }
];

const gradients = {
  "gradient-1": "from-blue-500 to-purple-500",
  "gradient-2": "from-emerald-500 to-teal-500",
  "gradient-3": "from-orange-500 to-amber-500",
  "gradient-4": "from-pink-500 to-rose-500"
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-medium mb-4 text-center">Projects</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="heading text-center mb-16">
            <AnimatedText 
              text="Recent Work"
              className="inline-block"
            />
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={0.2 + index * 0.1} direction="up">
              <div className="glass hover-scale rounded-xl overflow-hidden h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${gradients[project.image as keyof typeof gradients]} flex items-center justify-center`}>
                  <h3 className="text-white font-bold text-2xl">{project.title.split(" ")[0]}</h3>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium link"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Source Code
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-medium link"
                      >
                        <ArrowUpRight className="mr-1 h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
