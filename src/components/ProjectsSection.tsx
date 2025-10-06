import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  MapPin,
  Route,
  Users,
  Zap,
  Code,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ Adicionei o import

export const ProjectsSection = () => {
  const { t } = useLanguage(); // ✅ Adicionei o hook

  const projects = [
    {
      title: t("projects.routeSystem.title"), // ✅ Traduzido
      description: t("projects.routeSystem.description"), // ✅ Traduzido
      technologies: ["Python", "SQL", "PyQt5", "Google Maps API"],
      features: [
        { icon: Zap, text: t("projects.features.automation") }, // ✅ Traduzido
        { icon: Users, text: t("projects.features.deliveryDrivers") }, // ✅ Traduzido
        { icon: Route, text: t("projects.features.routeOptimization") }, // ✅ Traduzido
        { icon: MapPin, text: t("projects.features.mapsIntegration") }, // ✅ Traduzido
      ],
      demoUrl: "#",
      codeUrl: "https://github.com/Alexxisleon",
      type: "featured",
    },
    {
      title: t("projects.freelancer.title"), // ✅ Traduzido
      description: t("projects.freelancer.description"), // ✅ Traduzido
      technologies: [
        "JavaScript",
        "TypeScript",
        "React",
        "TailwindCSS",
        "PostgreSQL",
        "Prisma",
      ],
      features: [
        { icon: Code, text: t("projects.features.webDevelopment") }, // ✅ Traduzido
        { icon: Zap, text: t("projects.features.apiIntegration") }, // ✅ Traduzido
        { icon: Route, text: t("projects.features.databaseModeling") }, // ✅ Traduzido
        { icon: Users, text: t("projects.features.reactiveInterfaces") }, // ✅ Traduzido
      ],
      demoUrl: "#",
      codeUrl: "https://github.com/Alexxisleon",
      type: "regular",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-background to-card/20"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("projects.title")} {/* ✅ Traduzido */}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")} {/* ✅ Traduzido */}
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: projectIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <Card className="overflow-hidden bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project visual */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 min-h-[300px] flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:shadow-glow-primary transition-all duration-300">
                        {project.type === "featured" ? (
                          <Route className="w-12 h-12 text-primary" />
                        ) : (
                          <Code className="w-12 h-12 text-primary" />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {project.type === "featured"
                          ? t("projects.visual.routeSystem") // ✅ Traduzido
                          : t("projects.visual.webDeveloper")}{" "}
                        {/* ✅ Traduzido */}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.type === "featured"
                          ? t("projects.visual.smartLogistics") // ✅ Traduzido
                          : t("projects.visual.fullStack")}{" "}
                        {/* ✅ Traduzido */}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project details */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                        {t("projects.technologies")} {/* ✅ Traduzido */}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                        {t("projects.features")} {/* ✅ Traduzido */}
                      </h4>
                      <div className="space-y-2">
                        {project.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <feature.icon className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button variant="hero" size="sm" asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {t("projects.viewDemo")} {/* ✅ Traduzido */}
                        </a>
                      </Button>
                      <Button variant="glass" size="sm" asChild>
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          {t("projects.viewCode")} {/* ✅ Traduzido */}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More projects indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            {t("projects.moreProjects")} {/* ✅ Traduzido */}
          </p>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/Alexxisleon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              {t("projects.viewGitHub")} {/* ✅ Traduzido */}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
