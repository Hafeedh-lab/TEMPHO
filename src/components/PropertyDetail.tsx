import React from 'react';
import { PropertyListing } from '../data/listings';
import { Button } from './ui/button';

interface PropertyDetailProps {
  property: PropertyListing;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="container py-12 md:py-18 lg:py-24">
      <img
        src={property.imageUrl}
        alt={property.address}
        className="w-full h-64 md:h-80 lg:h-[500px] object-cover rounded-xl"
      />
      <h1 className="mt-6 [font-family:'Golos_Text',Helvetica] font-semibold text-black text-3xl md:text-4xl lg:text-5xl leading-tight">
        {property.address}
      </h1>
      <p className="mt-2 [font-family:'Golos_Text',Helvetica] font-medium text-[#4CAF87] text-xl md:text-2xl lg:text-3xl leading-tight">
        {property.price} — {property.propertyType}
      </p>
      <p className="mt-2 [font-family:'Golos_Text',Helvetica] text-black text-base md:text-lg lg:text-xl">
        {property.beds} Beds | {property.baths} Baths | {property.garage}-Car Garage
      </p>
      <p className="mt-4 [font-family:'Golos_Text',Helvetica] text-[#6b6b6b] text-base md:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae purus nec lorem interdum facilisis. Donec suscipit, lorem at dignissim viverra, ligula erat pharetra enim, vel luctus ipsum elit vitae nisl.
      </p>
      <Button className="mt-6 bg-[#4CAF87] [font-family:'Golos_Text',Helvetica] text-white text-lg md:text-xl lg:text-2xl rounded-[30px] md:rounded-[35px] lg:rounded-[43px] px-8 py-4 hover:bg-[#3b9b73] transition-colors">
        Contact / Book Now
      </Button>
    </div>
  );
};

export default PropertyDetail;
