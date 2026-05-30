import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/data/content";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-[#DAF7DC]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-slate-200 flex items-center justify-center">
                {/* Replace with actual image */}
                <span className="text-slate-400 font-medium italic">SNIS Industries Headquarters</span>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-[#9EE493] text-[#2F4858] p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold mb-1">15+</div>
              <div className="text-sm font-medium uppercase tracking-wider">Years of Industrial<br />Excellence</div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#86BBD8]/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#336699] font-bold tracking-widest uppercase text-sm mb-4 block">About SNIS Industries</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2F4858] leading-tight mb-6">
                Empowering Industry Through Automation & Electrical Excellence
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {SITE_CONTENT.company.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Technical Expertise",
                "Quality-Assured Products",
                "Reliable After-Sales Support",
                "Customer-Centric Approach",
                "Value-Driven Solutions",
                "Strong Partnerships"
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#9EE493]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-6">
              <Link to="/about">
                <Button size="lg" className="bg-[#2F4858] hover:bg-[#2F4858]/90 text-white px-8">
                  Learn More About Us
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-200" />
                <div>
                  <div className="text-sm font-bold text-[#2F4858]">Director's Message</div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">SNIS Industries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
