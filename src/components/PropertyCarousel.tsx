import React, { useRef } from 'react';
import { PropertyCard } from './PropertyCard';
import { PropertyListing } from '../data/listings';

interface PropertyCarouselProps {
  title: string;
  listings: PropertyListing[];
}

export const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ title, listings }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8 md:mb-12">
      {/* Carousel Title */}
      <h3 className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">
        {title}
      </h3>

      {/* Carousel Container */}
      <div className="relative group">
        {/* Left Navigation Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:shadow-xl"
          aria-label="Scroll left"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:shadow-xl"
          aria-label="Scroll right"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {listings.map((property) => (
            <div
              key={property.id}
              style={{ scrollSnapAlign: 'start' }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCarousel;
