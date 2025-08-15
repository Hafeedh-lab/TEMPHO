import React from 'react';
import { PropertyListing } from '../data/listings';
import { Button } from './ui/button';

interface ListingDetailProps {
  property: PropertyListing;
}

const ListingDetail: React.FC<ListingDetailProps> = ({ property }) => {
  return (
    <div className="container py-12 md:py-18 lg:py-24">
      <div className="mb-8">
        <img
          src={property.imageUrl}
          alt={property.address}
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
        />
      </div>
      <h1 className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-2xl md:text-3xl lg:text-[40px] mb-4">
        {property.address}
      </h1>
      <div className="[font-family:'Golos_Text',Helvetica] text-[#6b6b6b] text-lg md:text-xl lg:text-[25px] mb-4">
        {property.price} — {property.propertyType}
      </div>
      <div className="[font-family:'Golos_Text',Helvetica] text-black text-base md:text-lg mb-6">
        {property.beds} Bed{property.beds !== 1 ? 's' : ''} | {property.baths} Bath{property.baths !== 1 ? 's' : ''} | {property.garage}-Car Garage
      </div>
      <p className="mb-8 [font-family:'Golos_Text',Helvetica] text-[#6b6b6b] text-base md:text-lg leading-relaxed">
        This is a beautiful property located in the heart of the city. It offers modern amenities and a comfortable living experience for its residents.
      </p>
      <Button className="bg-[#4CAF87] hover:bg-[#3b9b73] [font-family:'Golos_Text',Helvetica] text-white rounded-full px-8 py-4">
        Contact / Book Now
      </Button>
    </div>
  );
};

export default ListingDetail;
