
import { MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sobre Mí</span>
        </h2>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-lg mb-6 leading-relaxed text-muted-foreground max-w-2xl">
              Soy un desarrollador apasionado con experiencia en tecnologías modernas. Me encanta resolver problemas complejos y crear aplicaciones que mejoran la experiencia del usuario de forma clara y poderosa.
            </p>
            <p className="text-lg mb-6 leading-relaxed text-muted-foreground max-w-2xl">
              Fuera del código, disfruto explorar nuevas tendencias tecnológicas, contribuir a proyectos open source y ayudar a otros desarrolladores a crecer.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>Disponible para nuevos proyectos</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/20 blur opacity-30" />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
              alt="Workspace moderno" 
              loading="lazy"
              decoding="async"
              className="relative h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


