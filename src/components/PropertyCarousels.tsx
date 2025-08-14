import React from 'react';
import { PropertyCarousel } from './PropertyCarousel';
import { listingCategories } from '../data/listings';

export const PropertyCarousels: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      {listingCategories.map((category, index) => (
        <PropertyCarousel
          key={index}
          title={category.title}
          listings={category.listings}
        />
      ))}
    </div>
  );
};

export default PropertyCarousels;
