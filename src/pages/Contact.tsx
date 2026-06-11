import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Phone, Mail, MapPin, Send, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import type { FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company}`,
      `Subject: ${formData.subject}`,
      "",
      `Message:\n${formData.message}`,
    ].join("\n");

    const subject = encodeURIComponent(formData.subject || "New Inquiry");
    const encodedBody = encodeURIComponent(body);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE_CONTENT.contact.salesEmail)}&su=${subject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:${SITE_CONTENT.contact.salesEmail}?subject=${subject}&body=${encodedBody}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    window.location.href = mailtoUrl;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 relative overflow-hidden bg-tech-grid">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We are here to help you with your industrial automation and electrical needs.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.05),transparent)]" />
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 rounded-3xl bg-bg-light border border-slate-100 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-1">Direct Line:</p>
                <a href={`tel:${SITE_CONTENT.contact.phone.replace(/\s+/g, "")}`} className="text-lg font-extrabold text-primary hover:text-secondary transition-colors inline-block">
                  {SITE_CONTENT.contact.phone}
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-bg-light border border-slate-100 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                <a href={`mailto:${SITE_CONTENT.contact.salesEmail}`} className="text-lg font-bold text-primary hover:text-secondary transition-colors block">
                  {SITE_CONTENT.contact.salesEmail}
                </a>
                <a href={`mailto:${SITE_CONTENT.contact.email}`} className="text-lg font-bold text-primary hover:text-secondary transition-colors block mt-3">
                  {SITE_CONTENT.contact.email}
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-bg-light border border-slate-100 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-primary mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Our Office</h3>
                <p className="text-muted-foreground">{SITE_CONTENT.contact.address}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100">
                <h2 className="text-3xl font-bold text-primary mb-6">Send a Detailed Inquiry</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">Full Name</label>
                      <Input
                        placeholder="Enter your name"
                        className="h-14 bg-bg-light border-none focus:ring-2 focus:ring-secondary"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">Email Address</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="h-14 bg-bg-light border-none focus:ring-2 focus:ring-secondary"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">Company Name</label>
                      <Input
                        placeholder="Your company"
                        className="h-14 bg-bg-light border-none focus:ring-2 focus:ring-secondary"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-foreground">Subject</label>
                      <Input
                        placeholder="How can we help?"
                        className="h-14 bg-bg-light border-none focus:ring-2 focus:ring-secondary"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground">Message</label>
                    <Textarea
                      placeholder="Describe your requirements in detail..."
                      className="min-h-[160px] bg-bg-light border-none focus:ring-2 focus:ring-secondary"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" size="lg" variant="cta" className="w-full h-16 text-lg rounded-xl">
                    Submit Inquiry
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-bg-light flex items-center justify-center text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Business Hours</p>
                      <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm">Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-72 bg-muted w-full flex items-center justify-center relative grayscale">
        <div className="text-muted-foreground flex flex-col items-center">
          <Globe className="w-12 h-12 mb-4" />
          <span className="text-lg font-medium italic">Google Maps Integration - {SITE_CONTENT.contact.address}</span>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;