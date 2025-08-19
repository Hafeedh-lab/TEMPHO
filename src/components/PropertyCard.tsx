import React from 'react';
import { Card, CardContent } from './ui/card';
import { PropertyListing } from '../data/listings';
import { Link } from 'react-router-dom';
import { ImageCarousel } from './ImageCarousel';

interface PropertyCardProps {
  property: PropertyListing;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/listings/${property.slug}`} className="block">
      <Card className="w-[280px] md:w-[320px] lg:w-[360px] h-auto bg-transparent border-none shadow-none flex-shrink-0 cursor-pointer group">
        <CardContent className="p-0">
          {/* Property Image */}
          <div className="relative overflow-hidden rounded-xl mb-3">
            <ImageCarousel
              images={property.images}
              alt={`${property.propertyType} at ${property.address}`}
              className="w-full h-[200px] md:h-[240px] lg:h-[280px]"
              autoPlay={true}
              showArrows={true}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 pointer-events-none" />
          </div>

          {/* Property Details */}
          <div className="space-y-1">
            {/* Price */}
            <div className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-lg md:text-xl lg:text-2xl tracking-[0.8px] md:tracking-[1px] lg:tracking-[1.20px] leading-tight">
              {property.price}
            </div>

            {/* Property Type */}
            <div className="[font-family:'Golos_Text',Helvetica] font-medium text-black text-base md:text-lg lg:text-xl tracking-[0.6px] md:tracking-[0.8px] lg:tracking-[1.20px] leading-tight">
              {property.propertyType}
            </div>

            {/* Address */}
            <div className="[font-family:'Golos_Text',Helvetica] font-semibold text-[#ffc369] text-lg md:text-xl lg:text-2xl leading-tight tracking-[0]">
              {property.address}
            </div>

            {/* Property Features */}
            <div className="[font-family:'Golos_Text',Helvetica] font-normal text-black text-sm md:text-base leading-relaxed tracking-[0] pt-1">
              {property.beds} Bed{property.beds !== 1 ? 's' : ''} | {property.baths} Bath{property.baths !== 1 ? 's' : ''} | {property.garage}-Car Garage
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
