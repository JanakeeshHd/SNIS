import { useEffect, type ReactNode } from "react";
import { TopBar } from "./TopBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { SchemaMarkup } from "./SchemaMarkup";
import logo from "@/assets/snis-logo.png";
import { GoToTop } from "../ui/GoToTop";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Dynamically set the favicon to match the header logo
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = logo;
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SchemaMarkup />
      <TopBar />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <WhatsAppButton />
      <GoToTop />
    </div>
  );
};
