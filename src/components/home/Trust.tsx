import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "S. Sathish", date: "May 2026", company: "Automotive OEM", text: "Exceptional service and genuine Siemens components. Their technical team is highly knowledgeable." },
  { name: "Pragna P.", date: "March 2026", company: "Electrical Contractor", text: "Fastest delivery of connectors and cables in Bangalore. Highly reliable partner." },
  { name: "Ravi Nagpal", date: "Dec 2025", company: "SPM Builder", text: "Great pricing for PLCs and HMIs. Their after-sales support is truly 24/7." },
];

export const Trust = () => {
  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          {/* Satisfaction Dashboard */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-bg-light rounded-[3rem] border border-slate-100 shadow-soft">
              <h2 className="text-3xl font-black text-foreground mb-2">Market Reputation</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-6xl font-black text-secondary">4.8</div>
                <div>
                   <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                   </div>
                   <div className="text-sm font-bold text-muted-foreground mt-1 uppercase tracking-widest">Based on 500+ Clients</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Product Quality", value: 100 },
                  { label: "Delivery Speed", value: 98 },
                  { label: "Technical Support", value: 95 },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-xs font-black uppercase tracking-wider mb-2">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="text-secondary">{stat.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-secondary rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <div className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Client Testimonials</div>
              <h3 className="text-4xl font-black text-foreground mb-3 tracking-tight">Voices of Industrial Excellence</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white rounded-3xl border border-secondary/10 shadow-premium hover:border-accent transition-all duration-300"
                >
                  <div className="flex text-accent mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground font-medium leading-relaxed mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div>
                      <div className="text-sm font-black text-foreground">{review.name}</div>
                      <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{review.company}</div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">{review.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
