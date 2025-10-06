import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ Adicionei o import

export const EducationSection = () => {
  const { t } = useLanguage(); // ✅ Adicionei o hook

  const education = {
    degree: t("education.degree"), // ✅ Traduzido
    institution: t("education.institution"), // ✅ Traduzido
    location: t("education.location"), // ✅ Traduzido
    period: t("education.period"), // ✅ Traduzido
    status: t("education.status"), // ✅ Traduzido
    description: t("education.description"), // ✅ Traduzido
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("education.title")} {/* ✅ Traduzido */}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-glow-primary">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {education.degree}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {education.status}
                    </Badge>
                  </div>

                  <h4 className="text-lg font-semibold text-primary mb-4">
                    {education.institution}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {education.description}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
