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
                  <a href={`tel:${SITE_CONTENT.contact.phone.replace(/\s+/g, "")}`} className="text-white font-bold hover:text-accent transition-colors inline-block">
                    {SITE_CONTENT.contact.phone}
                  </a>
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
                  <a 
                    href="https://maps.app.goo.gl/kj918sTJ9hqHRKaR6"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white font-semibold hover:text-accent transition-colors block mt-1"
                  >
                    {SITE_CONTENT.contact.address}
                  </a>
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
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 md:p-5 shadow-glow-blue border border-white/10 relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Office Location</h3>
            <div className="w-full h-96 rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.297!2d77.500889!3d12.977333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae138d1a1a1a1a%3A0x1a1a1a1a1a1a1a1a!2s85%2F1%20C%20Block%20RHCS%20Layout%20Srigandadakaval%20Bangalore!5e0!3m2!1sen!2sin!4v1715340000000&q=12.977333,77.500889"
              ></iframe>
            </div>
            <div className="mt-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white/70 text-sm"><span className="text-accent font-bold">Address:</span> {SITE_CONTENT.contact.address}</p>
              <p className="text-white/70 text-sm mt-2"><span className="text-accent font-bold">Coordinates:</span> 12°58'38.4"N 77°30'03.2"E</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
