import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";

const socialLinks = {
  github: "https://github.com/OzCastaneda",
  linkedin: "https://www.linkedin.com/in/oswaldo-castañeda-jobprofile1",
  email: "angelusignis777@gmail.com",
  whatsapp: "+573228352645",
};

const HeroSection = () => {
  const handleSocialClick = (platform: keyof typeof socialLinks) => {
    const urlMap = {
      github: socialLinks.github,
      linkedin: socialLinks.linkedin,
      email: `mailto:${socialLinks.email}`,
      whatsapp: `https://wa.me/${socialLinks.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        "¡Hola! Me interesa contactarte para hablar sobre oportunidades laborales."
      )}`,
    };

    window.open(urlMap[platform], "_blank", "noopener,noreferrer");
  };

  const handleDownloadCV = () => {
    const cvUrl = "/assets/CV_Oswaldo_Castaneda.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Oswaldo_Castaneda.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="inicio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-primary">Desarrollo web moderno</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron leading-tight">
              Hola, soy <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Oswaldo Castañeda</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Desarrollador Full Stack que crea experiencias digitales limpias, rápidas y accesibles con React, TypeScript y diseño centrado en el usuario.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" asChild>
                <a href="#proyectos">Ver Proyectos</a>
              </Button>

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

            <div className="flex flex-wrap gap-4">
              {(
                [
                  { label: "GitHub", icon: Github, action: () => handleSocialClick("github"), color: "text-primary" },
                  { label: "LinkedIn", icon: Linkedin, action: () => handleSocialClick("linkedin"), color: "text-blue-500" },
                  { label: "Email", icon: Mail, action: () => handleSocialClick("email"), color: "text-red-500" },
                  { label: "WhatsApp", icon: MessageCircle, action: () => handleSocialClick("whatsapp"), color: "text-emerald-500" },
                ] as const
              ).map(({ label, icon: Icon, action, color }) => (
                <button
                  key={label}
                  type="button"
                  onClick={action}
                  aria-label={label}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-primary"
                >
                  <Icon className={`w-5 h-5 ${color} transition-colors group-hover:text-primary`} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-3xl opacity-20 animate-pulse" />
              <img
                src="/assets/profilephoto.jpeg"
                alt="Oswaldo Castañeda"
                loading="lazy"
                decoding="async"
                className="relative mx-auto h-80 w-80 rounded-full border-4 border-primary/30 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


