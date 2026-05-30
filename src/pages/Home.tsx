import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Trust } from "@/components/home/Trust";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CompanyOverview } from "@/components/home/CompanyOverview";
import { Partners } from "@/components/home/Partners";
import { Industry } from "@/components/home/Industry";
import { Downloads } from "@/components/home/Downloads";
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
      <div id="about"><CompanyOverview /></div>
      <div id="trust"><Trust /></div>
      <div id="featured"><FeaturedProducts /></div>
      <div id="categories"><Categories /></div>
      <div id="industries"><Industry /></div>
      <div id="downloads"><Downloads /></div>
      <div id="contact"><ContactSection /></div>
    </Layout>
  );
};

export default Home;
