import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#DAF7DC] flex items-center pt-8">
      {/* Background Text Pattern */}
      <div className="absolute top-0 right-0 text-[20vw] font-black text-slate-200/40 leading-none select-none pointer-events-none -mr-20 mt-20 uppercase tracking-tighter">
        Automation
      </div>

      <div className="container relative z-10 mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-2xl bg-white shadow-soft border border-slate-100 text-[#336699] text-xs font-black uppercase tracking-widest mb-10">
              <span className="flex h-2 w-2 rounded-full bg-[#9EE493]" />
              <span>Leading Distributor in Karnataka</span>
            </div>
            
            <h1 className="text-6xl md:text-[90px] font-black text-[#2F4858] leading-[0.9] tracking-tighter mb-8">
              Industrial <br />
              <span className="text-[#336699]">Power & Control</span> <br />
              <span className="text-[#9EE493]">Systems</span>
            </h1>
            
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
              Authorized partner for <span className="text-[#2F4858] font-bold">Siemens, Murr Elektronik, and Schmersal</span>. Delivering premium automation infrastructure since 2011.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-5"
          >
            <Button size="lg" className="bg-[#2F4858] hover:bg-[#336699] text-white px-12 py-8 text-lg rounded-[2rem] shadow-premium group">
              Browse Product Range
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-200 bg-white text-[#2F4858] hover:bg-[#DAF7DC] px-12 py-8 text-lg rounded-[2rem] shadow-soft">
              Download Catalog
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] bg-white rounded-[4rem] shadow-corporate p-4 border border-slate-100 overflow-hidden group">
               <div className="w-full h-full bg-[#DAF7DC] rounded-[3rem] overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2F4858]/10 to-transparent" />
                  {/* Marketing text inside banner */}
                  <div className="relative text-center p-12">
                     <div className="text-slate-200 font-black text-8xl opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 uppercase">Premium</div>
                     <div className="relative z-10">
                        <div className="w-32 h-32 bg-white rounded-[2rem] shadow-premium mx-auto mb-8 flex items-center justify-center text-[#2F4858]">
                           <ChevronRight className="w-12 h-12" />
                        </div>
                        <div className="text-2xl font-black text-[#2F4858] mb-2 uppercase tracking-tighter">Certified Solutions</div>
                        <div className="text-slate-400 font-bold uppercase tracking-widest text-xs">Murr Elektronik Authorized</div>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-[#9EE493] text-[#2F4858] p-10 rounded-[3rem] shadow-premium z-20 text-center"
            >
              <div className="text-4xl font-black">15+</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-tight">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
