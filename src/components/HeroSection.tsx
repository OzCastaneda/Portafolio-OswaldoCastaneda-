import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";

const HeroSection = () => {
  // Configuración de enlaces sociales
  const socialLinks = {
    github: "https://github.com/OzCastaneda", 
    linkedin: "https://www.linkedin.com/in/oswaldo-castañeda-jobprofile1", // ✅ Corregido: agregado https://
    email: "angelusignis777@gmail.com",
    whatsapp: "+573228352645"
  };

  // Función para abrir enlaces sociales
  const handleSocialClick = (platform) => {
    switch (platform) {
      case 'github':
        window.open(socialLinks.github, '_blank');
        break;
      case 'linkedin':
        window.open(socialLinks.linkedin, '_blank');
        break;
      case 'email':
        window.open(`mailto:${socialLinks.email}`, '_blank');
        break;
      case 'whatsapp': {
        const message = encodeURIComponent("¡Hola! Me interesa contactarte para hablar sobre oportunidades laborales.");
        window.open(`https://wa.me/${socialLinks.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
        break;
      }
      default:
        break;
    }
  };

  // ✅ Función simplificada para descargar CV
  const handleDownloadCV = () => {
    // Aquí puedes poner la ruta de tu CV real
    const cvUrl = "/assets/CV_Oswaldo_Castaneda.pdf"; // Cambia esta ruta por la de tu CV
    
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Oswaldo_Castaneda.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="inicio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
              Hola, soy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Oswaldo Castañeda</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones innovadoras que transforman ideas en realidad digital
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Ver Proyectos
              </Button>
              
              {/* ✅ Botón simplificado solo para descargar */}
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleDownloadCV}
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <div 
                onClick={() => handleSocialClick('github')}
                className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                title="GitHub"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <div 
                onClick={() => handleSocialClick('linkedin')}
                className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              </div>
              
              <div 
                onClick={() => handleSocialClick('email')}
                className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                title="Email"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-red-500 transition-colors" />
              </div>
              
              <div 
                onClick={() => handleSocialClick('whatsapp')}
                className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-6 h-6 text-muted-foreground group-hover:text-green-500 transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-20 animate-pulse"></div>
              <img 
                src="/assets/profilephoto.png"
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
// This HeroSection component is designed to be a visually appealing introduction to a personal portfolio.
// It features a bold headline, a brief description, call-to-action buttons, and social media icons.  
// The layout is responsive, adapting to different screen sizes with a two-column grid on larger screens.
// The background gradient and image effects add a modern touch, while the use of utility classes ensures a clean and consistent design.  
// The component is structured to be easily customizable, allowing for quick updates to text, images, and styles as needed.
// The use of Tailwind CSS classes provides a flexible and efficient way to style the component, ensuring it looks great across all devices.  


