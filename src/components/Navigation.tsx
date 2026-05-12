
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary font-orbitron">OZ.DEV</h1>
            <span className="hidden text-sm text-muted-foreground md:inline">Full Stack Developer</span>
          </div>

          <button
            type="button"
            className="md:hidden rounded-xl border border-border bg-card p-3 text-primary transition hover:border-primary hover:text-primary"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div
            className={`${
              menuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-2 opacity-0 invisible"
            } absolute inset-x-4 top-full mt-2 rounded-3xl border border-border bg-card/95 p-6 shadow-2xl backdrop-blur-xl transition duration-300 md:static md:visible md:translate-y-0 md:opacity-100 md:border-none md:bg-transparent md:p-0 md:shadow-none`}
          >
            <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-base font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
