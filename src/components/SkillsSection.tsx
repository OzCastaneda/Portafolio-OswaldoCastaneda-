
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Habilidades Técnicas</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-primary font-orbitron">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill) => (
                  <Badge key={skill} className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-accent font-orbitron">Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <Badge key={skill} className="bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-primary font-orbitron">Herramientas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'Figma', 'VSCode'].map((skill) => (
                  <Badge key={skill} className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
