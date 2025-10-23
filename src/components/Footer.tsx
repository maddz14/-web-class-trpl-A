import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-4 border-t-2 border-accent-blue/20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              TRPL Class 2024
            </div>
            <p className="text-muted-foreground">
              Politeknik Kelapa Sawit Citra Widya Edukasi
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-muted-foreground text-center">
              © 2025 TRPL. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-text-primary">
              Made with{" "}
              <Heart className="w-4 h-4 text-accent-blue fill-accent-blue animate-pulse" /> &{" "}
              <Heart className="w-4 h-4 text-accent-purple fill-accent-purple animate-pulse" /> by
              TRPL Students
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={scrollToTop}
              size="icon"
              className="w-12 h-12 rounded-full bg-gradient-primary text-white shadow-elegant hover:shadow-glow-blue"
            >
              <ArrowUp className="w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
