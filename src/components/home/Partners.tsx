import { motion } from "framer-motion";
import murrelektronikLogo from "@/assets/murrelektronik.png";
import murrplasticLogo from "@/assets/murrplastic.png";

const partners = [
  {
    name: "Murrelektronik",
    logo: murrelektronikLogo,
  },
  {
    name: "Murrplastic",
    logo: murrplasticLogo,
  },
];

export const Partners = () => {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-8 md:py-10 bg-white border-y border-slate-50 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">Our Technology Partners</h4>
        </motion.div>
        
        <div className="relative w-full overflow-hidden">
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-20 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          
          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-20 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex w-max items-center gap-8 sm:gap-12 md:gap-24 whitespace-nowrap will-change-transform"
            animate={{ x: ["-50%", 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {duplicatedPartners.map((partner, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 min-w-max cursor-pointer opacity-80 hover:opacity-100 transition-all duration-500"
                whileHover={{ scale: 1.15 }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 sm:h-14 md:h-20 w-auto max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
