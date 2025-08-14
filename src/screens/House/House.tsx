import React from "react";
import { Badge } from "../../components/ui/badge";
import { ServicesSection } from "../../components/ServicesSection";
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
              <p className="w-full max-w-none lg:max-w-[1043px] [font-family:'Golos_Text',Helvetica] font-medium text-black text-xl md:text-2xl lg:text-[40px] leading-relaxed md:leading-[1.3] lg:leading-10 tracking-[0]">
                Prevail in the subahs Turbo Pack is a new, high-performance bundler
                designed to speed up development in Next.js. It's built by Vercel,
                the creators of Next.js, and is intended to replace{" "}
                <a
                  href="https://www.google.com/search?sca_esv=12c7b01f52a29939&amp;rlz=1C1NDCM_enNG1030NG1030&amp;sxsrf=AE3TifNnBaIZBTcdMSmJJm3hmPwAzHy5qA%3A1753015930808&amp;q=Webpack&amp;sa=X&amp;ved=2ahUKEwi5sN2evcuOAxWSE1kFHbkcB-oQxccNegQIIxAB&amp;mstk=AUtExfBF0Z33ag7MkcoefjUTjtrCF9fF3FR54q6yJjlostu22nzvpJXZVV0LLqow4xrpnTvD_ung6IJfcq5f0THVaULczWVGKkNzYSin0Smr9nHwegWMhTR1O8XeetOqOGjAlrVyjMA86WiD8Lu_bxY5VfuyBdDV_tkHNPPR3vD8WCUn2VI&amp;csui=3"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium tracking-[0.5px] md:tracking-[0.8px] lg:tracking-[1.12px] leading-[1.3] lg:leading-[50.8px] underline hover:text-[#569b6f] transition-colors"
                >
                  Webpack
                </a>{" "}
                as the default bundler for Next.js applications.{" "}
              </p>

              <p className="ml-auto w-full max-w-none md:max-w-[600px] lg:max-w-[573px] [font-family:'Golos_Text',Helvetica] font-medium text-[#6b6b6b] text-lg md:text-xl lg:text-[25px] tracking-[0.3px] md:tracking-[0.4px] lg:tracking-[0.44px] leading-relaxed md:leading-[1.3] lg:leading-[31.8px]">
                in{" "}
                <a
                  href="https://www.google.com/search?sca_esv=12c7b01f52a29939&amp;rlz=1C1NDCM_enNG1030NG1030&amp;sxsrf=AE3TifNnBaIZBTcdMSmJJm3hmPwAzHy5qA%3A1753015930808&amp;q=Rust&amp;sa=X&amp;ved=2ahUKEwi5sN2evcuOAxWSE1kFHbkcB-oQxccNegQINxAB&amp;mstk=AUtExfBF0Z33ag7MkcoefjUTjtrCF9fF3FR54q6yJjlostu22nzvpJXZVV0LLqow4xrpnTvD_ung6IJfcq5f0THVaULczWVGKkNzYSin0Smr9nHwegWMhTR1O8XeetOqOGjAlrVyjMA86WiD8Lu_bxY5VfuyBdDV_tkHNPPR3vD8WCUn2VI&amp;csui=3"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline hover:text-[#569b6f] transition-colors"
                >
                  Rust
                </a>
                , which allows it to leverage the language's speed and efficiency
                for faster builds and more responsive development experiences
              </p>
            </div>
          </div>
        </section>

        {/* Services Section with Airbnb-Style Carousel */}
        <ServicesSection />
      </div>
    </main>
  );
};
