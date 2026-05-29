import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONTENT } from "@/data/content";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-industrial-blue mb-6">Have questions? Feel free to write us</h2>
              <p className="text-slate-600 text-lg">
                Get in touch with our experts for any industrial automation or electrical switchgear inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-industrial-blue/10 flex items-center justify-center text-industrial-blue shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-blue mb-1">Call Expert</h4>
                  <p className="text-slate-600 font-medium">{SITE_CONTENT.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-tech-cyan/10 flex items-center justify-center text-tech-cyan shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-blue mb-1">Write Email</h4>
                  <p className="text-slate-600 font-medium">{SITE_CONTENT.contact.email}</p>
                  <p className="text-slate-400 text-xs mt-1">{SITE_CONTENT.contact.salesEmail}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-industrial-green/10 flex items-center justify-center text-industrial-green shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-blue mb-1">Visit Office</h4>
                  <p className="text-slate-600 font-medium">{SITE_CONTENT.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-industrial-orange/10 flex items-center justify-center text-industrial-orange shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-industrial-blue mb-1">WhatsApp</h4>
                  <p className="text-slate-600 font-medium">Instant Response</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 relative"
          >
            <h3 className="text-2xl font-bold text-industrial-blue mb-8">Send an Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Name</label>
                  <Input placeholder="John Doe" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="h-12" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <Input placeholder="+91 00000 00000" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Industry Sector</label>
                  <Input placeholder="Automotive" className="h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Message</label>
                <Textarea placeholder="Tell us about your requirements..." className="min-h-[120px]" />
              </div>
              <Button size="lg" className="w-full bg-industrial-blue hover:bg-industrial-blue/90 text-white h-14 text-lg">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
