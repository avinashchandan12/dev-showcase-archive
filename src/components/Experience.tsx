
import React from 'react';
import AnimatedText from './ui/AnimatedText';
import ScrollReveal from './ui/ScrollReveal';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "Sankey Business Solutions",
    period: "June 2023 - Present",
    location: "Thane, Maharashtra",
    description: [
      "Worked as a backend engineer on Django, Docker, Kubernetes for a fortune 500 company project (automobile) ensuring optimization and smooth deployment of the features using Jenkins, Grafana, ECR.",
      "Interacted closely with a USA based client on building their e-commerce platform using Node.js, Angular, Postgres and established CI/CD pipelines automating the software delivery process from development to production.",
      "Developed an Android application using Kotlin and Jetpack Compose for my organization level 21 days challenge activity.",
      "Made proposals for clients and system architecture for the upcoming potential projects and presented them to technical and non-technical clients.",
      "2 times hackathon winner where we made a VS Code extension which runs on Local LLMs and helps you as a co-programmer.",
      "Mentored junior engineers in backend, git best practices, facilitating knowledge transfer and team growth."
    ]
  }
];

const Education = () => (
  <div className="space-y-6">
    <div className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg">B.E. Computer Science</h3>
      <p className="text-muted-foreground">ViMEET (Mumbai University)</p>
      <p className="text-sm text-muted-foreground">2023</p>
    </div>
    <div className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all">
      <h3 className="font-semibold text-lg">HSC</h3>
      <p className="text-muted-foreground">Jawahar Navodaya Vidyalaya, Bihiya</p>
      <p className="text-sm text-muted-foreground">2019</p>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <ScrollReveal>
          <p className="text-primary font-medium mb-4 text-center">Experience</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="heading text-center mb-16">
            <AnimatedText 
              text="Work & Education"
              className="inline-block"
            />
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <ScrollReveal direction="right" className="lg:col-span-1">
            <h3 className="font-semibold text-2xl mb-6">Education</h3>
            <Education />
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="lg:col-span-2">
            <h3 className="font-semibold text-2xl mb-6">Work Experience</h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="glass dark:glass-dark p-6 rounded-xl hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-xl">{exp.title}</h4>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
