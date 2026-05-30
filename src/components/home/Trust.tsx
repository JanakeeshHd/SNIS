import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

const reviews = [
  { name: "S. Sathish", date: "May 2026", company: "Automotive OEM", text: "Exceptional service and genuine Siemens components. Their technical team is highly knowledgeable." },
  { name: "Pragna P.", date: "March 2026", company: "Electrical Contractor", text: "Fastest delivery of connectors and cables in Bangalore. Highly reliable partner." },
  { name: "Ravi Nagpal", date: "Dec 2025", company: "SPM Builder", text: "Great pricing for PLCs and HMIs. Their after-sales support is truly 24/7." },
];

export const Trust = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Satisfaction Dashboard */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-10 bg-[#DAF7DC] rounded-[3rem] border border-slate-100 shadow-soft">
              <h2 className="text-3xl font-black text-[#2F4858] mb-6">Market Reputation</h2>
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-6xl font-black text-[#2F4858]">4.8</div>
                <div>
                   <div className="flex text-[#9EE493]">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                   </div>
                   <div className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest">Based on 500+ Clients</div>
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
                      <span className="text-slate-500">{stat.label}</span>
                      <span className="text-[#2F4858]">{stat.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-[#9EE493] rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="text-[#336699] font-bold uppercase tracking-widest text-xs mb-4">Client Testimonials</div>
              <h3 className="text-4xl font-black text-[#2F4858] mb-10 tracking-tight">Voices of Industrial Excellence</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white rounded-3xl border border-slate-100 shadow-premium hover:border-[#86BBD8] transition-colors"
                >
                  <div className="flex text-[#9EE493] mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 italic">"{review.text}"</p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div>
                      <div className="text-sm font-black text-[#2F4858]">{review.name}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{review.company}</div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">{review.date}</div>
                  </div>
                </motion.div>
              ))}
              
              <div className="p-8 bg-[#2F4858] rounded-3xl flex flex-col justify-center items-center text-center text-white relative overflow-hidden group cursor-pointer">
                 <div className="relative z-10">
                    <MessageSquare className="w-12 h-12 mb-4 mx-auto text-[#9EE493]" />
                    <h4 className="text-xl font-black mb-2">Write a Review</h4>
                    <p className="text-blue-100 text-sm font-medium">Share your experience with us</p>
                 </div>
                 <div className="absolute inset-0 bg-[#9EE493] opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
