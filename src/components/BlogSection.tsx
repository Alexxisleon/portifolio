import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "Como criar interfaces modernas com React e TailwindCSS",
      description:
        "Explorando as melhores práticas para desenvolver UIs responsivas e acessíveis.",
      date: "2024-01-15",
      readTime: "5 min",
      category: "Frontend",
      status: "Em breve",
    },
    {
      title: "Otimização de Performance em Aplicações React",
      description:
        "Técnicas avançadas para melhorar a performance e experiência do usuário.",
      date: "2024-02-01",
      readTime: "8 min",
      category: "Performance",
      status: "Em breve",
    },
    {
      title: "Integração de APIs REST com Node.js e PostgreSQL",
      description: "Guia completo para construir APIs robustas e escaláveis.",
      date: "2024-02-15",
      readTime: "12 min",
      category: "Backend",
      status: "Em breve",
    },
  ];

  return (
    <section
      id="blog"
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
            Blog & Artigos
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compartilhando conhecimento e experiências sobre desenvolvimento web
            e tecnologia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary group cursor-pointer">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {post.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {post.status}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("pt-BR")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    disabled
                  >
                    Ler Artigo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Novos artigos em desenvolvimento...
          </p>
          <Button variant="outline" disabled>
            Ver Todos os Artigos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
