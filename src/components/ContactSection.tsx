
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">¡Hablemos!</span>
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y 
          ver cómo puedo ayudarte a hacerlo realidad.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-primary" />
            <span>angelusignis777@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-primary" />
            <span>+57 3228352645</span>
          </div>
        </div>
        <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
          Enviar Mensaje
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
