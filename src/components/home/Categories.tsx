import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network, Cable, Box } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONTENT } from "@/data/content";

const iconMap = {
  "electronics-in-cabinet": <Cpu className="w-8 h-8" />,
  "interfaces": <Box className="w-8 h-8" />,
  "io-systems": <Network className="w-8 h-8" />,
  "connection-technology": <Cable className="w-8 h-8" />,
};

export const Categories = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(158,228,147,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[#336699] font-bold uppercase tracking-widest text-xs mb-4">Industrial Ecosystem</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#2F4858] mb-6">Explore Our Product Range</h2>
          <p className="text-slate-500 text-lg leading-relaxed font-medium">
            From cabinet electronics to field connectivity, we provide the complete architecture for modern industrial automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SITE_CONTENT.products.categories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row bg-[#DAF7DC] rounded-[2.5rem] overflow-hidden hover:bg-white hover:shadow-corporate transition-all duration-500 border border-transparent hover:border-slate-100"
            >
              <div className="w-full md:w-2/5 aspect-square md:aspect-auto bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F4858]/20 to-transparent" />
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold italic p-8 text-center group-hover:scale-110 transition-transform duration-700">
                  {category.title} Illustration
                </div>
              </div>
              
              <div className="flex-1 p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white shadow-soft flex items-center justify-center text-[#2F4858] group-hover:bg-[#2F4858] group-hover:text-white transition-all duration-500">
                  {iconMap[category.id as keyof typeof iconMap] || <Box className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-black text-[#2F4858] mb-4 group-hover:text-[#2F4858] transition-colors">
                  {category.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                  {category.description}
                </p>
                <Link 
                  to={`/products/${category.id}`}
                  className="inline-flex items-center text-sm font-black text-[#2F4858] group-hover:text-[#86BBD8] transition-colors"
                >
                  <span className="relative">
                    Browse Category
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#86BBD8] group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
