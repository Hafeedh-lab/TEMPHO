import React from 'react';
import './HeroSection.css';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full min-h-[600px] md:min-h-[800px] lg:min-h-[973px] bg-[#fff7eb] flex items-center">
      <div className="container text-center">
        <h1 className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-4xl md:text-6xl lg:text-8xl tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.76px] leading-tight md:leading-[1.1] lg:leading-[84.3px] mb-6 md:mb-8 lg:mb-10">
          Welcome To Your <br /> Canadian Dream
        </h1>
        <p className="w-full max-w-[522px] mx-auto [font-family:'Golos_Text',Helvetica] font-medium text-[#6f6f6f] text-lg md:text-2xl lg:text-[32px] tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.92px] leading-relaxed md:leading-[1.2] lg:leading-[28.1px] mb-8 md:mb-10 lg:mb-12">
          At the frontier of the living lavish lifestyle in Canada
        </p>
        <Button
          onClick={scrollToServices}
          className="hero-button rounded-[35px] md:rounded-[43px] text-white px-8 py-4 md:px-10 md:py-5 lg:px-12 lg:py-6"
        >
          Explore Our Listings
          <span className="hero-arrow">
            <img
              src="https://c.animaapp.com/mdww1mm3xpw4UO/img/arrow-forward-1.svg"
              alt="Arrow forward"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </span>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
