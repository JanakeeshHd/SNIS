import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Products = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCategories = SITE_CONTENT.products.categories.filter(cat => {
    const matchesSearch = cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cat.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || cat.title === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Layout>
      {/* Header */}
      <section className="bg-slate-50 border-b py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-industrial-blue mb-6">Our Products</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            {SITE_CONTENT.products.intro}
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 border-b bg-white sticky top-20 z-30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <Button 
              variant={activeCategory === "All" ? "default" : "outline"} 
              className="rounded-full"
              onClick={() => setActiveCategory("All")}
            >
              All
            </Button>
            {SITE_CONTENT.products.categories.map(cat => (
              <Button 
                key={cat.id} 
                variant={activeCategory === cat.title ? "default" : "outline"} 
                className="rounded-full whitespace-nowrap"
                onClick={() => setActiveCategory(cat.title)}
              >
                {cat.title}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              className="pl-10 h-12 rounded-full bg-bg-light border-none focus:ring-2 focus:ring-accent/20" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {filteredCategories.map((category, i) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                  
                  {/* TEXT CONTAINER */}
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`flex-1 space-y-6 order-2 ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div>
                      <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest mb-4">
                        Product Category
                      </div>
                      <h2 className="text-3xl font-black text-primary mb-4">{category.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <div className="mt-4">
                      <Button variant="default" className="mr-4" onClick={() => navigate(`/products/${category.id}`)}>
                        View Products
                      </Button>
                    </div>
                  </motion.div>

                  {/* IMAGE CONTAINER */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`flex-1 relative aspect-video rounded-[2rem] overflow-hidden bg-bg-light border border-secondary/10 shadow-md order-1 ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    {category.image ? (
                      <img src={category.image} alt={category.title} className="w-full h-full object-contain p-6" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 italic font-bold text-2xl">
                        {category.title} Visual
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </motion.div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;