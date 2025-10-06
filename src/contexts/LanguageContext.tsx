import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "pt" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

// TEXTO COMPLETO ORGANIZADO
const translations = {
  en: {
    // ===== NAVIGATION =====
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.technologies": "Technologies",
    "nav.contact": "Contact",

    // ===== HERO SECTION =====
    "hero.alt": "Cristian Alex",
    "hero.typing1": "Full Stack Developer",
    "hero.typing2": "Front-End Focused",
    "hero.typing3": "Experience Creator",
    "hero.description":
      "I'm a full stack developer passionate about creating creative and functional solutions, with a focus on front-end and interactive experiences.",
    "hero.button.projects": "View Projects",
    "hero.button.contact": "Get in Touch",

    // ===== ABOUT SECTION =====
    "about.title": "About Me",
    "about.description1":
      "Junior Full Stack Developer focused on Front-End. Student of Systems Analysis and Development (UTP). Experience with Python, JavaScript, React and PostgreSQL.",
    "about.description2":
      "Passionate about creating modern interfaces and interactive experiences that combine functionality with elegant design. I constantly seek to improve my skills and explore new technologies.",
    "about.description3":
      "My approach is focused on creating innovative solutions, with emphasis on code quality and end-user experience.",
    "about.highlights.fullstack": "Full Stack Development",
    "about.highlights.fullstackDesc":
      "Experience with frontend and backend technologies",
    "about.highlights.frontend": "Front-End Focus",
    "about.highlights.frontendDesc":
      "Specialization in modern and responsive interfaces",
    "about.highlights.interfaces": "Modern Interfaces",
    "about.highlights.interfacesDesc":
      "Creation of interactive and intuitive experiences",

    // ===== EDUCATION SECTION =====
    "education.title": "Academic Education",
    "education.degree": "Systems Analysis and Development",
    "education.institution": "Tuiuti University of Paraná",
    "education.location": "Curitiba, PR",
    "education.period": "2024 - 2026",
    "education.status": "In Progress",
    "education.description":
      "Higher education course focused on software development, systems analysis, databases, and agile methodologies.",

    // ===== PROJECTS SECTION =====
    "projects.title": "Projects",
    "projects.subtitle":
      "Get to know my featured project and see how I turn ideas into real solutions",
    "projects.routeSystem.title": "Route Management System",
    "projects.routeSystem.description":
      "Complete system for delivery logistics automation with modern interface and advanced route optimization features.",
    "projects.freelancer.title": "Freelancer Developer",
    "projects.freelancer.description":
      "Development of modern web applications with focus on user experience and performance.",
    "projects.visual.routeSystem": "Route System",
    "projects.visual.smartLogistics": "Smart Logistics",
    "projects.visual.webDeveloper": "Web Developer",
    "projects.visual.fullStack": "Full Stack Freelancer",
    "projects.technologies": "Technologies",
    "projects.features": "Features",
    "projects.features.automation": "Delivery logistics automation",
    "projects.features.deliveryDrivers": "Delivery drivers registration",
    "projects.features.routeOptimization": "Optimized route calculation",
    "projects.features.mapsIntegration": "Google Maps integration",
    "projects.features.webDevelopment": "Web application development",
    "projects.features.apiIntegration": "REST API creation and integration",
    "projects.features.databaseModeling": "Database modeling",
    "projects.features.reactiveInterfaces": "Reactive interfaces with React",
    "projects.viewDemo": "View Demo",
    "projects.viewCode": "Code",
    "projects.viewGitHub": "View on GitHub",
    "projects.moreProjects": "More projects in development...",

    // ===== TECHNOLOGIES SECTION =====
    "technologies.title": "Technologies & Tools",
    "technologies.subtitle":
      "Technologies I master to create complete and modern solutions",
    "technologies.categories.languages": "Languages",
    "technologies.categories.frameworks": "Frameworks & Libraries",
    "technologies.categories.databases": "Databases",
    "technologies.categories.tools": "Tools",
    "technologies.specialties.title": "Specialties",
    "technologies.specialties.backend": "Backend",
    "technologies.specialties.backendDesc": "Robust and scalable APIs",
    "technologies.specialties.frontend": "Frontend",
    "technologies.specialties.frontendDesc": "Modern and responsive interfaces",
    "technologies.specialties.mobileFirst": "Mobile First",
    "technologies.specialties.mobileFirstDesc":
      "Responsive design on all devices",

    // ===== BLOG SECTION =====
    "blog.title": "Blog & Articles",
    "blog.subtitle":
      "Sharing knowledge and experiences about web development and technology",
    "blog.post1.title":
      "How to create modern interfaces with React and TailwindCSS",
    "blog.post1.description":
      "Exploring best practices for developing responsive and accessible UIs.",
    "blog.post2.title": "Performance Optimization in React Applications",
    "blog.post2.description":
      "Advanced techniques to improve performance and user experience.",
    "blog.post3.title": "REST API Integration with Node.js and PostgreSQL",
    "blog.post3.description":
      "Complete guide to building robust and scalable APIs.",
    "blog.categories.frontend": "Frontend",
    "blog.categories.performance": "Performance",
    "blog.categories.backend": "Backend",
    "blog.status.comingSoon": "Coming Soon",
    "blog.readTime.short": "5 min",
    "blog.readTime.medium": "8 min",
    "blog.readTime.long": "12 min",
    "blog.readArticle": "Read Article",
    "blog.developmentMessage": "New articles in development...",
    "blog.viewAllArticles": "View All Articles",

    // ===== LANGUAGES SECTION =====
    "languages.title": "Languages",
    "languages.proficiency": "proficiency",
    "languages.portuguese.name": "Portuguese",
    "languages.portuguese.level": "Native",
    "languages.spanish.name": "Spanish",
    "languages.spanish.level": "C1 (Advanced)",
    "languages.english.name": "English",
    "languages.english.level": "A1 (Basic)",

    // ===== CONTACT SECTION =====
    "contact.title": "Let's Talk?",
    "contact.subtitle":
      "I'm always open to new opportunities and interesting projects. Get in touch and let's create something amazing together!",
    "contact.email.title": "Email",
    "contact.email.description": "For professional proposals",
    "contact.instagram.title": "Instagram",
    "contact.instagram.description": "Follow my work",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.value": "Cristian Leon",
    "contact.linkedin.description": "Connect with me",
    "contact.github.title": "GitHub",
    "contact.github.description": "See my projects",
    "contact.cta.title": "Ready to collaborate?",
    "contact.cta.description":
      "I have experience in diverse projects and I'm always looking for new challenges. Let's talk about your next project!",
    "contact.cta.button": "Send Email",

    // ===== FOOTER =====
    "footer.madeWith": "Made with",
    "footer.and": "and",
    "footer.by": "by Cristian Alex",
    "footer.rights": "All rights reserved.",
    "footer.techStack":
      "Built with React + TypeScript + TailwindCSS + Framer Motion",

    // ===== THEME & LANGUAGE SELECTOR =====
    "theme.light": "Light",
    "theme.dark": "Dark",
    "language.en": "English",
    "language.pt": "Portuguese",
    "language.es": "Spanish",
  },

  pt: {
    // ===== NAVIGATION =====
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.technologies": "Tecnologias",
    "nav.contact": "Contato",

    // ===== HERO SECTION =====
    "hero.alt": "Cristian Alex",
    "hero.typing1": "Desenvolvedor Full Stack",
    "hero.typing2": "Focado em Front-End",
    "hero.typing3": "Criador de Experiências",
    "hero.description":
      "Sou um desenvolvedor full stack apaixonado por criar soluções criativas e funcionais, com foco em front-end e experiências interativas.",
    "hero.button.projects": "Ver Projetos",
    "hero.button.contact": "Entrar em Contato",

    // ===== ABOUT SECTION =====
    "about.title": "Sobre Mim",
    "about.description1":
      "Desenvolvedor Full Stack Júnior focado em Front-End. Estudante de Análise e Desenvolvimento de Sistemas (UTP). Experiência com Python, JavaScript, React e PostgreSQL.",
    "about.description2":
      "Apaixonado por criar interfaces modernas e experiências interativas que combinam funcionalidade com design elegante. Busco constantemente aprimorar minhas habilidades e explorar novas tecnologias.",
    "about.description3":
      "Minha abordagem é voltada para a criação de soluções inovadoras, com foco na qualidade do código e na experiência do usuário final.",
    "about.highlights.fullstack": "Desenvolvimento Full Stack",
    "about.highlights.fullstackDesc":
      "Experiência com tecnologias frontend e backend",
    "about.highlights.frontend": "Foco em Front-End",
    "about.highlights.frontendDesc":
      "Especialização em interfaces modernas e responsivas",
    "about.highlights.interfaces": "Interfaces Modernas",
    "about.highlights.interfacesDesc":
      "Criação de experiências interativas e intuitivas",

    // ===== EDUCATION SECTION =====
    "education.title": "Formação Acadêmica",
    "education.degree": "Análise e Desenvolvimento de Sistemas",
    "education.institution": "Universidade Tuiuti do Paraná",
    "education.location": "Curitiba, PR",
    "education.period": "2024 - 2026",
    "education.status": "Em andamento",
    "education.description":
      "Curso superior focado em desenvolvimento de software, análise de sistemas, banco de dados e metodologias ágeis.",

    // ===== PROJECTS SECTION =====
    "projects.title": "Projetos",
    "projects.subtitle":
      "Conheça meu projeto destacado e veja como transformo ideias em soluções reais",
    "projects.routeSystem.title": "Sistema de Gerenciamento de Rotas",
    "projects.routeSystem.description":
      "Sistema completo para automação de logística de entregas com interface moderna e funcionalidades avançadas de otimização de rotas.",
    "projects.freelancer.title": "Desenvolvedor Freelancer",
    "projects.freelancer.description":
      "Desenvolvimento de aplicações web modernas com foco em experiência do usuário e performance.",
    "projects.visual.routeSystem": "Sistema de Rotas",
    "projects.visual.smartLogistics": "Logística Inteligente",
    "projects.visual.webDeveloper": "Desenvolvedor Web",
    "projects.visual.fullStack": "Freelancer Full Stack",
    "projects.technologies": "Tecnologias",
    "projects.features": "Funcionalidades",
    "projects.features.automation": "Automação de logística de entregas",
    "projects.features.deliveryDrivers": "Cadastro de entregadores",
    "projects.features.routeOptimization": "Cálculo de rotas otimizadas",
    "projects.features.mapsIntegration": "Integração com Google Maps",
    "projects.features.webDevelopment": "Desenvolvimento de aplicações web",
    "projects.features.apiIntegration": "Criação e integração de APIs REST",
    "projects.features.databaseModeling": "Modelagem de banco de dados",
    "projects.features.reactiveInterfaces": "Interfaces reativas com React",
    "projects.viewDemo": "Ver Demo",
    "projects.viewCode": "Código",
    "projects.viewGitHub": "Ver no GitHub",
    "projects.moreProjects": "Mais projetos em desenvolvimento...",

    // ===== TECHNOLOGIES SECTION =====
    "technologies.title": "Tecnologias & Ferramentas",
    "technologies.subtitle":
      "Tecnologias que domino para criar soluções completas e modernas",
    "technologies.categories.languages": "Linguagens",
    "technologies.categories.frameworks": "Frameworks & Bibliotecas",
    "technologies.categories.databases": "Banco de Dados",
    "technologies.categories.tools": "Ferramentas",
    "technologies.specialties.title": "Especialidades",
    "technologies.specialties.backend": "Backend",
    "technologies.specialties.backendDesc": "APIs robustas e escaláveis",
    "technologies.specialties.frontend": "Frontend",
    "technologies.specialties.frontendDesc":
      "Interfaces modernas e responsivas",
    "technologies.specialties.mobileFirst": "Mobile First",
    "technologies.specialties.mobileFirstDesc":
      "Design responsivo em todos os dispositivos",

    // ===== BLOG SECTION =====
    "blog.title": "Blog & Artigos",
    "blog.subtitle":
      "Compartilhando conhecimento e experiências sobre desenvolvimento web e tecnologia",
    "blog.post1.title":
      "Como criar interfaces modernas com React e TailwindCSS",
    "blog.post1.description":
      "Explorando as melhores práticas para desenvolver UIs responsivas e acessíveis.",
    "blog.post2.title": "Otimização de Performance em Aplicações React",
    "blog.post2.description":
      "Técnicas avançadas para melhorar a performance e experiência do usuário.",
    "blog.post3.title": "Integração de APIs REST com Node.js e PostgreSQL",
    "blog.post3.description":
      "Guia completo para construir APIs robustas e escaláveis.",
    "blog.categories.frontend": "Frontend",
    "blog.categories.performance": "Performance",
    "blog.categories.backend": "Backend",
    "blog.status.comingSoon": "Em breve",
    "blog.readTime.short": "5 min",
    "blog.readTime.medium": "8 min",
    "blog.readTime.long": "12 min",
    "blog.readArticle": "Ler Artigo",
    "blog.developmentMessage": "Novos artigos em desenvolvimento...",
    "blog.viewAllArticles": "Ver Todos os Artigos",

    // ===== LANGUAGES SECTION =====
    "languages.title": "Idiomas",
    "languages.proficiency": "de proficiência",
    "languages.portuguese.name": "Português",
    "languages.portuguese.level": "Nativo",
    "languages.spanish.name": "Espanhol",
    "languages.spanish.level": "C1 (Avançado)",
    "languages.english.name": "Inglês",
    "languages.english.level": "A1 (Básico)",

    // ===== CONTACT SECTION =====
    "contact.title": "Vamos Conversar?",
    "contact.subtitle":
      "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos criar algo incrível juntos!",
    "contact.email.title": "Email",
    "contact.email.description": "Para propostas profissionais",
    "contact.instagram.title": "Instagram",
    "contact.instagram.description": "Acompanhe meu trabalho",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.value": "Cristian Leon",
    "contact.linkedin.description": "Conecte-se comigo",
    "contact.github.title": "GitHub",
    "contact.github.description": "Veja meus projetos",
    "contact.cta.title": "Pronto para colaborar?",
    "contact.cta.description":
      "Tenho experiência em projetos diversos e estou sempre em busca de novos desafios. Vamos conversar sobre seu próximo projeto!",
    "contact.cta.button": "Enviar Email",

    // ===== FOOTER =====
    "footer.madeWith": "Feito com",
    "footer.and": "e",
    "footer.by": "por Cristian Alex",
    "footer.rights": "Todos os direitos reservados.",
    "footer.techStack":
      "Desenvolvido com React + TypeScript + TailwindCSS + Framer Motion",

    // ===== THEME & LANGUAGE SELECTOR =====
    "theme.light": "Claro",
    "theme.dark": "Escuro",
    "language.en": "Inglês",
    "language.pt": "Português",
    "language.es": "Espanhol",
  },

  es: {
    // ===== NAVIGATION =====
    "nav.home": "Inicio",
    "nav.about": "Sobre",
    "nav.projects": "Proyectos",
    "nav.technologies": "Tecnologías",
    "nav.contact": "Contacto",

    // ===== HERO SECTION =====
    "hero.alt": "Cristian Alex",
    "hero.typing1": "Desarrollador Full Stack",
    "hero.typing2": "Enfocado en Front-End",
    "hero.typing3": "Creador de Experiencias",
    "hero.description":
      "Soy un desarrollador full stack apasionado por crear soluciones creativas y funcionales, con enfoque en front-end y experiencias interactivas.",
    "hero.button.projects": "Ver Proyectos",
    "hero.button.contact": "Ponerse en Contacto",

    // ===== ABOUT SECTION =====
    "about.title": "Sobre Mí",
    "about.description1":
      "Desarrollador Full Stack Junior enfocado en Front-End. Estudiante de Análisis y Desarrollo de Sistemas (UTP). Experiencia con Python, JavaScript, React y PostgreSQL.",
    "about.description2":
      "Apasionado por crear interfaces modernas y experiencias interactivas que combinan funcionalidad con diseño elegante. Constantemente busco mejorar mis habilidades y explorar nuevas tecnologías.",
    "about.description3":
      "Mi enfoque está orientado a la creación de soluciones innovadoras, con énfasis en la calidad del código y la experiencia del usuario final.",
    "about.highlights.fullstack": "Desarrollo Full Stack",
    "about.highlights.fullstackDesc":
      "Experiencia con tecnologías frontend y backend",
    "about.highlights.frontend": "Enfoque en Front-End",
    "about.highlights.frontendDesc":
      "Especialización en interfaces modernas y responsivas",
    "about.highlights.interfaces": "Interfaces Modernas",
    "about.highlights.interfacesDesc":
      "Creación de experiencias interactivas e intuitivas",

    // ===== EDUCATION SECTION =====
    "education.title": "Formación Académica",
    "education.degree": "Análisis y Desarrollo de Sistemas",
    "education.institution": "Universidad Tuiuti de Paraná",
    "education.location": "Curitiba, PR",
    "education.period": "2024 - 2026",
    "education.status": "En Progreso",
    "education.description":
      "Curso de educación superior enfocado en desarrollo de software, análisis de sistemas, bases de datos y metodologías ágiles.",

    // ===== PROJECTS SECTION =====
    "projects.title": "Proyectos",
    "projects.subtitle":
      "Conoce mi proyecto destacado y ve cómo transformo ideas en soluciones reales",
    "projects.routeSystem.title": "Sistema de Gestión de Rutas",
    "projects.routeSystem.description":
      "Sistema completo para automatización de logística de entregas con interfaz moderna y funciones avanzadas de optimización de rutas.",
    "projects.freelancer.title": "Desarrollador Freelancer",
    "projects.freelancer.description":
      "Desarrollo de aplicaciones web modernas con enfoque en experiencia de usuario y rendimiento.",
    "projects.visual.routeSystem": "Sistema de Rutas",
    "projects.visual.smartLogistics": "Logística Inteligente",
    "projects.visual.webDeveloper": "Desarrollador Web",
    "projects.visual.fullStack": "Freelancer Full Stack",
    "projects.technologies": "Tecnologías",
    "projects.features": "Funcionalidades",
    "projects.features.automation": "Automatización de logística de entregas",
    "projects.features.deliveryDrivers": "Registro de repartidores",
    "projects.features.routeOptimization": "Cálculo de rutas optimizadas",
    "projects.features.mapsIntegration": "Integración con Google Maps",
    "projects.features.webDevelopment": "Desarrollo de aplicaciones web",
    "projects.features.apiIntegration": "Creación e integración de APIs REST",
    "projects.features.databaseModeling": "Modelado de bases de datos",
    "projects.features.reactiveInterfaces": "Interfaces reactivas con React",
    "projects.viewDemo": "Ver Demo",
    "projects.viewCode": "Código",
    "projects.viewGitHub": "Ver en GitHub",
    "projects.moreProjects": "Más proyectos en desarrollo...",

    // ===== TECHNOLOGIES SECTION =====
    "technologies.title": "Tecnologías & Herramientas",
    "technologies.subtitle":
      "Tecnologías que domino para crear soluciones completas y modernas",
    "technologies.categories.languages": "Lenguajes",
    "technologies.categories.frameworks": "Frameworks & Bibliotecas",
    "technologies.categories.databases": "Bases de Datos",
    "technologies.categories.tools": "Herramientas",
    "technologies.specialties.title": "Especialidades",
    "technologies.specialties.backend": "Backend",
    "technologies.specialties.backendDesc": "APIs robustas y escalables",
    "technologies.specialties.frontend": "Frontend",
    "technologies.specialties.frontendDesc":
      "Interfaces modernas y responsivas",
    "technologies.specialties.mobileFirst": "Mobile First",
    "technologies.specialties.mobileFirstDesc":
      "Diseño responsivo en todos los dispositivos",

    // ===== BLOG SECTION =====
    "blog.title": "Blog & Artículos",
    "blog.subtitle":
      "Compartiendo conocimiento y experiencias sobre desarrollo web y tecnología",
    "blog.post1.title":
      "Cómo crear interfaces modernas con React y TailwindCSS",
    "blog.post1.description":
      "Explorando las mejores prácticas para desarrollar UIs responsivas y accesibles.",
    "blog.post2.title": "Optimización de Rendimiento en Aplicaciones React",
    "blog.post2.description":
      "Técnicas avanzadas para mejorar el rendimiento y la experiencia del usuario.",
    "blog.post3.title": "Integración de APIs REST con Node.js y PostgreSQL",
    "blog.post3.description":
      "Guía completa para construir APIs robustas y escalables.",
    "blog.categories.frontend": "Frontend",
    "blog.categories.performance": "Rendimiento",
    "blog.categories.backend": "Backend",
    "blog.status.comingSoon": "Próximamente",
    "blog.readTime.short": "5 min",
    "blog.readTime.medium": "8 min",
    "blog.readTime.long": "12 min",
    "blog.readArticle": "Leer Artículo",
    "blog.developmentMessage": "Nuevos artículos en desarrollo...",
    "blog.viewAllArticles": "Ver Todos los Artículos",

    // ===== LANGUAGES SECTION =====
    "languages.title": "Idiomas",
    "languages.proficiency": "de proficiencia",
    "languages.portuguese.name": "Portugués",
    "languages.portuguese.level": "Nativo",
    "languages.spanish.name": "Español",
    "languages.spanish.level": "C1 (Avanzado)",
    "languages.english.name": "Inglés",
    "languages.english.level": "A1 (Básico)",

    // ===== CONTACT SECTION =====
    "contact.title": "¿Hablemos?",
    "contact.subtitle":
      "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. ¡Ponte en contacto y creemos algo increíble juntos!",
    "contact.email.title": "Email",
    "contact.email.description": "Para propuestas profesionales",
    "contact.instagram.title": "Instagram",
    "contact.instagram.description": "Sigue mi trabajo",
    "contact.linkedin.title": "LinkedIn",
    "contact.linkedin.value": "Cristian Leon",
    "contact.linkedin.description": "Conéctate conmigo",
    "contact.github.title": "GitHub",
    "contact.github.description": "Ve mis proyectos",
    "contact.cta.title": "¿Listo para colaborar?",
    "contact.cta.description":
      "Tengo experiencia en proyectos diversos y siempre estoy buscando nuevos desafíos. ¡Hablemos sobre tu próximo proyecto!",
    "contact.cta.button": "Enviar Email",

    // ===== FOOTER =====
    "footer.madeWith": "Hecho con",
    "footer.and": "y",
    "footer.by": "por Cristian Alex",
    "footer.rights": "Todos los derechos reservados.",
    "footer.techStack":
      "Desarrollado con React + TypeScript + TailwindCSS + Framer Motion",

    // ===== THEME & LANGUAGE SELECTOR =====
    "theme.light": "Claro",
    "theme.dark": "Oscuro",
    "language.en": "Inglés",
    "language.pt": "Portugués",
    "language.es": "Español",
  },
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
