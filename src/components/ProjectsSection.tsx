
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mis Proyectos</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project) => (
            <Card key={project} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-primary/20 group">
              <CardHeader>
                <div className="relative overflow-hidden rounded-md">
                  <img 
                    src={`https://images.unsplash.com/photo-${project === 1 ? '1461749280684-dccba630e2f6' : project === 2 ? '1488590528505-98d2b5aba04b' : '1460925895917-afdab827c52f'}`}
                    alt={`Proyecto ${project}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-primary font-orbitron">Proyecto {project}</CardTitle>
                <CardDescription>
                  Descripción breve del proyecto y las tecnologías utilizadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary">React</Badge>
                  <Badge variant="secondary" className="bg-accent/20 text-accent">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">Node.js</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary text-primary">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
