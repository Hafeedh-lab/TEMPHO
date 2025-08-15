import React from 'react';
import { Badge } from './ui/badge';
import { ShieldCheck, CalendarCheck, Users, Search } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified & Safe',
    description: 'Every listing is vetted to ensure peace of mind.',
  },
  {
    icon: CalendarCheck,
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

const WhyChooseTempho: React.FC = () => (
  <section className="w-full bg-white">
    <div className="container py-12 md:py-18 lg:py-24">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="w-3 h-3 bg-[#569b6f] rounded-md mr-4 md:mr-6 lg:mr-[22px] flex-shrink-0" />
        <Badge className="bg-transparent [font-family:'Golos_Text',Helvetica] font-semibold text-[#569b6f] text-base md:text-lg lg:text-xl tracking-[1.5px] md:tracking-[2px] lg:tracking-[2.60px] leading-[1.2] lg:leading-[21.1px] p-0">
          WHY CHOOSE TEMPHO?
        </Badge>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center space-y-4">
            <item.icon className="w-12 h-12 text-[#4CAF87]" />
            <h3 className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-lg md:text-xl">
              {item.title}
            </h3>
            <p className="[font-family:'Golos_Text',Helvetica] text-[#6b6b6b] text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseTempho;
