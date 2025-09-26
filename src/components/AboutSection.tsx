import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Rocket } from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desenvolvimento Full Stack",
      description: "Experiência com tecnologias frontend e backend",
    },
    {
      icon: Lightbulb,
      title: "Foco em Front-End",
      description: "Especialização em interfaces modernas e responsivas",
    },
    {
      icon: Rocket,
      title: "Interfaces Modernas",
      description: "Criação de experiências interativas e intuitivas",
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
            Sobre Mim
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
              Desenvolvedor Full Stack Júnior focado em Front-End. Estudante de
              Análise e Desenvolvimento de Sistemas (UTP). Experiência com
              Python, JavaScript, React e PostgreSQL.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Apaixonado por criar interfaces modernas e experiências
              interativas que combinam funcionalidade com design elegante. Busco
              constantemente aprimorar minhas habilidades e explorar novas
              tecnologias.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha abordagem é voltada para a criação de soluções inovadoras,
              com foco na qualidade do código e na experiência do usuário final.
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
