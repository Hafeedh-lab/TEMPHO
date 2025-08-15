import React from 'react';
import { Badge } from './ui/badge';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-[#4CAF87] flex-shrink-0 mt-1"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const WhyChooseTempho: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container py-12 md:py-18 lg:py-24">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-3 h-3 bg-[#569b6f] rounded-md mr-4 md:mr-6 lg:mr-[22px] flex-shrink-0" />
          <Badge className="bg-transparent [font-family:'Golos_Text',Helvetica] font-semibold text-[#569b6f] text-base md:text-lg lg:text-xl tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.60px] leading-[1.2] lg:leading-[21.1px] p-0">
            WHY CHOOSE TEMPHO?
          </Badge>
        </div>
        <ul className="space-y-4 md:space-y-6 lg:space-y-8">
          <li className="flex items-start">
            <CheckIcon />
            <p className="ml-4 [font-family:'Golos_Text',Helvetica] font-medium text-black text-lg md:text-xl lg:text-2xl leading-relaxed">
              <span className="font-semibold">Verified & Safe</span> — Every listing is vetted to ensure peace of mind.
            </p>
          </li>
          <li className="flex items-start">
            <CheckIcon />
            <p className="ml-4 [font-family:'Golos_Text',Helvetica] font-medium text-black text-lg md:text-xl lg:text-2xl leading-relaxed">
              <span className="font-semibold">Flexible Terms</span> — Options for monthly rentals and beyond.
            </p>
          </li>
          <li className="flex items-start">
            <CheckIcon />
            <p className="ml-4 [font-family:'Golos_Text',Helvetica] font-medium text-black text-lg md:text-xl lg:text-2xl leading-relaxed">
              <span className="font-semibold">For Everyone</span> — Perfect for newcomers, students, families, and professionals.
            </p>
          </li>
          <li className="flex items-start">
            <CheckIcon />
            <p className="ml-4 [font-family:'Golos_Text',Helvetica] font-medium text-black text-lg md:text-xl lg:text-2xl leading-relaxed">
              <span className="font-semibold">Simple Search</span> — Filter by location, budget, and amenities with ease.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseTempho;
