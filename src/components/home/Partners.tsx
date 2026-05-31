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
        <div className="text-center mb-12">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">Our Technology Partners</h4>
        </div>
        
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-24 whitespace-nowrap opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700"
            animate={{ x: [-2000, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear"
              }
            }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div
                key={i}
                className="text-lg md:text-2xl font-black text-foreground tracking-tighter flex-shrink-0 min-w-max"
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
