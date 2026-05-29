import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CompanyProfile } from "@/components/home/CompanyProfile";
import { Partners } from "@/components/home/Partners";
import { Industry } from "@/components/home/Industry";
import { Downloads } from "@/components/home/Downloads";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

const Home = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [id]);

  return (
    <Layout>
      <div id="hero"><Hero /></div>
      <Partners />
      <CompanyProfile />
      <div id="trust"><Trust /></div>
      <div id="featured"><FeaturedProducts /></div>
      <div id="categories"><Categories /></div>
      <div id="industry"><Industry /></div>
      <div id="downloads"><Downloads /></div>
      <div id="about"><AboutSection /></div>
      <div id="contact"><ContactSection /></div>
    </Layout>
  );
};

export default Home;
