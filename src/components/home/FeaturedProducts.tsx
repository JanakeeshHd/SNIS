import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export const FeaturedProducts = () => {
  const maxProductsToShow = 4;

  const categories = [...new Set(SITE_CONTENT.products.featured.map(p => p.category))];
  const [activeFilter, setActiveFilter] = useState(categories[0] || "");

  const filteredProducts = SITE_CONTENT.products.featured
    .filter(p => !activeFilter || p.category === activeFilter)
    .slice(0, maxProductsToShow);

  const getProductImage = (name: string, category: string) => {
    return SITE_CONTENT.products.items.find(item => item.name === name && item.category === category)?.image;
  };

  const getProductDescription = (name: string, category: string) => {
    return SITE_CONTENT.products.items.find(item => item.name === name && item.category === category)?.description;
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "Featured Technical Products":
        return "Featured";
      case "Electronics in the Cabinet":
        return "Electronics in the Cabinet";
      case "Connection Technology":
        return "Connection Technology";
      case "I/O Systems":
        return "I/O Systems";
      default:
        return category;
    }
  };

  return (
    <section className="py-10 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-4 lg:mb-6 gap-4">
          <div className="max-w-2xl">
            <div className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Market Leading Solutions</div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-3">Featured Technical Products</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium">
              Precision-engineered components from global industry leaders, curated for the highest standards of reliability.
            </p>
          </div>
          <div className="flex items-center gap-4">
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
                {getCategoryLabel(cat)}
              </button>
            ))}
            </div>
            <Link to="/products" className="hidden lg:block">
              <Button variant="outline" className="ml-4 h-full">
                View All Products
              </Button>
            </Link>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
                className="group relative flex flex-col bg-white rounded-[2rem] border border-secondary/15 hover:border-accent hover:shadow-card-hover transition-all duration-500 p-2"
              >
                <div className="relative aspect-square rounded-[1.7rem] bg-bg-light overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black text-secondary rounded-full shadow-soft uppercase tracking-wider">
                      {getCategoryLabel(product.category)}
                    </span>
                  </div>
                  
                  {getProductImage(product.name, product.category) ? (
                    <img
                      src={getProductImage(product.name, product.category)}
                      alt={product.name}
                      className="w-full h-full object-contain p-6 group-hover:scale-125 group-hover:brightness-110 transition-all duration-700 cursor-pointer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300 group-hover:scale-125 transition-transform duration-700 cursor-pointer">
                      <div className="relative">
                         <div className="w-24 h-24 border-2 border-slate-200 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform" />
                         <div className="absolute top-0 left-0 w-24 h-24 border-2 border-accent/20 rounded-lg transform -rotate-12 group-hover:rotate-0 transition-transform" />
                      </div>
                    </div>
                  )}

                </div>

                <div className="px-3 pb-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-black text-foreground mb-1 line-clamp-2 group-hover:text-secondary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium mb-4 line-clamp-2">
                    {getProductDescription(product.name, product.category) || "High-performance solution for industrial networking and cabinet management."}
                  </p>
                  
                  <div className="mt-auto pt-3 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button variant="default" className="rounded-xl font-bold px-6">
                        Inquiry
                      </Button>
                      <a
                        href={`https://wa.me/${SITE_CONTENT.contact.phone.replace(/\s+/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5C] text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-4 flex justify-center lg:hidden">
          <Link to="/products" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full px-8 py-6 text-base">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
