import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Shield, Target, Eye, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden bg-tech-grid">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About SNIS Industries</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Karnataka’s leading solution provider in Industrial Automation and Electrical Switchgear Marketing.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 translate-x-1/2" />
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">Engineering Smarter Industries</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>{SITE_CONTENT.company.description}</p>
                <p>{SITE_CONTENT.company.aboutLong}</p>
                <p>{SITE_CONTENT.company.aboutExtra}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-bg-light border border-slate-100 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Values</h3>
                <p className="text-muted-foreground text-sm">Technical expertise, quality products, and reliable support are the pillars of our success.</p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-bg-light border border-slate-100 shadow-soft"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-sm">To deliver high-quality, reliable, and future-ready solutions tailored to our customers' needs.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Vision Statement</h2>
              </div>
              <p className="text-muted-foreground text-xl italic leading-relaxed">
                "{SITE_CONTENT.company.vision}"
              </p>
            </div>

            <div className="bg-white p-12 rounded-3xl shadow-xl border-t-4 border-accent">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Mission Statement</h2>
              </div>
              <ul className="space-y-6">
                {SITE_CONTENT.company.mission.map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
