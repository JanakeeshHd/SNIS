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
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain p-6" />
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
