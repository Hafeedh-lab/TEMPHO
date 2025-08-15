import React from "react";
import { ServicesSection } from "../../components/ServicesSection";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import WhyChooseTempho from "../../components/WhyChooseTempho";
import CTASection from "../../components/CTASection";

export const House = (): JSX.Element => {
  return (
    <main className="bg-white w-full min-h-screen no-overflow" data-model-id="2060:120">
      <div className="bg-white w-full relative">
        {/* Header - Now using the new Airbnb-style Header component */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        <AboutUs />

        {/* Services Section with Airbnb-Style Carousel */}
        <ServicesSection />

        {/* Why Choose Tempho Section */}
        <WhyChooseTempho />

        {/* Call To Action Section */}
        <CTASection />
      </div>
    </main>
  );
};
