
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">Oz Portafolio</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
              <a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a>
              <a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a>
              <a href="#habilidades" className="hover:text-primary transition-colors">Habilidades</a>
              <a href="#experiencia" className="hover:text-primary transition-colors">Experiencia</a>
              <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
              <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Oz" />
            <AvatarFallback>OZ</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hola, soy <span className="text-primary">Oz</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Desarrollador Full Stack apasionado por crear soluciones innovadoras
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Button size="lg">Ver Proyectos</Button>
            <Button variant="outline" size="lg">Descargar CV</Button>
          </div>
          <div className="flex justify-center space-x-4">
            <Github className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <Mail className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
      </section>

      {/* Sobre Mí */}
      <section id="sobre-mi" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Soy un desarrollador apasionado con experiencia en tecnologías modernas. 
                Me encanta resolver problemas complejos y crear aplicaciones que mejoren 
                la vida de las personas.
              </p>
              <p className="text-lg mb-6">
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
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Workspace"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={`https://images.unsplash.com/photo-${project === 1 ? '1461749280684-dccba630e2f6' : project === 2 ? '1488590528505-98d2b5aba04b' : '1460925895917-afdab827c52f'}`}
                    alt={`Proyecto ${project}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <CardTitle>Proyecto {project}</CardTitle>
                  <CardDescription>
                    Descripción breve del proyecto y las tecnologías utilizadas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button variant="outline" size="sm">
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
      <section id="habilidades" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB'].map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Herramientas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'AWS', 'Figma', 'VSCode'].map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
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
          <h2 className="text-3xl font-bold text-center mb-12">Experiencia Laboral</h2>
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
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="text-lg">{job.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Blog & Artículos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((article) => (
              <Card key={article} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <img 
                    src={`https://images.unsplash.com/photo-${article === 1 ? '1581091226825-a6a2a5aee158' : article === 2 ? '1649972904349-6e44c42644a7' : '1486312338219-ce68d2c6f44d'}`}
                    alt={`Artículo ${article}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <CardTitle>Título del Artículo {article}</CardTitle>
                  <CardDescription>
                    Breve descripción del artículo y los temas que cubre
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">5 min de lectura</span>
                    <Button variant="ghost" size="sm">Leer más</Button>
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
          <h2 className="text-3xl font-bold mb-12">¡Hablemos!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
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
          <Button size="lg">Enviar Mensaje</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Oz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
