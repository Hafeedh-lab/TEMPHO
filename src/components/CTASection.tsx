import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

export const CTASection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#FFF7EB]">
      <div className="container py-12 md:py-18 lg:py-24 text-center">
        <p className="[font-family:'Golos_Text',Helvetica] font-medium text-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 md:mb-8">
          Start your journey today.
        </p>
        <p className="w-full max-w-2xl mx-auto [font-family:'Golos_Text',Helvetica] font-medium text-[#6f6f6f] text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-10">
          Browse our growing collection of properties and secure your next home in Canada.
        </p>
        <Button
          onClick={() => navigate('/listings')}
          className="relative h-[55px] md:h-[65px] lg:h-[72px] w-[280px] md:w-[300px] lg:w-[328px] bg-[#4CAF87] rounded-[30px] md:rounded-[35px] lg:rounded-[43px] [font-family:'Golos_Text',Helvetica] font-medium text-white text-lg md:text-xl lg:text-2xl tracking-[-1px] md:tracking-[-1.2px] lg:tracking-[-1.44px] hover:bg-[#3b9b73] transition-colors overflow-hidden"
        >
          <span className="relative z-10">Find Your Home →</span>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
