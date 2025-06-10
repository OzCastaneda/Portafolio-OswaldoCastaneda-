
import React from 'react';
import { MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sobre Mí</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              Soy un desarrollador apasionado con experiencia en tecnologías modernas. 
              Me encanta resolver problemas complejos y crear aplicaciones que mejoren 
              la vida de las personas.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              Cuando no estoy programando, me gusta leer sobre nuevas tecnologías, 
              contribuir a proyectos open source y compartir conocimiento con la comunidad.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Ciudad, País</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Disponible para nuevos proyectos</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
              alt="Workspace"
              className="relative rounded-lg shadow-2xl border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
