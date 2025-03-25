import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import ScrollReveal from './ui/ScrollReveal';
import WebDevSVG from './svg/WebDevSVG';
import BackendSVG from './svg/BackendSVG';
import CloudSVG from './svg/CloudSVG';
import DevOpsSVG from './svg/DevOpsSVG';
import WaveSVG from './svg/WaveSVG';

interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [{
  name: "Languages",
  skills: ["Python", "JavaScript", "TypeScript", "Kotlin"],
  icon: <WebDevSVG className="w-12 h-12 svg-icon" />
}, {
  name: "Frameworks",
  skills: ["Django", "Node.js", "Angular", "Jetpack Compose"],
  icon: <BackendSVG className="w-12 h-12 svg-icon" />
}, {
  name: "Databases",
  skills: ["PostgreSQL", "Firebase", "MongoDB"],
  icon: <CloudSVG className="w-12 h-12 svg-icon" />
}, {
  name: "DevOps",
  skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"],
  icon: <DevOpsSVG className="w-12 h-12 svg-icon" />
}, {
  name: "AI & ML",
  skills: ["LLMs", "TensorFlow", "PyTorch", "Hugging Face", "OpenAI API"],
  icon: <WebDevSVG className="w-12 h-12 svg-icon" />
}, {
  name: "Tools",
  skills: ["Git", "GitHub", "GitLab", "Ansible", "Grafana", "Kibana"],
  icon: <CloudSVG className="w-12 h-12 svg-icon" />
}, {
  name: "Operating Systems",
  skills: ["Linux", "MacOS", "Windows"],
  icon: <CloudSVG className="w-12 h-12 svg-icon" />
}];

const Skills = () => {
  return <section id="skills" className="py-20 relative overflow-hidden">
      <WaveSVG className="absolute top-0 left-0 w-full h-32 text-accent flip" />
      <WaveSVG className="absolute bottom-0 left-0 w-full h-32 text-primary" />
      
      <div className="section-container">
        <ScrollReveal>
          <p className="text-accent font-medium mb-4 text-center">Skills</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="heading text-center mb-16">
            <AnimatedText text="Technical Expertise" className="inline-block" />
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => <ScrollReveal key={category.name} delay={0.2 + index * 0.1} direction="up">
              <div className="glass hover-scale p-6 rounded-xl h-full bg-violet-950">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="font-semibold text-xl ml-3">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map(skill => <li key={skill} className="flex items-center text-muted-foreground">
                      <CheckCircle className="mr-2 h-4 w-4 text-accent flex-shrink-0" />
                      <span>{skill}</span>
                    </li>)}
                </ul>
              </div>
            </ScrollReveal>)}
        </div>
      </div>
    </section>;
};

export default Skills;
