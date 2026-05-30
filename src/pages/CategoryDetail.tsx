import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, Download } from "lucide-react";
import { motion } from "framer-motion";

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

  const relatedProducts = SITE_CONTENT.products.featured.filter(p => p.category === category.title);

  return (
    <Layout>
      <section className="bg-[#F8F9FA] border-b py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center text-slate-500 hover:text-[#0F2C59] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C59] mb-6">{category.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#00A8CC] text-white hover:bg-[#00A8CC]/90">Request Datasheet</Button>
                <Button size="lg" variant="outline" className="border-[#0F2C59] text-[#0F2C59]">Technical Inquiry</Button>
              </div>
            </div>
            <div className="aspect-video bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center">
               <span className="text-slate-400 font-medium italic">{category.title} Visual</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0F2C59] mb-8">Product Range & Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedProducts.length > 0 ? (
                    relatedProducts.map((product, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="p-6 rounded-2xl bg-[#F8F9FA] border border-slate-100 flex items-center justify-between group"
                      >
                        <span className="font-bold text-[#0F2C59]">{product.name}</span>
                        <ArrowRight className="w-4 h-4 text-[#00A8CC] group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-2 p-12 bg-[#F8F9FA] rounded-2xl text-center text-slate-400">
                      Detailed product listings coming soon.
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0F2C59] mb-8">Why Choose Our {category.title}?</h2>
                <div className="space-y-4">
                  {[
                    "Precision-engineered for extreme industrial environments",
                    "Seamless integration with existing automation systems",
                    "High-performance durability and reliability",
                    "Full technical documentation and support provided",
                    "Certified for global industrial standards"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-industrial-green shrink-0" />
                      <span className="text-slate-600 text-lg">{item}</span>
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
                className="bg-[#0F2C59] rounded-3xl p-8 text-white shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">Technical Resources</h3>
                <div className="space-y-4">
                  {[
                    "Full Product Catalog 2024",
                    "Installation Guide",
                    "Technical Datasheets",
                    "Safety Certifications"
                  ].map((doc, i) => (
                    <button key={i} className="w-full flex items-center justify-between p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-left group">
                      <span className="text-sm font-medium">{doc}</span>
                      <Download className="w-4 h-4 text-[#00A8CC] group-hover:scale-110 transition-transform" />
                    </button>
                  ))}
                </div>
                <Button className="w-full mt-8 bg-[#00A8CC] hover:bg-[#00A8CC]/90 text-white">Download All Resources</Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#0F2C59] rounded-3xl p-8 text-white"
              >
                <h3 className="text-xl font-bold mb-4">Inquiry Support</h3>
                <p className="text-slate-400 text-sm mb-6">Need specific technical specifications or a bulk quote?</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#00A8CC]/20 flex items-center justify-center text-[#00A8CC]">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-sm">24-hour response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#00A8CC]/20 flex items-center justify-center text-[#00A8CC]">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Technical expert consultation</span>
                  </div>
                </div>
                <Button className="w-full bg-white text-slate-900 hover:bg-slate-100" onClick={() => navigate("/contact")}>Send Technical Inquiry</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoryDetail;
