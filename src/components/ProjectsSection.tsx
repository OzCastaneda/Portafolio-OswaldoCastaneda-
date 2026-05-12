
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "To Do List",
    description:
      "Aplicación web de lista de tareas con persistencia en localStorage, modo oscuro, filtros por estado y prioridad, edición inline y diseño responsivo accesible.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://to-do-list-two-sigma-84.vercel.app/",
    code: "https://github.com/OzCastaneda/TO-DO-LIST",
  },
  {
    id: 2,
    title: "Portafolio Personal",
    description:
      "Portafolio web interactivo construido con React, TypeScript y Tailwind CSS, con diseño moderno y componentes reutilizables.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    demo: "https://portafolio-oswaldo-castaneda.vercel.app/",
    code: "https://github.com/OzCastaneda/Portafolio-OswaldoCastaneda-",
  },
  {
    id: 3,
    title: "Sistema de Gestión",
    description:
      "Plataforma para administración de tareas y proyectos con autenticación de usuarios, roles y panel de control dinámico.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "React", "MongoDB"],
    demo: "#",
    code: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mis Proyectos</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const hasDemo = project.demo && project.demo !== "#";
            const hasCode = project.code && project.code !== "#";

            return (
              <Card key={project.id} className="group overflow-hidden rounded-3xl bg-card border border-primary/20 transition hover:-translate-y-1 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-primary font-orbitron text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5 p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="bg-primary/15 text-primary" variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {hasDemo ? (
                      <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 sm:w-auto" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2 inline" /> Demo
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" disabled className="w-full opacity-60 sm:w-auto">
                        Próximamente
                      </Button>
                    )}

                    {hasCode ? (
                      <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10 sm:w-auto" asChild>
                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2 inline" /> Código
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" disabled className="w-full opacity-60 sm:w-auto">
                        Código no disponible
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
