import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Industry = () => {
  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-industrial-blue/10 skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="text-tech-cyan font-bold uppercase tracking-widest text-xs mb-4">Sector Expertise</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Tailored Solutions for Every Industry</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              {SITE_CONTENT.industries.intro}
            </p>
          </div>
          <Button size="lg" className="bg-white text-industrial-blue hover:bg-tech-cyan hover:text-white px-10 py-8 text-lg rounded-2xl shadow-premium group">
            All Industry Solutions
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONTENT.industries.sectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              id={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-slate-800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-industrial-blue/20 group-hover:bg-industrial-blue/10 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-bold italic opacity-20 group-hover:scale-110 transition-transform duration-1000">
                {sector.title} Visual
              </div>

              <div className="absolute bottom-0 left-0 w-full p-10 z-20">
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-tech-cyan transition-colors">{sector.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                  {sector.description}
                </p>
                <button className="flex items-center space-x-3 text-white font-black text-sm uppercase tracking-widest group/btn">
                  <span>Explore Sector</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-tech-cyan transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
