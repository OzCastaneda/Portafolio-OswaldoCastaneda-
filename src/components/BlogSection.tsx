
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  return (
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
  );
};

export default BlogSection;
