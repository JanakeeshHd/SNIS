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
  return (
    <section className="py-20 bg-white border-y border-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em] mb-4">Our Technology Partners</h4>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-black text-foreground tracking-tighter"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
