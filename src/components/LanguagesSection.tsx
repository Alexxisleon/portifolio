import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ Adicionei o import

export const LanguagesSection = () => {
  const { t } = useLanguage(); // ✅ Adicionei o hook

  const languages = [
    {
      name: t("languages.portuguese.name"), // ✅ Traduzido
      level: t("languages.portuguese.level"), // ✅ Traduzido
      proficiency: 100,
      flag: "🇧🇷",
    },
    {
      name: t("languages.spanish.name"), // ✅ Traduzido
      level: t("languages.spanish.level"), // ✅ Traduzido
      proficiency: 85,
      flag: "🇪🇸",
    },
    {
      name: t("languages.english.name"), // ✅ Traduzido
      level: t("languages.english.level"), // ✅ Traduzido
      proficiency: 30,
      flag: "🇺🇸",
    },
  ];

  const getLevelColor = (proficiency: number) => {
    if (proficiency >= 80) return "bg-green-500";
    if (proficiency >= 60) return "bg-yellow-500";
    if (proficiency >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <section
      id="languages"
      className="py-20 bg-gradient-to-b from-card/20 to-background"
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
            {t("languages.title")} {/* ✅ Traduzido */}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group text-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-3xl">{language.flag}</span>
                    <Languages className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {language.name}
                  </h3>

                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {language.level}
                  </Badge>

                  <div className="space-y-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${getLevelColor(
                          language.proficiency
                        )}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.proficiency}%` }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language.proficiency}% {t("languages.proficiency")}{" "}
                      {/* ✅ Traduzido */}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
