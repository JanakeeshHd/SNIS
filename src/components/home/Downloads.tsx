import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "HELUEVENT® – Solutions for Event and Media Technology",
    url: "https://online.helukabel.de/onlinecatalog/",
    type: "Link",
    size: "",
    description: "Product range and catalog for event and media cabling solutions.",
  },
  {
    title: "HELUEVENT® – Industrial Ethernet Cables",
    url: "https://oxomi.com/p/2024602/document/10607266",
    type: "PDF",
    size: "",
    description: "Industrial Ethernet cable datasheet and specifications.",
  },
  {
    title: "F&B Connectors – Food & Beverage Connectors",
    url: "https://www.murrelektronik.com/wd_downloads/0d23d57890b5c1d72c1700cf101a870b73d44df9/fileadmin/user_upload/Headquarter_en_DE/Downloads/Brochures/C_Connectors_F_B_4-pager_06-25_EN.pdf",
    type: "PDF",
    size: "",
    description: "Hygienic connector solutions for food & beverage applications.",
  },
  {
    title: "IO-Link I/O Modules (Analog & Digital)",
    url: "https://www.murrelektronik.com/wd_downloads/e9b5161b56f7edf238f6f965f9b139565f92b98e/fileadmin/user_upload/Headquarter_en_DE/Downloads/Brochures/B_IO-Link-Module_06-25_EN.pdf",
    type: "PDF",
    size: "",
    description: "IO-Link and field I/O modules brochure.",
  },
  {
    title: "Bring Your Machine To Life – Connectivity",
    url: "https://www.murrelektronik.com/wd_downloads/23c1e7efc6634b4293234732e455c155702534d7/fileadmin/user_upload/Headquarter_en_DE/Downloads/Brochures/B_Bring-your-machine-to-life_Connectivity_04-2025_EN.pdf",
    type: "PDF",
    size: "",
    description: "Connectivity solutions to bring machines to life.",
  },
  {
    title: "Vario-X connected – Automation Solutions",
    url: "https://www.murrelektronik.com/wd_downloads/58075e92ec933af9a6abb21bbfb136fe02c39f62/fileadmin/user_upload/Headquarter_en_DE/Downloads/Brochures/Vario-X_Broschu%CC%88re_EN.pdf",
    type: "PDF",
    size: "",
    description: "Vario-X connectivity and distribution solutions.",
  },
  {
    title: "Machine Vision – Application Solutions",
    url: "https://www.murrelektronik.com/wd_downloads/7565831a0bc61a14c9a975ea42bc4de0cc0efa03/fileadmin/user_upload/Headquarter_en_DE/Downloads/Brochures/B_Machine-Vision_01-25_EN.pdf",
    type: "PDF",
    size: "",
    description: "Modular machine vision solutions for fast deployment.",
  },
];

export const Downloads = () => {
  

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-bg-light rounded-[3.5rem] p-8 lg:p-20 overflow-hidden relative border border-slate-100">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,102,204,0.05),transparent)] pointer-events-none" />

          <div className="grid grid-cols-1 gap-12 relative z-10">
            <div>
              <div className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Technical Library</div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">Resources & Technical Documentation</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-12">
                Access our comprehensive library of technical documentation, globally-certified product catalogs, and expert industrial guides.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((res, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-bg-light border border-slate-100 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-muted-foreground" />
                      </div>

                      <div className="flex-1 w-full">
                        <div>
                          <div className="text-xs uppercase font-black text-accent mb-2">
                            {res.url?.includes('murrelektronik') ? 'Murrelektronik' : res.url?.includes('helukabel') ? 'Helukabel' : res.url?.includes('oxomi') ? 'Oxomi' : 'External'}
                          </div>
                          <h4 className="font-black text-foreground group-hover:text-secondary transition-colors text-lg">{res.title}</h4>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{res.description}</p>
                        </div>
                        <div className="mt-3 text-xs text-muted-foreground/60">{res.type}{res.size ? ` • ${res.size}` : ''}</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      {res.url ? (
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="block">
                          <Button variant="cta" className="w-full px-4 py-2 hover:scale-105 hover:shadow-lg transition-all duration-300">Downloads</Button>
                        </a>
                      ) : (
                        <Button variant="outline" className="w-full px-4 py-2 hover:scale-105 hover:shadow-lg transition-all duration-300">Unavailable</Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              
            </div>
            
            {/* Right-side visual box removed */}
          </div>
        </div>
      </div>
    </section>
  );
};
