# 🚀 Portafolio Personal - Oswaldo Castañeda

> Desarrollador Full Stack apasionado por crear soluciones innovadoras que transforman ideas en realidad digital

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://tu-portfolio-url.com)
[![GitHub](https://img.shields.io/badge/GitHub-OzCastaneda-blue)](https://github.com/OzCastaneda)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/oswaldo-casta%C3%B1eda-jobprofile1/)

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Secciones](#-secciones)
- [Componentes](#-componentes)
- [Contribuir](#-contribuir)
- [Contacto](#-contacto)
- [Licencia](#-licencia)

## 🎯 Descripción

Portafolio web personal desarrollado con React y tecnologías modernas, diseñado para mostrar mis habilidades, proyectos y experiencia como desarrollador Full Stack. El sitio presenta un diseño responsive, animaciones suaves y una interfaz de usuario intuitiva.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con gradientes y animaciones
- 📱 **Responsive Design**: Optimizado para dispositivos móviles, tablets y desktop
- 🌓 **Tema Personalizado**: Colores y tipografías cuidadosamente seleccionadas
- 📄 **Gestión de CV**: Carga y descarga de currículum integrada
- 🔗 **Enlaces Sociales**: Conecta directamente con GitHub, LinkedIn, Email y WhatsApp
- ⚡ **Rendimiento Optimizado**: Carga rápida y navegación fluida
- 🎭 **Animaciones**: Transiciones suaves y efectos visuales atractivos

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 18** - Biblioteca principal de JavaScript
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Biblioteca de iconos moderna
- **Vite** - Herramienta de construcción y desarrollo

### Librerías y Componentes

- **shadcn/ui** - Componentes de UI reutilizables
- **React Hooks** - useState, useRef para manejo de estado
- **CSS Modules** - Estilos modulares y organizados

### Herramientas de Desarrollo

- **ESLint** - Linter para mantener código limpio
- **Prettier** - Formateador de código
- **Git** - Control de versiones

### Deployment

- **Vercel/Netlify** - Hosting y deployment automatizado

## 📁 Estructura del Proyecto

```plaintext
Oz-NewPortafolio/
├── public/
│   ├── assets/
│   │   ├── profilephoto.jpeg    # Foto de perfil (optimizada)
│   │   ├── placeholder.svg      # Placeholders
│   │   └── robots.txt           # SEO robots
├── src/
│   ├── components/
│   │   ├── ui/                  # Componentes base de shadcn/ui
│   │   ├── AboutSection.tsx     # Sección "Acerca de mí"
│   │   ├── BlogSection.tsx      # Sección de blog/artículos
│   │   ├── ContactSection.tsx   # Formulario de contacto
│   │   ├── ExperienceSection.tsx # Experiencia laboral
│   │   ├── Footer.tsx           # Pie de página
│   │   ├── HeroSection.tsx      # Sección principal/hero
│   │   ├── Navigation.tsx       # Barra de navegación
│   │   ├── ProjectsSection.tsx  # Portafolio de proyectos
│   │   └── SkillsSection.tsx    # Habilidades técnicas
│   ├── hooks/                   # Custom hooks
│   ├── lib/
│   │   └── utils.ts            # Utilidades y helpers
│   ├── pages/
│   │   ├── Index.tsx           # Página principal 
│   │   └── NotFound.tsx        # Página 404
│   ├── App.css                 # Estilos globales
│   ├── App.tsx                 # Componente raíz
│   └── main.tsx               # Punto de entrada
├── .gitignore                  # Archivos ignorados por Git
├── package.json               # Dependencias y scripts
├── tailwind.config.ts         # Configuración de Tailwind
├── tsconfig.json             # Configuración de TypeScript
├── vite.config.ts            # Configuración de Vite
└── README.md                 # Este archivo
```

## 🚀 Instalación

### Prerrequisitos

- Node.js (v18 o superior) o Bun
- Git

### Pasos de instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/OzCastaneda/Oz-NewPortafolio.git
   cd Oz-NewPortafolio
   ```

2. **Instalar dependencias**

   ```bash
   # Con Bun (recomendado)
   bun install
   
   # O con npm
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   # Con Bun
   bun run dev
   
   # O con npm
   npm run dev
   ```

4. **Abrir en el navegador**

   ```
   http://localhost:5173
   ```

## 🎮 Uso

### Scripts disponibles

```bash
# Desarrollo
bun run dev          # Inicia servidor de desarrollo
bun run build        # Construye para producción
bun run preview      # Vista previa de build de producción
bun run lint         # Ejecuta ESLint

# Con npm
npm run dev
npm run build
npm run preview
npm run lint
```

### Personalización

1. **Información personal**: Edita los datos en `HeroSection.tsx`
2. **Enlaces sociales**: Actualiza el objeto `socialLinks` con tus URLs
3. **Proyectos**: Modifica `ProjectsSection.tsx` con tus proyectos
4. **Habilidades**: Actualiza `SkillsSection.tsx` con tus tecnologías
5. **Experiencia**: Edita `ExperienceSection.tsx` con tu trayectoria

## 📑 Secciones

### 🏠 Hero Section

- Presentación principal con foto de perfil
- Botones de llamada a la acción
- Enlaces a redes sociales
- Funcionalidad de carga/descarga de CV

### 👨‍💻 About Section

- Información personal y profesional
- Historia y motivaciones
- Objetivos y visión

### 💼 Experience Section

- Trayectoria laboral
- Roles y responsabilidades
- Logros destacados

### 🛠️ Skills Section

- Habilidades técnicas
- Niveles de competencia
- Tecnologías y herramientas

### 🚀 Projects Section

- Portafolio de proyectos
- Descripción y tecnologías utilizadas
- Enlaces a demos y código fuente

### 📝 Blog Section

- Artículos y publicaciones
- Insights técnicos
- Experiencias compartidas

### 📞 Contact Section

- Formulario de contacto
- Información de contacto
- Ubicación

## 🧩 Componentes

### Componentes Principales

- **HeroSection**: Sección de presentación con funcionalidad de CV
- **Navigation**: Barra de navegación responsive
- **ProjectsSection**: Galería de proyectos con filtros
- **ContactSection**: Formulario de contacto funcional

### Componentes UI (shadcn/ui)

- Button: Botones estilizados y variants
- Input: Campos de formulario
- Card: Tarjetas de contenido
- Badge: Etiquetas y tags

## 🌐 Deployment

### Vercel (Recomendado)

1. **Conectar repositorio a Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Conectar repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

2. **Deployment automático**
   - Se despliega automáticamente en cada push a `main`
   - Variables de entorno se configuran en settings de Vercel

3. **URL del sitio**
   ```
   https://tu-proyecto.vercel.app
   ```

### Build para producción

```bash
# Crear build optimizado
bun run build

# Vista previa del build
bun run preview
```

## 📋 Cambios Recientes

- ✅ Optimización de assets (profilephoto.jpeg)
- ✅ Configuración de Git safety para repositorio
- ✅ Actualización de dependencias
- ✅ Mejora en HeroSection

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**Oswaldo Castañeda** - Desarrollador Full Stack

- 🌐 **Portfolio**: [tu-portfolio-url.com](https://tu-portfolio-url.com)
- 💼 **LinkedIn**: [oswaldo-castañeda](https://www.linkedin.com/in/oswaldo-casta%C3%B1eda-jobprofile1/)
- 🐱 **GitHub**: [@OzCastaneda](https://github.com/OzCastaneda)
- 📧 **Email**: [angelusignis777@gmail.com](mailto:angelusignis777@gmail.com)
- 📱 **WhatsApp**: [+57 322 835 2645](https://wa.me/573228352645)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **shadcn/ui** por los componentes de UI
- **Lucide** por los iconos
- **Tailwind CSS** por el framework de estilos
- **Vercel** por el hosting gratuito
- **React Community** por el ecosistema y documentación

---

### ⭐ Si te gusta este proyecto, no olvides darle una estrella ⭐

Hecho con ❤️ por [Oswaldo Castañeda](https://github.com/OzCastaneda)
