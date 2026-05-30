import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden bg-tech-grid">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.1),transparent)]" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 rounded-3xl bg-bg-light border border-secondary/10 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-1">Direct Line:</p>
                <a href={`tel:${SITE_CONTENT.contact.phone}`} className="text-lg font-bold text-primary hover:text-accent transition-colors">
                  {SITE_CONTENT.contact.phone}
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-bg-light border border-secondary/10 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-1">Inquiries:</p>
                <a href={`mailto:${SITE_CONTENT.contact.email}`} className="text-lg font-bold text-primary hover:text-accent transition-colors block">
                  {SITE_CONTENT.contact.email}
                </a>
                <a href={`mailto:${SITE_CONTENT.contact.salesEmail}`} className="text-muted-foreground/60 text-sm mt-1">
                  {SITE_CONTENT.contact.salesEmail}
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-bg-light border border-secondary/10 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Our Office</h3>
                <p className="text-muted-foreground">{SITE_CONTENT.contact.address}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-secondary/10">
                <h2 className="text-3xl font-bold text-primary mb-8">Send a Detailed Inquiry</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground">Full Name</label>
                      <Input placeholder="Enter your name" className="h-14 bg-bg-light border-none focus:ring-2 focus:ring-accent/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground">Email Address</label>
                      <Input type="email" placeholder="Enter your email" className="h-14 bg-bg-light border-none focus:ring-2 focus:ring-accent/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground">Company Name</label>
                      <Input placeholder="Your company" className="h-14 bg-bg-light border-none focus:ring-2 focus:ring-accent/20" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground">Subject</label>
                      <Input placeholder="How can we help?" className="h-14 bg-bg-light border-none focus:ring-2 focus:ring-accent/20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground">Message</label>
                    <Textarea placeholder="Describe your requirements in detail..." className="min-h-[160px] bg-bg-light border-none focus:ring-2 focus:ring-accent/20" />
                  </div>
                  <Button type="submit" size="lg" variant="default" className="w-full h-16 text-lg rounded-xl">
                    Submit Inquiry
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>

                <div className="mt-12 pt-8 border-t border-secondary/10">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-bg-light flex items-center justify-center text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-primary">Business Hours</p>
                      <p className="text-xs">Mon - Sat: 9:00 AM - 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.4661258!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfad3685100e2b!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1717070000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="SNIS Industries Location"
        />
        <div className="absolute inset-0 pointer-events-none border-y border-secondary/10 shadow-[inset_0_0_100px_rgba(10,25,47,0.1)]" />
      </section>
    </Layout>
  );
};

export default Contact;
