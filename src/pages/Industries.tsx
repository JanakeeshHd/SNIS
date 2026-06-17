import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import automotiveImage from "@/assets/Automotive2.png";
import foodImage from "@/assets/food2.png";
import logisticImage from "@/assets/logistic2.png";
import roboticsImage2 from "@/assets/robotics2.png";
import mobileAppsImage2 from "@/assets/mobile application2.png";
import machineToolImage2 from "@/assets/machine tool2.png";

const Industries = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const sectors = SITE_CONTENT.industries.sectors.map((sector) => {
    if (sector.id === "automotive") return { ...sector, image: automotiveImage };
    if (sector.id === "food-beverage") return { ...sector, image: foodImage };
    if (sector.id === "logistics") return { ...sector, image: logisticImage };
    if (sector.id === "robotics") return { ...sector, image: roboticsImage2 };
    if (sector.id === "mobile-applications") return { ...sector, image: mobileAppsImage2 };
    if (sector.id === "machine-tools") return { ...sector, image: machineToolImage2 };
    return sector;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-white py-16 relative overflow-hidden bg-tech-grid">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Solutions by Sector</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {SITE_CONTENT.industries.intro}
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 translate-x-1/2" />
      </section>

      {/* Full Content Industry List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          {sectors.map((sector, i) => (
            <div 
              key={sector.id} 
              id={sector.id} 
              className="scroll-mt-32"
            >
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                
                {/* TEXT CONTAINER */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={cn(
                    "flex-1 space-y-6",
                    "order-2", /* Forces text below the image on mobile */
                    i % 2 === 1 ? "lg:order-2" : "lg:order-1" /* Alternates on desktop */
                  )}
                >
                  <div>
                    <h2 className="text-4xl font-black text-primary mb-4">{sector.title}</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed text-justify">
                      {sector.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Custom-engineered automation concepts",
                      "Reduction in installation & maintenance costs",
                      "Modular and scalable architectures",
                      "Compliance with global industrial standards"
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <Button variant="default" onClick={() => navigate("/contact")}>
                      Get Sector Solution
                    </Button>
                  </div>
                </motion.div>

                {/* IMAGE CONTAINER */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "flex-1 relative aspect-video rounded-[3rem] overflow-hidden bg-bg-light border border-secondary/10 shadow-xl",
                    "order-1", /* Forces image to the top on mobile */
                    i % 2 === 1 ? "lg:order-1" : "lg:order-2" /* Alternates on desktop */
                  )}
                >
                  {sector.image ? (
                    <img 
                      src={sector.image} 
                      alt={sector.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 italic font-bold text-2xl">
                      {sector.title} Visual
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[3.5rem] p-8 lg:p-16 text-white text-center relative overflow-hidden bg-tech-grid">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Optimize Your Facility?</h2>
              <p className="text-xl text-white/70 mb-8 text-justify">
                Our team of industrial experts is ready to help you implement the most efficient automation strategies for your specific sector.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact">
                  <Button size="lg" variant="cta" className="px-12 py-8 text-lg">
                    Consult an Expert
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="px-12 py-8 text-lg border-white/20 text-white hover:bg-white/10">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,transparent_70%)] pointer-events-none" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;