import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFF7EB]">
      <div className="container py-16 text-center">
        <h2 className="mb-6 [font-family:'Golos_Text',Helvetica] font-semibold text-black text-2xl md:text-3xl lg:text-[40px] tracking-[0]">
          Start your journey today.
        </h2>
        <p className="mb-8 [font-family:'Golos_Text',Helvetica] text-[#6b6b6b] text-lg md:text-xl lg:text-[25px] leading-relaxed">
          Browse our growing collection of properties and secure your next home in Canada.
        </p>
        <Link to="/listings">
          <Button className="h-[55px] md:h-[65px] lg:h-[72px] w-[280px] md:w-[300px] lg:w-[328px] bg-[#4CAF87] rounded-[30px] md:rounded-[35px] lg:rounded-[43px] [font-family:'Golos_Text',Helvetica] font-medium text-white text-lg md:text-xl lg:text-2xl tracking-[-1px] hover:bg-[#3b9b73] transition-colors">
            Find Your Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
