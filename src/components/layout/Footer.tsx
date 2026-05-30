import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import logo from "@/assets/snis-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-2 border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="SNIS Industries Logo" 
                className="h-16 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              {SITE_CONTENT.company.description}
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONTENT.contact.social.twitter} className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={SITE_CONTENT.contact.social.facebook} className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={SITE_CONTENT.contact.social.instagram} className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SITE_CONTENT.contact.social.linkedin} className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-accent pl-3">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Industry", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`} 
                    className="text-white/70 hover:text-accent hover:translate-x-2 transition-all inline-flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-accent" />
                    {link}
                  </Link>
                </li>
              ))}
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
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>{SITE_CONTENT.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>{SITE_CONTENT.contact.phone}</span>
              </div>
              <div className="flex flex-col space-y-1 text-white/70">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <span>{SITE_CONTENT.contact.email}</span>
                </div>
                <div className="pl-8 text-xs">{SITE_CONTENT.contact.salesEmail}</div>
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
          <p>© {new Date().getFullYear()} SNIS Industries. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
