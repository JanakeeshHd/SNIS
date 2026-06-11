import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero.jpg";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden flex items-center pt-4 pb-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Industrial Automation Background" 
          className="w-full h-full object-cover"
        />
        {/* Base industrial tint */}
        <div className="absolute inset-0 bg-primary/30" />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
      </div>

      {/* Background Animated Light Effect */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse pointer-events-none z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse pointer-events-none z-10" />

      <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-12 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-accent text-xs font-black uppercase tracking-widest mb-10 shadow-glow">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-ping" />
              <span>Leading Distributor in Karnataka</span>
            </div>
            
            <h1 className="text-6xl md:text-[90px] font-black text-white leading-[0.9] tracking-tighter mb-8">
              Industrial <br />
              <span className="text-secondary">Power & Control</span> <br />
              <span className="text-accent">Systems</span>
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed font-medium">
              Authorized partner for <span className="text-white font-bold">Helukabel, Murr Elektronik, and Murrplastik</span>, delivering premium automation infrastructure since 2011.
            </p>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-5"
            >
              <Button
                size="lg"
                variant="cta"
                className="px-12 py-8 text-lg rounded-full group"
                onClick={() => navigate('/products')}
              >
                Browse Product
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
        </div>

      </div>
    </section>
  );
};
