import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import logo from "@/assets/snis-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-2 border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="SNIS Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              {SITE_CONTENT.company.description}
            </p>
            <div className="flex space-x-4">
                <a href={SITE_CONTENT.contact.social.twitter} className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Twitter className="w-7 h-7 text-[#1DA1F2]" />
                </a>
                <a href={SITE_CONTENT.contact.social.facebook} className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Facebook className="w-7 h-7 text-[#1877F2]" />
                </a>
                <a href={SITE_CONTENT.contact.social.instagram} className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Instagram className="w-7 h-7 text-[#E1306C]" />
                </a>
                <a href={SITE_CONTENT.contact.social.linkedin} className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Linkedin className="w-7 h-7 text-[#0A66C2]" />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-accent pl-3">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Industries", "Downloads", "Contact Us"].map((link) => {
                const to =
                  link === "Home"
                    ? "/"
                    : link === "Industries"
                    ? "/industries"
                    : `/${link.toLowerCase().replace(" ", "-")}`;

                return (
                  <li key={link}>
                    <Link
                      to={to}
                      className="text-white/70 hover:text-accent hover:translate-x-2 transition-all inline-flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-accent" />
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-accent pl-3">Product Categories</h4>
            <ul className="space-y-4">
              {SITE_CONTENT.products.categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products/${cat.id}`} 
                    className="text-white/70 hover:text-accent hover:translate-x-2 transition-all inline-flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-accent" />
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-accent pl-3">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-white/70">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <span>{SITE_CONTENT.contact.address}</span>
              </div>
              <a href={`tel:${SITE_CONTENT.contact.phone.replace(/\s+/g, "")}`} className="flex items-center space-x-3 text-white font-bold hover:text-accent transition-colors">
                <Phone className="w-6 h-6 text-accent shrink-0" />
                <span>{SITE_CONTENT.contact.phone}</span>
              </a>
              <div className="flex flex-col space-y-2 text-white/70">
                <a href={`mailto:${SITE_CONTENT.contact.salesEmail}`} className="flex items-center space-x-3 text-white font-semibold hover:text-accent transition-colors">
                  <Mail className="w-6 h-6 text-accent shrink-0" />
                  <span>{SITE_CONTENT.contact.salesEmail}</span>
                </a>
                <a href={`mailto:${SITE_CONTENT.contact.email}`} className="flex items-center space-x-3 text-white font-semibold hover:text-accent transition-colors">
                  <Mail className="w-6 h-6 text-accent shrink-0" />
                  <span>{SITE_CONTENT.contact.email}</span>
                </a>
              </div>
            </div>
            <Button 
              variant="default"
              className="mt-8 w-full"
            >
              Send Inquiry
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} SNIS. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
