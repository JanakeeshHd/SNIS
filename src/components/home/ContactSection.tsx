import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE_CONTENT } from "@/data/content";
import { useState } from "react";
import type { FormEvent } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Industry: ${formData.industry}`,
      "",
      `Message:\n${formData.message}`,
    ].join("\n");

    const subject = encodeURIComponent(formData.industry || "New Inquiry");
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE_CONTENT.contact.salesEmail)}&su=${subject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:${SITE_CONTENT.contact.salesEmail}?subject=${subject}&body=${encodedBody}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    window.location.href = mailtoUrl;
  };

  const whatsappUrl = `https://wa.me/${SITE_CONTENT.contact.phone.replace(/\s+/g, "")}`;

  return (
    <section className="py-8 bg-primary relative overflow-hidden bg-tech-grid">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-3">Have questions? Feel free to write us</h2>
              <p className="text-white/70 text-lg">
                Get in touch with our experts for any industrial automation or electrical switchgear inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                  <a href={`mailto:${SITE_CONTENT.contact.salesEmail}`} className="text-white font-semibold hover:text-accent transition-colors block">
                    {SITE_CONTENT.contact.salesEmail}
                  </a>
                  <a href={`mailto:${SITE_CONTENT.contact.email}`} className="text-white font-semibold hover:text-accent transition-colors block mt-1">
                    {SITE_CONTENT.contact.email}
                  </a>
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

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-accent/50 transition-all duration-300"
                aria-label="Open WhatsApp chat"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">WhatsApp</h4>
                  <p className="text-white/70 font-medium">Chat with us now</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 md:p-5 shadow-glow-blue border border-white/10 relative"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Send an Inquiry</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70">Phone Number</label>
                  <Input
                    placeholder="+91 00000 00000"
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/70">Industry Sector</label>
                  <Input
                    placeholder="Automotive"
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/70">Your Message</label>
                <Textarea
                  placeholder="Tell us about your requirement..."
                  className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
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
