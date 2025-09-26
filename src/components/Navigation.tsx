import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#about" },
    { label: "Projetos", href: "#projects" },
    { label: "Tecnologias", href: "#technologies" },
    { label: "Contato", href: "#contact" },
  ];

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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Code className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl text-foreground">Alex</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Contato
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border/50"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href.replace("#", ""))}
                    className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="px-4">
                  <Button
                    variant="hero"
                    size="sm"
                    onClick={() => scrollToSection("contact")}
                    className="w-full"
                  >
                    Contato
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
