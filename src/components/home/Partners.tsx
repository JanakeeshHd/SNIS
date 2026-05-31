import { motion } from "framer-motion";

const partners = [
  "Siemens",
  "Schneider Electric",
  "Phoenix Contact",
  "Murrelektronik",
  "ABB",
  "Rockwell Automation"
];

export const Partners = () => {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-white border-y border-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">Our Technology Partners</h4>
        </motion.div>
        
        <div className="relative w-full overflow-hidden">
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          
          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-12 md:gap-24 whitespace-nowrap"
            animate={{ x: [-2000, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            } as any}
          >
            {duplicatedPartners.map((partner, i) => (
              <motion.div
                key={i}
                className="text-lg md:text-2xl font-black text-foreground tracking-tighter flex-shrink-0 min-w-max cursor-pointer grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
                whileHover={{ scale: 1.15 }}
              >
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
