import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Download } from "lucide-react";
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
      <section className="bg-bg-light border-b py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{category.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="cta">Request Datasheet</Button>
                <Button size="lg" variant="outline">Technical Inquiry</Button>
              </div>
            </div>
            <div className="aspect-video bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center">
               <span className="text-muted-foreground/40 font-medium italic">{category.title} Visual</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Product Range & Features</h2>
                {relatedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedProducts.map((product: ProductItem, i: number) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-card-hover transition-all duration-300"
                      >
                        <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center">
                          {product.image ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="text-muted-foreground/40 font-bold italic">Image</div>
                          )}
                        </div>

                        <div className="p-6">
                          <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{product.description}</p>
                          <div className="pt-2">
                            <Button size="sm" variant="cta" onClick={() => navigate('/contact')}>Inquiry</Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="col-span-2 p-12 bg-bg-light rounded-2xl text-center text-muted-foreground/40">
                    Detailed product listings coming soon.
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Why Choose Our {category.title}?</h2>
                <div className="space-y-4">
                  {[
                    "Precision-engineered for extreme industrial environments",
                    "Seamless integration with existing automation systems",
                    "High-performance durability and reliability",
                    "Full technical documentation and support provided",
                    "Certified for global industrial standards"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                      <span className="text-muted-foreground text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary p-8 rounded-[2.5rem] text-white shadow-glow-blue border border-white/5 relative overflow-hidden group"
              >
                 <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-4">Technical Catalog</h3>
                    <p className="text-white/70 mb-8 text-sm leading-relaxed">Download the complete technical specifications for the {category.title} range.</p>
                    <Button variant="cta" className="w-full">
                       <Download className="w-4 h-4 mr-2" />
                       Download Catalog
                    </Button>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-bg-light p-8 rounded-[2.5rem] border border-secondary/10"
              >
                 <h3 className="text-xl font-black text-primary mb-6">Need Support?</h3>
                 <p className="text-muted-foreground text-sm mb-8">Our engineers are available for technical consultation and deployment support.</p>
                 <Button variant="outline" className="w-full" onClick={() => navigate("/contact")}>
                    Talk to an Engineer
                 </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryDetail;
