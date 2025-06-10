
import React from 'react';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary font-orbitron">OZ.DEV</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-primary transition-colors font-medium">Inicio</a>
            <a href="#sobre-mi" className="hover:text-primary transition-colors font-medium">Sobre Mí</a>
            <a href="#proyectos" className="hover:text-primary transition-colors font-medium">Proyectos</a>
            <a href="#habilidades" className="hover:text-primary transition-colors font-medium">Habilidades</a>
            <a href="#experiencia" className="hover:text-primary transition-colors font-medium">Experiencia</a>
            <a href="#blog" className="hover:text-primary transition-colors font-medium">Blog</a>
            <a href="#contacto" className="hover:text-primary transition-colors font-medium">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
