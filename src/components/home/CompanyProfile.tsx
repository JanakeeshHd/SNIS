import { motion } from "framer-motion";
import { CheckCircle2, Building2, Users, FileCheck, Landmark, Globe2 } from "lucide-react";

const stats = [
  { label: "Nature of Business", value: "Wholesaler / Distributor", icon: <Building2 className="w-5 h-5" /> },
  { label: "Total Employees", value: "Upto 50 People", icon: <Users className="w-5 h-5" /> },
  { label: "Year of Est.", value: "2011", icon: <FileCheck className="w-5 h-5" /> },
  { label: "Legal Status", value: "Proprietorship", icon: <Landmark className="w-5 h-5" /> },
  { label: "Service Area", value: "Pan India", icon: <Globe2 className="w-5 h-5" /> },
];

export const CompanyProfile = () => {
  return (
    <section className="py-32 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="text-accent font-bold uppercase tracking-widest text-xs mb-4 text-center lg:text-left">Corporate Overview</div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 text-center lg:text-left">Leading the Industrial Automation Ecosystem</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium text-center lg:text-left">
                SNIS Industries is a premier technical distribution house. We bridge the gap between global automation giants and Indian industrial requirements with unmatched expertise and operational speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center space-x-4 p-5 bg-white rounded-2xl shadow-soft border border-slate-100 transition-transform hover:-translate-y-1 hover:border-accent/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                    <div className="text-sm font-black text-foreground">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="bg-primary rounded-[3rem] p-12 text-white shadow-glow-blue relative overflow-hidden border border-white/5">
                <div className="relative z-10 space-y-8">
                   <h3 className="text-3xl font-black mb-6">Why Partner With Us?</h3>
                   <div className="space-y-6">
                      {[
                        "Authorized Channel Partner for Global Brands",
                        "IndiaMART Trust Seal Verified Vendor",
                        "Comprehensive Technical Support & Consultation",
                        "High Inventory Levels for Rapid Deployment",
                        "Custom Engineered Cabinet Solutions"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 group">
                          <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-accent group-hover:text-white" />
                          </div>
                          <span className="text-lg font-medium text-white/70 group-hover:text-white transition-colors">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full -ml-24 -mb-24 blur-3xl" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
