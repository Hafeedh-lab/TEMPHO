import React from 'react';
import Header from './Header';
import { Button } from './ui/button';
import { PropertyListing } from '../data/listings';
import PropertyGallery from './PropertyGallery';

interface PropertyDetailProps {
  property: PropertyListing;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => (
  <div className="bg-[#FFF7EB] min-h-screen">
    <Header />
    <div className="container pt-28 pb-16">
      {/* Property Gallery */}
      <PropertyGallery
        images={property.images}
        alt={`${property.propertyType} at ${property.address}`}
        className="mb-8"
      />
      
      <h1 className="[font-family:'Golos_Text',Helvetica] font-semibold text-3xl md:text-4xl text-black mb-2">
        {property.address}
      </h1>
      <p className="[font-family:'Golos_Text',Helvetica] text-xl md:text-2xl text-[#4CAF87] mb-4">
        {property.price} — {property.propertyType}
      </p>
      <p className="[font-family:'Golos_Text',Helvetica] text-black text-lg mb-4">
        {property.beds} Beds | {property.baths} Baths | {property.garage}-Car Garage
      </p>
      <p className="text-[#6b6b6b] mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Donec non semper nulla. Praesent vitae arcu tempor neque lacinia pretium. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.
      </p>
      <Button
        onClick={() => (window.location.href = '/contact')}
        className="bg-[#4CAF87] text-white [font-family:'Golos_Text',Helvetica]"
      >
        Contact / Book Now
      </Button>
    </div>
  </div>
);

export default PropertyDetail;
