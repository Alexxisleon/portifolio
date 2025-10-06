import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ Adicionei o import

export const AboutSection = () => {
  const { t } = useLanguage(); // ✅ Adicionei o hook

  const highlights = [
    {
      icon: Code,
      title: t("about.highlights.fullstack"), // ✅ Traduzido
      description: t("about.highlights.fullstackDesc"), // ✅ Traduzido
    },
    {
      icon: Lightbulb,
      title: t("about.highlights.frontend"), // ✅ Traduzido
      description: t("about.highlights.frontendDesc"), // ✅ Traduzido
    },
    {
      icon: Rocket,
      title: t("about.highlights.interfaces"), // ✅ Traduzido
      description: t("about.highlights.interfacesDesc"), // ✅ Traduzido
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("about.title")} {/* ✅ Traduzido */}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description1")} {/* ✅ Traduzido */}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description2")} {/* ✅ Traduzido */}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.description3")} {/* ✅ Traduzido */}
            </p>
          </motion.div>

          {/* Highlights cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
