
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Desarrollador Full Stack Senior",
    company: "Tech Company",
    period: "2022 - Presente",
    description: "Desarrollo de aplicaciones web completas utilizando React, Node.js y arquitecturas escalables.",
  },
  {
    title: "Desarrollador Frontend",
    company: "Startup Innovadora",
    period: "2020 - 2022",
    description: "Creación de interfaces rápidas, accesibles y altamente responsivas con enfoque en la experiencia de usuario.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experiencia Laboral</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((job) => (
            <article key={job.title} className="group">
              <Card className="overflow-hidden rounded-3xl bg-card border border-primary/20 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl">
                <CardHeader className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-primary font-orbitron">{job.title}</CardTitle>
                      <CardDescription className="text-lg text-accent">{job.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="self-start border-primary text-primary">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="leading-relaxed text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
