import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", ...new Set(SITE_CONTENT.products.featured.map(p => p.category))];
  
  const filteredProducts = activeFilter === "All" 
    ? SITE_CONTENT.products.featured.slice(0, 8) 
    : SITE_CONTENT.products.featured.filter(p => p.category === activeFilter);

  return (
    <section className="py-32 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Market Leading Solutions</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">Featured Technical Products</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              Precision-engineered components from global industry leaders, curated for the highest standards of reliability.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-200/50 rounded-2xl">
            {categories.map(cat => (
              <button
                key={cat}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                  activeFilter === cat 
                    ? "bg-white text-secondary shadow-soft" 
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col bg-white rounded-[2rem] border border-secondary/15 hover:border-accent hover:shadow-card-hover transition-all duration-500 p-3"
              >
                <div className="relative aspect-square rounded-[1.7rem] bg-bg-light overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black text-secondary rounded-full shadow-soft uppercase tracking-wider">
                      {product.category}
                    </span>
                    {i < 3 && (
                      <span className="px-3 py-1 bg-accent text-white text-[10px] font-black rounded-full shadow-soft uppercase tracking-wider">
                        Best Seller
                      </span>
                    )}
                  </div>
                  
                  <div className="w-full h-full flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform duration-700">
                    {/* Visual representation of product */}
                    <div className="relative">
                       <div className="w-24 h-24 border-2 border-slate-200 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform" />
                       <div className="absolute top-0 left-0 w-24 h-24 border-2 border-accent/20 rounded-lg transform -rotate-12 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <Button 
                      variant="default"
                      className="rounded-xl font-bold px-6"
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="px-5 pb-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-black text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-6 line-clamp-2">
                    High-performance solution for industrial networking and cabinet management.
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Inquiry Only</span>
                    <button className="flex items-center space-x-2 text-secondary font-black text-sm group/btn hover:text-accent transition-colors">
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
