import React from "react";
import { Badge } from "../../components/ui/badge";
import { ServicesSection } from "../../components/ServicesSection";
import WhyChooseTempho from "../../components/WhyChooseTempho";
import CTASection from "../../components/CTASection";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";

export const House = (): JSX.Element => {
  return (
    <main className="bg-white w-full min-h-screen no-overflow" data-model-id="2060:120">
      <div className="bg-white w-full relative">
        {/* Header - Now using the new Airbnb-style Header component */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* About Us Section */}
        <section className="w-full bg-white">
          <div className="container py-12 md:py-18 lg:py-24">
            <div className="flex items-center mb-6 md:mb-8">
              <div className="w-3 h-3 bg-[#569b6f] rounded-md mr-4 md:mr-6 lg:mr-[22px] flex-shrink-0" />
              <Badge className="bg-transparent [font-family:'Golos_Text',Helvetica] font-semibold text-[#569b6f] text-base md:text-lg lg:text-xl tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.60px] leading-[1.2] lg:leading-[21.1px] p-0">
                ABOUT US
              </Badge>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h2 className="w-full max-w-none lg:max-w-[1043px] [font-family:'Golos_Text',Helvetica] font-medium text-black text-xl md:text-2xl lg:text-[40px] leading-relaxed md:leading-[1.3] lg:leading-10 tracking-[0]">
                Your Gateway to Seamless Canadian Living
              </h2>

              <p className="ml-auto w-full max-w-none md:max-w-[600px] lg:max-w-[573px] [font-family:'Golos_Text',Helvetica] font-medium text-[#6b6b6b] text-lg md:text-xl lg:text-[25px] tracking-[0.3px] md:tracking-[0.4px] lg:tracking-[0.44px] leading-relaxed md:leading-[1.3] lg:leading-[31.8px]">
                At Tempho, we believe finding a home should be simple, transparent, and stress-free. We connect you with high-quality, verified rental properties—offering flexible terms and tailored options to suit your needs.
              </p>

              <p className="ml-auto w-full max-w-none md:max-w-[600px] lg:max-w-[573px] [font-family:'Golos_Text',Helvetica] font-medium text-[#6b6b6b] text-lg md:text-xl lg:text-[25px] tracking-[0.3px] md:tracking-[0.4px] lg:tracking-[0.44px] leading-relaxed md:leading-[1.3] lg:leading-[31.8px]">
                From modern condos to family townhouses, we combine local expertise with advanced tools to deliver an effortless rental experience.
              </p>
            </div>
          </div>
        </section>

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
