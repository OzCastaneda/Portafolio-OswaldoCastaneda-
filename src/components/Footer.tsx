
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground font-orbitron">
          &copy; {currentYear} Oz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
