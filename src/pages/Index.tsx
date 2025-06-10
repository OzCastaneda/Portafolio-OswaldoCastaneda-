
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
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

      {/* Sobre Mí */}
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

      {/* Proyectos */}
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

      {/* Habilidades */}
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

      {/* Experiencia */}
      <section id="experiencia" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experiencia Laboral</span>
          </h2>
          <div className="space-y-8">
            {[
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
            ].map((job, index) => (
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

      {/* Blog */}
      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog & Artículos</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((article) => (
              <Card key={article} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer bg-card border-primary/20 group">
                <CardHeader>
                  <div className="relative overflow-hidden rounded-md">
                    <img 
                      src={`https://images.unsplash.com/photo-${article === 1 ? '1581091226825-a6a2a5aee158' : article === 2 ? '1649972904349-6e44c42644a7' : '1486312338219-ce68d2c6f44d'}`}
                      alt={`Artículo ${article}`}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-primary font-orbitron">Título del Artículo {article}</CardTitle>
                  <CardDescription>
                    Breve descripción del artículo y los temas que cubre
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">5 min de lectura</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">Leer más</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
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
              <span>oz@ejemplo.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>+1 234 567 8900</span>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Enviar Mensaje
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="font-orbitron">&copy; 2024 Oz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
