import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFF7EB]">
      <div className="container py-12 md:py-16 lg:py-20 text-center">
        <h2 className="[font-family:'Golos_Text',Helvetica] font-medium text-black text-2xl md:text-3xl lg:text-4xl mb-4">
          Start your journey today.
        </h2>
        <p className="[font-family:'Golos_Text',Helvetica] font-medium text-[#6b6b6b] text-lg md:text-xl lg:text-2xl mb-8">
          Browse our growing collection of properties and secure your next home in Canada.
        </p>
        <Link to="/listings">
          <Button className="bg-[#4CAF87] hover:bg-[#3b9b73] text-white text-lg md:text-xl px-8 py-4 rounded-full">
            Find Your Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
