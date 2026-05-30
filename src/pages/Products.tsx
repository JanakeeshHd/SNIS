import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

const Products = () => {
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
      <section className="bg-[#F8F9FA] border-b py-16">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C59] mb-6">Our Products</h1>
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              className="pl-10 h-12 rounded-full" 
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredCategories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  {/* Placeholder for product image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#0F2C59] uppercase">
                    Category
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-4 group-hover:text-[#00A8CC] transition-colors">{category.title}</h3>
                  <p className="text-slate-600 mb-8 line-clamp-3">
                    {category.description}
                  </p>
                  <Link to={`/products/${category.id}`}>
                    <Button className="w-full bg-[#F8F9FA] hover:bg-[#0F2C59] hover:text-white text-[#0F2C59] border-none shadow-none group/btn">
                      View Range
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 pt-24 border-t">
            <h2 className="text-3xl font-bold text-[#0F2C59] mb-12 text-center">Featured Technical Solutions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SITE_CONTENT.products.featured.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#F8F9FA] border border-slate-100 hover:border-[#00A8CC] transition-colors">
                  <div className="text-xs font-bold text-[#00A8CC] uppercase mb-2">{item.category}</div>
                  <h4 className="font-bold text-[#0F2C59]">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
