import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { TypingEffect } from "./TypingEffect";
import { ThreeScene } from "./ThreeScene";
import { ArrowDown, Github, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ Adicionei o import

export const HeroSection = () => {
  const { t } = useLanguage(); // ✅ Adicionei o hook

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* 3D Background */}
      <ThreeScene />

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <Avatar className="w-32 h-32 md:w-40 md:h-40 ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
                <AvatarImage
                  src={profilePhoto}
                  alt={t("hero.alt")} // ✅ Traduzido
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-primary text-primary-foreground">
                  CA
                </AvatarFallback>
              </Avatar>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Cristian Alex
          </motion.h1>

          {/* Subtitle with typing effect */}
          <motion.div
            className="text-2xl md:text-4xl font-semibold text-muted-foreground min-h-[3rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypingEffect
              texts={[
                t("hero.typing1"), // ✅ Traduzido
                t("hero.typing2"), // ✅ Traduzido
                t("hero.typing3"), // ✅ Traduzido
              ]}
              speed={80}
              deleteSpeed={40}
              delay={2500}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {t("hero.description")} {/* ✅ Traduzido */}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="min-w-[200px]"
            >
              {t("hero.button.projects")} {/* ✅ Traduzido */}
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="min-w-[200px]"
            >
              <Mail className="w-5 h-5" />
              {t("hero.button.contact")} {/* ✅ Traduzido */}
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a
              href="https://github.com/Alexxisleon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce cursor-pointer hover:text-primary transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};
