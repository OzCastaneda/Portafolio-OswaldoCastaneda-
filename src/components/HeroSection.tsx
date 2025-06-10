
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
              Hola, soy <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Oz</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras que transforman ideas en realidad digital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Ver Proyectos
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Descargar CV
              </Button>
            </div>
            <div className="flex space-x-4">
              <Github className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
              <Linkedin className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
              <Mail className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-20 animate-pulse"></div>
              <img 
                src="/lovable-uploads/19a6fe95-74f8-4bb3-b533-b8078933bc41.png"
                alt="Oz - Desarrollador Full Stack"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
