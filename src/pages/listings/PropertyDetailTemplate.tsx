import React from 'react';
import Header from '../../components/Header';
import { PropertyListing } from '../../data/listings';
import { Button } from '../../components/ui/button';

interface PropertyDetailTemplateProps {
  property: PropertyListing;
}

const PropertyDetailTemplate: React.FC<PropertyDetailTemplateProps> = ({ property }) => {
  return (
    <main className="bg-white w-full min-h-screen">
      <Header />
      <section className="container py-8 md:py-12">
        <img
          src={property.imageUrl}
          alt={property.address}
          className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
        />
        <h1 className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-3xl md:text-4xl lg:text-5xl mb-4">
          {property.address}
        </h1>
        <p className="[font-family:'Golos_Text',Helvetica] text-[#6b6b6b] text-lg md:text-xl mb-2">
          {property.price} — {property.propertyType}
        </p>
        <p className="[font-family:'Golos_Text',Helvetica] text-black text-base md:text-lg mb-6">
          {property.beds} Bed{property.beds !== 1 ? 's' : ''} | {property.baths} Bath{property.baths !== 1 ? 's' : ''} | {property.garage}-Car Garage
        </p>
        <p className="[font-family:'Golos_Text',Helvetica] text-[#6b6b6b] text-base md:text-lg leading-relaxed mb-8">
          This furnished property offers comfort and convenience in a prime Canadian location. Enjoy modern amenities, inviting interiors, and easy access to local attractions. Perfect for short- or long-term stays.
        </p>
        <Button className="bg-[#4CAF87] hover:bg-[#3b9b73] text-white text-lg px-6 py-3 rounded-full">
          Contact / Book
        </Button>
      </section>
    </main>
  );
};

export default PropertyDetailTemplate;
