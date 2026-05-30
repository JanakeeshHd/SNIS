import { motion } from "framer-motion";
import { Download, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  { title: "Main Product Catalog", size: "12.4 MB", type: "PDF" },
  { title: "Industrial Automation Guide", size: "8.2 MB", type: "PDF" },
  { title: "Switchgear Technical Specs", size: "5.1 MB", type: "PDF" },
  { title: "Installation Best Practices", size: "3.7 MB", type: "PDF" },
];

export const Downloads = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-bg-light rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative border border-slate-100">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,102,204,0.05),transparent)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Technical Library</div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">Resources & Technical Documentation</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-12">
                Access our comprehensive library of technical documentation, globally-certified product catalogs, and expert industrial guides.
              </p>
              
              <div className="space-y-4">
                {resources.map((res, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-6 rounded-3xl bg-white border border-secondary/10 hover:shadow-card-hover transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-foreground group-hover:text-secondary transition-colors">{res.title}</h4>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="px-2 py-0.5 bg-muted text-[10px] font-black text-muted-foreground rounded uppercase tracking-wider">{res.type}</span>
                          <span className="text-xs text-muted-foreground/60 font-bold">{res.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-muted-foreground/30 group-hover:text-accent transition-colors">
                      <Download className="w-6 h-6" />
                    </Button>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                variant="default"
                className="mt-12 px-10 py-8 text-lg rounded-2xl group"
              >
                Access Full Library
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-white rounded-[3rem] shadow-corporate border-8 border-slate-100 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-bg-light opacity-50 group-hover:opacity-0 transition-opacity" />
                 <Download className="w-40 h-40 text-muted-foreground/10 group-hover:text-accent/20 group-hover:scale-110 transition-all duration-700" />
                 
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center p-12 text-center pointer-events-none">
                    <div className="text-muted-foreground/30 italic font-medium">Technical Resource Visual</div>
                 </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 bg-accent text-white p-6 rounded-3xl shadow-glow font-black text-center"
              >
                <div className="text-2xl">2026</div>
                <div className="text-[10px] uppercase tracking-widest">Edition</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
