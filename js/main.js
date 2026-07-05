document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navLinks = document.querySelectorAll(".nav-link");
  const revealElements = document.querySelectorAll("[data-reveal]");
  const techCards = document.querySelectorAll(".tech-card");
  const languageMenu = document.querySelector(".language-menu");
  const languageButton = document.querySelector("#languageButton");
  const languageLabel = document.querySelector("#languageLabel");
  const languageFlag = document.querySelector("#languageFlag");
  const languageOptions = document.querySelectorAll("[data-lang]");

  const translations = {
    en: {
      flag: "flag-us",
      label: "EN",
      pageTitle: "Montserrat Porras | Portfolio",
      navAbout: "About",
      navTechnologies: "Technologies",
      navPortfolio: "Portfolio",
      navContact: "Contact",
      brandName: "Montserrat Porras",
      heroEyebrow: "Software Engineering Student & Web Developer",
      heroTitle: "Montserrat Porras",
      heroText: "I build thoughtful digital experiences with clean interfaces, reliable code, and a strong focus on turning ideas into useful products.",
      downloadResume: "Download Resume",
      viewProjects: "View Projects",
      aboutKicker: "About me",
      aboutTitle: "Focused on useful, polished and scalable web solutions.",
      aboutText: "I am a Software Engineering student and web developer from Argentina. I enjoy combining technical thinking with visual care to create responsive websites, practical workflows, and digital experiences that feel clear, modern, and easy to use.",
      factFrontend: "Frontend development",
      factBackend: "Backend foundations",
      factData: "Data-driven projects",
      techKicker: "Technology stack",
      techTitle: "Tools I use to build digital products.",
      techText: "Organized by area, with a consistent visual system ready to grow.",
      groupLanguages: "Programming Languages",
      groupOther: "Other Technologies",
      techCybersecurity: "Cybersecurity",
      techAI: "AI",
      portfolioKicker: "Portfolio",
      portfolioTitle: "Selected projects.",
      portfolioText: "A growing collection of practical web projects and product experiences.",
      projectType: "Online ordering website",
      projectName: "El Pana Arepas",
      projectDescription: "Online ordering website for a local arepas business, featuring product customization, real-time price calculation, and automatic order submission via WhatsApp.",
      viewProject: "View Project",
      githubSoon: "GitHub soon",
      contactKicker: "Contact",
      contactTitle: "Let's turn ideas into impact.",
      contactText: "I do not just build IT solutions; I craft experiences that matter. From Argentina, I collaborate across borders, transforming challenges into meaningful digital work.",
      emailMe: "Email me",
      linkedin: "LinkedIn",
      footerRights: "© 2026 Montserrat Porras. All rights reserved."
    },
    es: {
      flag: "flag-ar",
      label: "ES",
      pageTitle: "Montserrat Porras | Portafolio",
      navAbout: "Sobre mi",
      navTechnologies: "Tecnologias",
      navPortfolio: "Portafolio",
      navContact: "Contacto",
      brandName: "Montserrat Porras",
      heroEyebrow: "Estudiante de Ingenieria en Software & Desarrolladora Web",
      heroTitle: "Montserrat Porras",
      heroText: "Construyo experiencias digitales cuidadas, con interfaces limpias, codigo confiable y foco en transformar ideas en productos utiles.",
      downloadResume: "Descargar CV",
      viewProjects: "Ver proyectos",
      aboutKicker: "Sobre mi",
      aboutTitle: "Enfocada en soluciones web utiles, prolijas y escalables.",
      aboutText: "Soy estudiante de Ingenieria en Software y desarrolladora web de Argentina. Me gusta combinar pensamiento tecnico con criterio visual para crear sitios responsive, flujos practicos y experiencias digitales claras, modernas y faciles de usar.",
      factFrontend: "Desarrollo frontend",
      factBackend: "Bases de backend",
      factData: "Proyectos con datos",
      techKicker: "Stack tecnologico",
      techTitle: "Herramientas que uso para crear productos digitales.",
      techText: "Organizadas por area, con un sistema visual consistente y listo para crecer.",
      groupLanguages: "Lenguajes de programacion",
      groupOther: "Otras tecnologias",
      techCybersecurity: "Ciberseguridad",
      techAI: "IA",
      portfolioKicker: "Portafolio",
      portfolioTitle: "Proyectos seleccionados.",
      portfolioText: "Una coleccion en crecimiento de proyectos web practicos y experiencias digitales.",
      projectType: "Sitio de pedidos online",
      projectName: "El Pana Arepas",
      projectDescription: "Sitio de pedidos online para un negocio local de arepas, con personalizacion de productos, calculo de precio en tiempo real y envio automatico por WhatsApp.",
      viewProject: "Ver proyecto",
      githubSoon: "GitHub pronto",
      contactKicker: "Contacto",
      contactTitle: "Convirtamos ideas en impacto.",
      contactText: "No solo desarrollo soluciones IT; creo experiencias que importan. Desde Argentina, colaboro sin fronteras para transformar desafios en trabajo digital con sentido.",
      emailMe: "Escribime",
      linkedin: "LinkedIn",
      footerRights: "© 2026 Montserrat Porras. Todos los derechos reservados."
    },
    pt: {
      flag: "flag-br",
      label: "PT",
      pageTitle: "Montserrat Porras | Portfolio",
      navAbout: "Sobre mim",
      navTechnologies: "Tecnologias",
      navPortfolio: "Portfolio",
      navContact: "Contato",
      brandName: "Montserrat Porras",
      heroEyebrow: "Estudante de Engenharia de Software & Desenvolvedora Web",
      heroTitle: "Montserrat Porras",
      heroText: "Crio experiencias digitais cuidadosas, com interfaces limpas, codigo confiavel e foco em transformar ideias em produtos uteis.",
      downloadResume: "Baixar curriculo",
      viewProjects: "Ver projetos",
      aboutKicker: "Sobre mim",
      aboutTitle: "Focada em solucoes web uteis, refinadas e escalaveis.",
      aboutText: "Sou estudante de Engenharia de Software e desenvolvedora web da Argentina. Gosto de combinar pensamento tecnico com cuidado visual para criar sites responsivos, fluxos praticos e experiencias digitais claras, modernas e faceis de usar.",
      factFrontend: "Desenvolvimento frontend",
      factBackend: "Bases de backend",
      factData: "Projetos com dados",
      techKicker: "Stack tecnologico",
      techTitle: "Ferramentas que uso para criar produtos digitais.",
      techText: "Organizadas por area, com um sistema visual consistente e pronto para crescer.",
      groupLanguages: "Linguagens de programacao",
      groupOther: "Outras tecnologias",
      techCybersecurity: "Ciberseguranca",
      techAI: "IA",
      portfolioKicker: "Portfolio",
      portfolioTitle: "Projetos selecionados.",
      portfolioText: "Uma colecao em crescimento de projetos web praticos e experiencias digitais.",
      projectType: "Site de pedidos online",
      projectName: "El Pana Arepas",
      projectDescription: "Site de pedidos online para um negocio local de arepas, com personalizacao de produtos, calculo de preco em tempo real e envio automatico pelo WhatsApp.",
      viewProject: "Ver projeto",
      githubSoon: "GitHub em breve",
      contactKicker: "Contato",
      contactTitle: "Vamos transformar ideias em impacto.",
      contactText: "Eu nao apenas desenvolvo solucoes de TI; crio experiencias que importam. Da Argentina, colaboro sem fronteiras para transformar desafios em trabalho digital significativo.",
      emailMe: "Enviar email",
      linkedin: "LinkedIn",
      footerRights: "© 2026 Montserrat Porras. Todos os direitos reservados."
    }
  };

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  const applyLanguage = (language) => {
    const selected = translations[language] || translations.en;

    document.documentElement.lang = language;
    document.title = selected.pageTitle;
    languageFlag.className = `language-flag ${selected.flag}`;
    languageLabel.textContent = selected.label;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (selected[key]) element.textContent = selected[key];
    });

    languageOptions.forEach((option) => {
      option.classList.toggle("is-active", option.dataset.lang === language);
    });

    localStorage.setItem("portfolio-language", language);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  languageButton?.addEventListener("click", () => {
    const isOpen = languageMenu.classList.toggle("is-open");
    languageButton.setAttribute("aria-expanded", String(isOpen));
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      applyLanguage(option.dataset.lang);
      languageMenu.classList.remove("is-open");
      languageButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!languageMenu?.contains(event.target)) {
      languageMenu?.classList.remove("is-open");
      languageButton?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      languageMenu?.classList.remove("is-open");
      languageButton?.setAttribute("aria-expanded", "false");
    }
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index * 60, 360)}ms`);
    revealObserver.observe(element);
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });

  techCards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
    });
  });

  applyLanguage(localStorage.getItem("portfolio-language") || "en");
});

