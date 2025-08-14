import React from 'react';
import { Badge } from './ui/badge';
import { PropertyCarousels } from './PropertyCarousels';

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full min-h-[600px] md:min-h-[800px] lg:min-h-[973px] bg-[url(https://c.animaapp.com/mdww1mm3xpw4UO/img/rectangle-56.svg)] bg-cover bg-center bg-no-repeat">
      <div className="container py-8 md:py-10 lg:py-12">
        {/* Section Header */}
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-3 h-3 bg-[#569b6f] rounded-md mr-4 md:mr-6 lg:mr-[22px] flex-shrink-0" />
          <Badge className="bg-transparent [font-family:'Golos_Text',Helvetica] font-semibold text-[#569b6f] text-base md:text-lg lg:text-xl tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.60px] leading-[1.2] lg:leading-[21.1px] p-0">
            OUR SERVICES
          </Badge>
        </div>

        {/* Section Title */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="[font-family:'Golos_Text',Helvetica]">
            <span className="font-medium text-black text-2xl md:text-3xl lg:text-[40px] leading-tight md:leading-[1.2] lg:leading-[42.2px] tracking-[0] block">
              Explore Our
            </span>
            <span className="font-medium text-[#787878] text-2xl md:text-3xl lg:text-[40px] leading-tight md:leading-[1.2] lg:leading-[42.2px] tracking-[0.5px] md:tracking-[0.6px] lg:tracking-[0.80px] block">
              Services
            </span>
          </div>
        </div>

        {/* Property Carousels */}
        <PropertyCarousels />
      </div>
    </section>
  );
};

export default ServicesSection;
