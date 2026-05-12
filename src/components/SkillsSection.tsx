
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const frontendSkills = ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"];
const backendSkills = ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"];
const toolSkills = ["Git", "Docker", "AWS", "Figma", "VSCode"];

const SkillsSection = () => {
  return (
    <section id="habilidades" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 font-orbitron">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Habilidades Técnicas</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-card border border-primary/20 transition hover:border-primary/40">
            <CardHeader>
              <CardTitle className="text-primary font-orbitron">Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge key={skill} className="cursor-default bg-primary/15 text-primary transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-primary/20 transition hover:border-primary/40">
            <CardHeader>
              <CardTitle className="text-accent font-orbitron">Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge key={skill} className="cursor-default bg-accent/15 text-accent transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border border-primary/20 transition hover:border-primary/40">
            <CardHeader>
              <CardTitle className="text-primary font-orbitron">Herramientas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {toolSkills.map((skill) => (
                  <Badge key={skill} className="cursor-default bg-primary/15 text-primary transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
