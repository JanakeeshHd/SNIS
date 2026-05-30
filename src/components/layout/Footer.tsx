import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Twitter, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";
import { Button } from "@/components/ui/button";
import logo from "@/assets/snis-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#2F4858] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="SNIS Industries Logo" 
                className="h-16 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {SITE_CONTENT.company.description}
            </p>
            <div className="flex space-x-4">
              <a href={SITE_CONTENT.contact.social.twitter} className="bg-white/10 p-2 rounded-full hover:bg-[#86BBD8] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={SITE_CONTENT.contact.social.facebook} className="bg-white/10 p-2 rounded-full hover:bg-[#86BBD8] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={SITE_CONTENT.contact.social.instagram} className="bg-white/10 p-2 rounded-full hover:bg-[#86BBD8] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={SITE_CONTENT.contact.social.linkedin} className="bg-white/10 p-2 rounded-full hover:bg-[#86BBD8] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-[#9EE493] pl-3">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Products", "Industry", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`} 
                    className="text-slate-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-[#9EE493]" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-[#9EE493] pl-3">Product Categories</h4>
            <ul className="space-y-4">
              {SITE_CONTENT.products.categories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products/${cat.id}`} 
                    className="text-slate-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 text-[#9EE493]" />
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-l-4 border-[#9EE493] pl-3">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-slate-400">
                <MapPin className="w-5 h-5 text-[#86BBD8] shrink-0" />
                <span>{SITE_CONTENT.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="w-5 h-5 text-[#86BBD8] shrink-0" />
                <span>{SITE_CONTENT.contact.phone}</span>
              </div>
              <div className="flex flex-col space-y-1 text-slate-400">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#86BBD8] shrink-0" />
                  <span>{SITE_CONTENT.contact.email}</span>
                </div>
                <div className="pl-8 text-xs">{SITE_CONTENT.contact.salesEmail}</div>
              </div>
            </div>
            <Button className="mt-8 w-full bg-[#9EE493] hover:bg-[#9EE493]/90 text-[#2F4858]">
              Send Inquiry
            </Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-300 text-sm">
          <p>© {new Date().getFullYear()} SNIS Industries. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
