import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONTENT } from "@/data/content";

export const ContactSection = () => {
  return (
    <section className="py-16 bg-primary relative overflow-hidden bg-tech-grid">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Have questions? Feel free to write us</h2>
              <p className="text-white/70 text-lg">
                Get in touch with our experts for any industrial automation or electrical switchgear inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-accent/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call Expert</h4>
                  <p className="text-white/70 font-medium">{SITE_CONTENT.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-accent/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Write Email</h4>
                  <p className="text-white/70 font-medium">{SITE_CONTENT.contact.email}</p>
                  <p className="text-white/40 text-xs mt-1">{SITE_CONTENT.contact.salesEmail}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-accent/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Visit Office</h4>
                  <p className="text-white/70 font-medium">{SITE_CONTENT.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-accent/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">WhatsApp</h4>
                  <p className="text-white/70 font-medium">Instant Response</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-glow-blue border border-white/10 relative"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send an Inquiry</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70">Your Name</label>
                  <Input placeholder="John Doe" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70">Phone Number</label>
                  <Input placeholder="+91 00000 00000" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70">Industry Sector</label>
                  <Input placeholder="Automotive" className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70">Your Message</label>
                <Textarea placeholder="Tell us about your requirement..." className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20" />
              </div>
              <Button size="lg" variant="cta" className="w-full h-14 text-lg">
                Submit Inquiry
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
