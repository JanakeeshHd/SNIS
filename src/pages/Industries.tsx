import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Industries = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden bg-tech-grid">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industrial Sectors</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {SITE_CONTENT.industries.intro}
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 translate-x-1/2" />
      </section>

      {/* Industry List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_CONTENT.industries.sectors.map((sector, i) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-primary border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center text-white/10 font-bold italic group-hover:scale-110 transition-transform duration-1000">
                  {sector.title} Visual
                </div>

                <div className="absolute bottom-0 left-0 w-full p-10 z-20">
                  <h3 className="text-3xl font-black text-white mb-4 group-hover:text-accent transition-colors">{sector.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    {sector.description}
                  </p>
                  <Link to={`/industry/${sector.id}`}>
                    <button className="flex items-center space-x-3 text-white font-black text-sm uppercase tracking-widest group/btn">
                      <span>Explore Sector</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-accent transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-12 lg:p-24 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-8">Technical Know-How & Experience</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {SITE_CONTENT.industries.extra}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" variant="cta">Consult an Expert</Button>
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <Globe className="w-64 h-64 text-accent opacity-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
