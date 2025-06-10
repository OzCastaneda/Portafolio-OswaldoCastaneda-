
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Desarrollador Full Stack Senior",
      company: "Tech Company",
      period: "2022 - Presente",
      description: "Desarrollo de aplicaciones web completas utilizando React y Node.js"
    },
    {
      title: "Desarrollador Frontend",
      company: "Startup Innovadora",
      period: "2020 - 2022",
      description: "Creación de interfaces de usuario modernas y responsivas"
    }
  ];

  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experiencia Laboral</span>
        </h2>
        <div className="space-y-8">
          {experiences.map((job, index) => (
            <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-primary font-orbitron">{job.title}</CardTitle>
                    <CardDescription className="text-lg text-accent">{job.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary">{job.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{job.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
