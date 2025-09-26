import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export const ContactSection = () => {
  const contacts = [
    {
      icon: Mail,
      title: "Email",
      value: "alelion001@gmail.com",
      href: "mailto:alelion001@gmail.com",
      description: "Para propostas profissionais",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@Akz7ine",
      href: "https://instagram.com/Akz7ine",
      description: "Acompanhe meu trabalho",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Cristian Leon",
      href: "https://linkedin.com/in/cristian-leon-b63659384",
      description: "Conecte-se comigo",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@Alexxisleon",
      href: "https://github.com/Alexxisleon",
      description: "Veja meus projetos",
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
    <section
      id="contact"
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
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato e vamos criar algo incrível juntos!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {contacts.map((contact, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card group h-full">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 h-full"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <contact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {contact.value}
                    </p>
                    <p className="text-sm text-muted-foreground/80">
                      {contact.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300 opacity-0 group-hover:opacity-100" />
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-card p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para colaborar?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tenho experiência em projetos diversos e estou sempre em busca de
              novos desafios. Vamos conversar sobre seu próximo projeto!
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:alelion001@gmail.com">
                <Mail className="w-5 h-5" />
                Enviar Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
