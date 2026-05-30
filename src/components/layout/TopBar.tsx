import { Phone, MapPin } from "lucide-react";
import { SITE_CONTENT } from "@/data/content";

export const TopBar = () => {
  return (
    <div className="bg-[#2F4858] text-white py-2.5 hidden md:block border-b border-white/5">
      <div className="container mx-auto px-4 flex justify-between items-center text-[11px] font-black uppercase tracking-[0.15em]">
        <div className="flex items-center space-x-8">
          <div className="flex items-center text-[#86BBD8]">
            <MapPin className="w-3.5 h-3.5 mr-2" />
            <span>{SITE_CONTENT.contact.address}, India</span>
          </div>
          <div className="flex items-center text-slate-400">
            <span className="mr-2 opacity-50">GST NO:</span>
            <span className="text-white">29AAAAA0000A1Z5</span>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <a href={`tel:${SITE_CONTENT.contact.phone}`} className="flex items-center hover:text-[#86BBD8] transition-colors">
            <Phone className="w-3.5 h-3.5 mr-2 text-[#9EE493]" />
            <span>Call: {SITE_CONTENT.contact.phone}</span>
          </a>
          <div className="flex items-center text-[#9EE493]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9EE493] animate-pulse mr-2" />
            <span>98% Response Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
};
