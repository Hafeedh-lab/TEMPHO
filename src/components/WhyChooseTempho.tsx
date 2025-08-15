import React from 'react';
import { ShieldCheck, CalendarClock, Users, Search } from 'lucide-react';
import { Badge } from './ui/badge';

const features = [
  { icon: ShieldCheck, title: 'Verified & Safe', description: 'Every listing is vetted to ensure peace of mind.' },
  { icon: CalendarClock, title: 'Flexible Terms', description: 'Options for monthly rentals and beyond.' },
  { icon: Users, title: 'For Everyone', description: 'Perfect for newcomers, students, families, and professionals.' },
  { icon: Search, title: 'Simple Search', description: 'Filter by location, budget, and amenities with ease.' },
];

const WhyChooseTempho: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="container py-12 md:py-18 lg:py-24">
        <div className="flex items-center mb-6 md:mb-8">
          <div className="w-3 h-3 bg-[#569b6f] rounded-md mr-4 md:mr-6 lg:mr-[22px] flex-shrink-0" />
          <Badge className="bg-transparent [font-family:'Golos_Text',Helvetica] font-semibold text-[#569b6f] text-base md:text-lg lg:text-xl tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.60px] leading-[1.2] lg:leading-[21.1px] p-0">
            WHY CHOOSE TEMPHO?
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex items-start space-x-4">
                <Icon className="w-8 h-8 text-[#4CAF87] flex-shrink-0" />
                <div className="[font-family:'Golos_Text',Helvetica]">
                  <div className="font-semibold text-black text-lg md:text-xl mb-1">{feature.title}</div>
                  <p className="text-[#6b6b6b] text-base md:text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTempho;
