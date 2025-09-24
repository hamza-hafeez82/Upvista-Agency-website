"use client";
import { Hero } from "@/components/ui/animated-hero"
import { StunningServices } from "@/components/ui/StunningServices"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ServicesPage = ()=> {
  return (
    <>
      <Header />
      <div className="block">
        <Hero />
        <StunningServices/>
        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;