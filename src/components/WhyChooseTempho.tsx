import React from 'react';
import { ShieldCheck, Calendar, Users, Search } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified & Safe',
    description: 'Every listing is vetted to ensure peace of mind.',
  },
  {
    icon: Calendar,
    title: 'Flexible Terms',
    description: 'Options for monthly rentals and beyond.',
  },
  {
    icon: Users,
    title: 'For Everyone',
    description: 'Perfect for newcomers, students, families, and professionals.',
  },
  {
    icon: Search,
    title: 'Simple Search',
    description: 'Filter by location, budget, and amenities with ease.',
  },
];

const WhyChooseTempho: React.FC = () => {
  return (
    <section className="w-full bg-white" id="why-tempho">
      <div className="container py-12 md:py-18 lg:py-24">
        <h2 className="mb-8 [font-family:'Golos_Text',Helvetica] font-semibold text-black text-2xl md:text-3xl lg:text-[40px] tracking-[0]">
          Why Choose Tempho?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start space-x-4">
              <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-[#4CAF87] flex-shrink-0" />
              <div className="[font-family:'Golos_Text',Helvetica]">
                <h3 className="font-medium text-black text-lg md:text-xl mb-1">
                  {feature.title}
                </h3>
                <p className="text-[#6b6b6b] text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTempho;
