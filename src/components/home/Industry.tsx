import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Industry = () => {
  const navigate = useNavigate();
  return (
    <section className="py-32 bg-primary overflow-hidden relative">
      {/* Background abstract element */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-secondary/10 skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col">
        <div className="flex justify-between items-end mb-12 lg:mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="text-accent font-bold uppercase tracking-widest text-xs mb-4">Sector Expertise</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Solutions by Sector</h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              {SITE_CONTENT.industries.intro}
            </p>
          </div>
          <Button 
            size="lg" 
            variant="cta"
            className="hidden lg:flex px-10 py-8 text-lg group"
            onClick={() => navigate("/industries")}
          >
            All Industry Solutions
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONTENT.industries.sectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              id={sector.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col lg:block h-auto lg:h-[450px] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10"
            >
              {/* Mobile Image - appears first on mobile */}
              {sector.image && (
                <div className="order-1 lg:hidden w-full h-64 sm:h-72 rounded-2xl overflow-hidden">
                  <img src={sector.image} alt={`${sector.title} visual`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}

              {/* Desktop Image - as a background */}
              {sector.image && (
                <div className="hidden lg:block absolute inset-0 w-full h-full z-0">
                  <img
                    src={sector.image}
                    alt={`${sector.title} visual`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10" />
                  <div className="hidden lg:block absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors duration-500 z-10" />
                  <div className="hidden lg:flex absolute inset-0 items-center justify-center text-white/10 font-bold italic group-hover:scale-110 transition-transform duration-1000 z-10">
                    {sector.title} Visual
                  </div>
                </div>
              )}

              {/* Content Wrapper - absolute overlay on desktop, flex container on mobile */}
              <div className="relative flex flex-col order-2 lg:order-none lg:flex-1 p-8 lg:p-10 lg:absolute lg:bottom-0 lg:left-0 lg:w-full z-20 bg-primary/20 lg:bg-transparent">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 lg:group-hover:text-accent transition-colors">{sector.title}</h3>

                <p className="text-white/60 font-medium leading-relaxed mb-6 lg:mb-8 lg:opacity-0 lg:group-hover:opacity-100 lg:h-0 lg:group-hover:h-auto overflow-hidden transition-all duration-500">
                  {sector.description}
                </p>

                <div className="mt-auto">
                  <Link to={`/industries#${sector.id}`}>
                    <button className="flex items-center space-x-3 text-white font-black text-sm uppercase tracking-widest group/btn">
                      <span>Explore Sector</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-accent transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Button at the bottom */}
        <div className="mt-12 flex justify-center lg:hidden">
          <Button 
            size="lg" 
            variant="cta"
            className="w-full sm:w-auto px-10 py-8 text-lg group"
            onClick={() => navigate("/industries")}
          >
            All Industry Solutions
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
