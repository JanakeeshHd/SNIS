import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
import experienceImg from "@/assets/15+.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center pt-8">
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
        <div className="lg:col-span-7 space-y-10">
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
              className="px-12 py-8 text-lg group"
            >
              Browse Product Range
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 bg-transparent text-white hover:bg-white/10 px-12 py-8 text-lg rounded-full"
            >
              Download Catalog
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] bg-white/5 backdrop-blur-xl rounded-[4rem] shadow-glow-blue p-4 border border-white/10 overflow-hidden group">
               <div className="w-full h-full bg-primary/40 rounded-[3rem] overflow-hidden relative flex items-center justify-center border border-white/5">
                  <img 
                    src={experienceImg} 
                    alt="15+ Years Experience" 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for the 15+ image to make it pop */}
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-accent/10" />
                  
                  {/* Highlight border effect */}
                  <div className="absolute inset-0 border-[1px] border-white/10 rounded-[3rem] group-hover:border-accent/30 transition-colors duration-500" />
               </div>
            </div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-orange-500 text-white p-6 rounded-3xl shadow-glow z-20 text-center border border-white/20"
            >
              <div className="text-3xl font-black">15+</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-tight">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
