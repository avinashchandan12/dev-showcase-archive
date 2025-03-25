
import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import ScrollReveal from './ui/ScrollReveal';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Kotlin"]
  },
  {
    name: "Frameworks",
    skills: ["Django", "Node.js", "Angular", "Jetpack Compose"]
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Firebase", "MongoDB"]
  },
  {
    name: "DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"]
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Ansible", "Grafana", "Kibana"]
  },
  {
    name: "Operating Systems",
    skills: ["Linux", "MacOS", "Windows"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-medium mb-4 text-center">Skills</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="heading text-center mb-16">
            <AnimatedText 
              text="Technical Expertise"
              className="inline-block"
            />
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.name} delay={0.2 + index * 0.1} direction="up">
              <div className="glass hover-scale p-6 rounded-xl h-full">
                <h3 className="font-semibold text-xl mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center text-muted-foreground">
                      <CheckCircle className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
