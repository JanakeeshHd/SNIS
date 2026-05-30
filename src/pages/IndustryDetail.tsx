import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Download } from "lucide-react";
import { motion } from "framer-motion";

const IndustryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const sector = SITE_CONTENT.industries.sectors.find(s => s.id === id);

  if (!sector) {
    return (
      <Layout>
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-4xl font-bold mb-8">Industry Sector Not Found</h1>
          <Button onClick={() => navigate("/industry")}>Back to Industries</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-bg-light border-b py-12">
        <div className="container mx-auto px-4">
          <Link to="/industry" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Industries
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{sector.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {sector.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="cta">Industry Solutions</Button>
                <Button size="lg" variant="outline">Request Consultation</Button>
              </div>
            </div>
            <div className="aspect-video bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center">
               <span className="text-muted-foreground/40 font-medium italic">{sector.title} Sector Visual</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Sector Specific Expertise</h2>
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    In the {sector.title} sector, precision and reliability are paramount. SNIS Industries provides tailored solutions that address the unique challenges of this industry, from decentralized installation concepts to high-performance power management.
                  </p>
                  <p>
                    Our collaboration with global technology leaders allows us to bring the most innovative and efficient automation strategies to your {sector.title} facility.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Key Benefits for {sector.title}</h2>
                <div className="space-y-4">
                  {[
                    "Reduction in installation and maintenance costs",
                    "Minimization of expensive machine downtimes",
                    "Modular and scalable automation architectures",
                    "Compliance with global industrial standards",
                    "Future-proof technology integration"
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
                    <h3 className="text-2xl font-black mb-4">Industry Guide</h3>
                    <p className="text-white/70 mb-8 text-sm leading-relaxed">Download our comprehensive guide for automation in the {sector.title} sector.</p>
                    <Button variant="cta" className="w-full">
                       <Download className="w-4 h-4 mr-2" />
                       Download Guide
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
                 <h3 className="text-xl font-black text-primary mb-6">Expert Consultation</h3>
                 <p className="text-muted-foreground text-sm mb-8">Our industry specialists are ready to discuss your specific requirements.</p>
                 <Button variant="outline" className="w-full" onClick={() => navigate("/contact")}>
                    Talk to a Specialist
                 </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustryDetail;
