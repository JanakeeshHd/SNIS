import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SITE_CONTENT } from "@/data/content";
import { Phone, Mail, MapPin, Send, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#2F4858] text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are here to help you with your industrial automation and electrical needs.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(158,228,147,0.1),transparent)]" />
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 rounded-3xl bg-[#DAF7DC] border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-[#2F4858] flex items-center justify-center text-white mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#2F4858] mb-2">Call Us</h3>
                <p className="text-slate-600 mb-1">Direct Line:</p>
                <a href={`tel:${SITE_CONTENT.contact.phone}`} className="text-lg font-bold text-[#2F4858] hover:text-[#86BBD8] transition-colors">
                  {SITE_CONTENT.contact.phone}
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-[#DAF7DC] border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-[#86BBD8] flex items-center justify-center text-white mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#2F4858] mb-2">Email Us</h3>
                <p className="text-slate-600 mb-1">Inquiries:</p>
                <a href={`mailto:${SITE_CONTENT.contact.email}`} className="text-lg font-bold text-[#2F4858] hover:text-[#86BBD8] transition-colors block">
                  {SITE_CONTENT.contact.email}
                </a>
                <a href={`mailto:${SITE_CONTENT.contact.salesEmail}`} className="text-slate-500 text-sm mt-1">
                  {SITE_CONTENT.contact.salesEmail}
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-[#DAF7DC] border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-[#9EE493] flex items-center justify-center text-[#2F4858] mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#2F4858] mb-2">Our Office</h3>
                <p className="text-slate-600">{SITE_CONTENT.contact.address}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100">
                <h2 className="text-3xl font-bold text-[#2F4858] mb-8">Send a Detailed Inquiry</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <Input placeholder="Enter your name" className="h-14 bg-[#DAF7DC] border-none focus:ring-2 focus:ring-[#86BBD8]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <Input type="email" placeholder="Enter your email" className="h-14 bg-[#DAF7DC] border-none focus:ring-2 focus:ring-[#86BBD8]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <Input placeholder="Your company" className="h-14 bg-[#DAF7DC] border-none focus:ring-2 focus:ring-[#86BBD8]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Subject</label>
                      <Input placeholder="How can we help?" className="h-14 bg-[#DAF7DC] border-none focus:ring-2 focus:ring-[#86BBD8]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <Textarea placeholder="Describe your requirements in detail..." className="min-h-[160px] bg-[#DAF7DC] border-none focus:ring-2 focus:ring-[#86BBD8]" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#9EE493] hover:bg-[#9EE493]/90 text-[#2F4858] h-16 text-lg rounded-xl">
                    Submit Inquiry
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-10 h-10 rounded-lg bg-[#DAF7DC] flex items-center justify-center text-[#2F4858]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#2F4858]">Business Hours</p>
                      <p className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-slate-200 w-full flex items-center justify-center relative grayscale">
        <div className="text-slate-400 flex flex-col items-center">
          <Globe className="w-12 h-12 mb-4" />
          <span className="text-lg font-medium italic">Google Maps Integration - {SITE_CONTENT.contact.address}</span>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
