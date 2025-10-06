import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper functions para type safety
  const getElementOffsetTop = (element: Element | null): number => {
    if (!element) return 0;
    return (element as HTMLElement).offsetTop;
  };

  const getElementOffsetHeight = (element: Element | null): number => {
    if (!element) return 0;
    return (element as HTMLElement).offsetHeight;
  };

  // Função scrollToSection corrigida
  const scrollToSection = (sectionId: string) => {
    console.log("🔄 Scroll para:", sectionId);

    setIsOpen(false);
    setIsLanguageOpen(false);

    setTimeout(() => {
      if (!sectionId || sectionId === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Tenta por ID primeiro
      let targetElement = document.getElementById(sectionId);

      // Fallback: procura por data-section
      if (!targetElement) {
        targetElement = document.querySelector(
          `[data-section="${sectionId}"]`
        ) as HTMLElement;
      }

      // Fallback final: procura qualquer elemento com o ID
      if (!targetElement) {
        const elements = document.querySelectorAll(`[id]`);
        targetElement = Array.from(elements).find(
          (el) => el.id === sectionId
        ) as HTMLElement;
      }

      if (targetElement) {
        const nav = document.querySelector("nav");
        const navHeight = getElementOffsetHeight(nav);
        const targetPosition = getElementOffsetTop(targetElement) - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        console.log("✅ Scroll realizado para:", sectionId);
      } else {
        console.error("❌ Seção não encontrada:", sectionId);
        console.log(
          "📋 IDs disponíveis:",
          Array.from(document.querySelectorAll("[id]")).map((el) => el.id)
        );
      }
    }, 150);
  };

  const navItems = [
    { label: t("nav.home"), href: "" },
    { label: t("nav.about"), href: "about" },
    { label: t("nav.projects"), href: "projects" },
    { label: t("nav.technologies"), href: "technologies" },
  ];

  const languages = [
    { code: "en" as const, name: t("language.en"), flag: "🇺🇸" },
    { code: "pt" as const, name: t("language.pt"), flag: "🇧🇷" },
    { code: "es" as const, name: t("language.es"), flag: "🇪🇸" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
            onClick={() => scrollToSection("")}
          >
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">Alex</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}

            {/* Seletor de Idioma */}
            <motion.div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-300"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {currentLanguage?.flag}
                </span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg py-2"
                    onMouseLeave={() => setIsLanguageOpen(false)}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLanguageOpen(false);
                        }}
                        className={`flex items-center space-x-3 w-full px-4 py-2 text-sm transition-colors ${
                          language === lang.code
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Toggle de Tema */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-300"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </motion.button>

            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              {t("nav.contact")}
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const currentIndex = languages.findIndex(
                  (lang) => lang.code === language
                );
                const nextIndex = (currentIndex + 1) % languages.length;
                setLanguage(languages[nextIndex].code);
              }}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-300"
            >
              <span className="text-sm">{currentLanguage?.flag}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors duration-300"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </motion.button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border/50 mt-16"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-3 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="px-6">
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => scrollToSection("contact")}
                    className="w-full py-3"
                  >
                    {t("nav.contact")}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
