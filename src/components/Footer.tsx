import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/20 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>e</span>
            <Code className="w-4 h-4 text-primary" />
            <span>por Cristian Alex</span>
          </div>

          <div className="text-sm text-muted-foreground/80">
            © {new Date().getFullYear()} Cristian Alex. Todos os direitos
            reservados.
          </div>

          <div className="text-xs text-muted-foreground/60">
            Desenvolvido com React + TypeScript + TailwindCSS + Framer Motion
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
