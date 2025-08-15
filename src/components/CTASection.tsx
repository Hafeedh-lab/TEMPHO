import React from 'react';
import { Button } from './ui/button';

const CTASection: React.FC = () => (
  <section className="w-full bg-[#FFF7EB]">
    <div className="container py-12 md:py-18 lg:py-24 text-center">
      <h2 className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-2xl md:text-3xl lg:text-4xl mb-4">
        Start your journey today.
      </h2>
      <p className="[font-family:'Golos_Text',Helvetica] text-[#6b6b6b] text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
        Browse our growing collection of properties and secure your next home in Canada.
      </p>
      <Button
        onClick={() => (window.location.href = '/listings')}
        className="relative h-[55px] md:h-[65px] lg:h-[72px] w-[220px] md:w-[240px] lg:w-[260px] bg-[#4CAF87] rounded-[30px] md:rounded-[35px] lg:rounded-[43px] [font-family:'Golos_Text',Helvetica] font-medium text-white text-lg md:text-xl lg:text-2xl tracking-[-1px] md:tracking-[-1.2px] lg:tracking-[-1.44px] hover:bg-[#3b9b73] transition-colors"
      >
        Find Your Home →
      </Button>
    </div>
  </section>
);

export default CTASection;
