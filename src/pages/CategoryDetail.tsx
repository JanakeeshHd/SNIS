import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

type ProductItem = {
  name: string;
  category: string;
  description: string;
  image?: string;
};

const CategoryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const category = SITE_CONTENT.products.categories.find(c => c.id === id);

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-4xl font-bold mb-8">Category Not Found</h1>
          <Button onClick={() => navigate("/products")}>Back to Products</Button>
        </div>
      </Layout>
    );
  }

  const relatedProducts = (SITE_CONTENT.products.items as ProductItem[]).filter(
    (product) => product.category === category.title,
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-8">
        <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-primary mb-8">Product Range & Features</h2>
            {relatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((product: ProductItem, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group relative flex flex-col bg-white rounded-[2rem] border border-secondary/15 hover:border-accent hover:shadow-card-hover transition-all duration-500 p-3"
                  >
                    <div className="relative aspect-square rounded-[1.7rem] bg-bg-light overflow-hidden mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black text-secondary rounded-full shadow-soft uppercase tracking-wider">
                          Product
                        </span>
                      </div>
                      
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-all duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform duration-700">
                          <div className="relative">
                             <div className="w-24 h-24 border-2 border-slate-200 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform" />
                             <div className="absolute top-0 left-0 w-24 h-24 border-2 border-accent/20 rounded-lg transform -rotate-12 group-hover:rotate-0 transition-transform" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="px-5 pb-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-black text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium mb-6 line-clamp-3">
                        {product.description}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                        <Button variant="default" className="rounded-xl font-bold px-6" onClick={() => navigate('/contact')}>
                          Inquiry
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-12 bg-bg-light rounded-2xl text-center text-muted-foreground/40">
                Detailed product listings coming soon.
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryDetail;
