import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Wrench,
  Globe,
  Server,
  Smartphone,
  GitBranch,
  Monitor,
} from "lucide-react";

export const TechnologiesSection = () => {
  const categories = [
    {
      title: "Linguagens",
      icon: Code,
      items: [
        "C",
        "C++",
        "Python",
        "Java",
        "PHP",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
      ],
      color: "text-blue-400",
    },
    {
      title: "Frameworks & Bibliotecas",
      icon: Globe,
      items: ["React", "Next.js", "Node.js", "TailwindCSS", "Vite"],
      color: "text-green-400",
    },
    {
      title: "Banco de Dados",
      icon: Database,
      items: ["PostgreSQL", "Firebase"],
      color: "text-purple-400",
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      items: ["Git", "GitHub", "Windows", "VS Code", "PyCharm"],
      color: "text-orange-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tecnologias & Ferramentas
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnologias que domino para criar soluções completas e modernas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="px-3 py-2 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Especialidades
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-gradient-card/50">
                <Server className="w-8 h-8 text-primary" />
                <h4 className="font-semibold text-foreground">Backend</h4>
                <p className="text-sm text-muted-foreground text-center">
                  APIs robustas e escaláveis
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-gradient-card/50">
                <Monitor className="w-8 h-8 text-accent" />
                <h4 className="font-semibold text-foreground">Frontend</h4>
                <p className="text-sm text-muted-foreground text-center">
                  Interfaces modernas e responsivas
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 p-6 rounded-lg bg-gradient-card/50">
                <Smartphone className="w-8 h-8 text-green-400" />
                <h4 className="font-semibold text-foreground">Mobile First</h4>
                <p className="text-sm text-muted-foreground text-center">
                  Design responsivo em todos os dispositivos
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
