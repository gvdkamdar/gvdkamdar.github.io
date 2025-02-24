
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import ProductShowcase from "@/components/ProductShowcase";
import Contact from "@/components/Contact";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative bg-[#121212]">
      <ThreeBackground />
      <Navigation />
      
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Research />
        <ProductShowcase />
        <Skills />
      </main>
      <Contact />
    </div>
  );
};

export default Index;
