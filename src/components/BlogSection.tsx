import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext"; // ✅ Adicionei o import

export const BlogSection = () => {
  const { t } = useLanguage(); // ✅ Adicionei o hook

  const blogPosts = [
    {
      title: t("blog.post1.title"), // ✅ Traduzido
      description: t("blog.post1.description"), // ✅ Traduzido
      date: "2024-01-15",
      readTime: t("blog.readTime.short"), // ✅ Traduzido
      category: t("blog.categories.frontend"), // ✅ Traduzido
      status: t("blog.status.comingSoon"), // ✅ Traduzido
    },
    {
      title: t("blog.post2.title"), // ✅ Traduzido
      description: t("blog.post2.description"), // ✅ Traduzido
      date: "2024-02-01",
      readTime: t("blog.readTime.medium"), // ✅ Traduzido
      category: t("blog.categories.performance"), // ✅ Traduzido
      status: t("blog.status.comingSoon"), // ✅ Traduzido
    },
    {
      title: t("blog.post3.title"), // ✅ Traduzido
      description: t("blog.post3.description"), // ✅ Traduzido
      date: "2024-02-15",
      readTime: t("blog.readTime.long"), // ✅ Traduzido
      category: t("blog.categories.backend"), // ✅ Traduzido
      status: t("blog.status.comingSoon"), // ✅ Traduzido
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
            {t("blog.title")} {/* ✅ Traduzido */}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("blog.subtitle")} {/* ✅ Traduzido */}
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
                    {t("blog.readArticle")} {/* ✅ Traduzido */}
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
            {t("blog.developmentMessage")} {/* ✅ Traduzido */}
          </p>
          <Button variant="outline" disabled>
            {t("blog.viewAllArticles")} {/* ✅ Traduzido */}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
