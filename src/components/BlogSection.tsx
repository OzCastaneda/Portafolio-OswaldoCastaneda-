
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: "post-1",
    title: "Construyendo interfaces limpias con Tailwind CSS",
    description: "Cómo estructurar componentes reutilizables y mantener coherencia visual en tus proyectos.",
    image: "https://images.unsplash.com/photo-1581092334107-6eda7c0d9d1a?auto=format&fit=crop&w=800&q=80",
    readingTime: "5 min de lectura",
    href: "#",
  },
  {
    id: "post-2",
    title: "Optimización de rendimiento en React",
    description: "Estrategias para mejorar el tiempo de carga y reducir repaints en aplicaciones modernas.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1e?auto=format&fit=crop&w=800&q=80",
    readingTime: "6 min de lectura",
    href: "#",
  },
  {
    id: "post-3",
    title: "Buenas prácticas para portafolios técnicos",
    description: "Consejos para mostrar proyectos, experiencia y habilidades con claridad y profesionalismo.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    readingTime: "4 min de lectura",
    href: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Blog & Artículos</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Card className="overflow-hidden rounded-3xl border border-primary/20 bg-card transition hover:-translate-y-1 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-primary font-orbitron text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between gap-4 p-6 pt-0 text-sm text-muted-foreground">
                  <span>{post.readingTime}</span>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary/10" asChild>
                    <a href={post.href}>Leer más</a>
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
