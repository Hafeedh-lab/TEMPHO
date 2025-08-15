import React from 'react';
import Header from '../../components/Header';
import PropertyDetail from '../../components/PropertyDetail';
import { propertyListings } from '../../data/listings';

const property = propertyListings.find((p) => p.slug === '123-pine-road');

const PineRoadPage: React.FC = () => {
  if (!property) return null;
  return (
    <div className="bg-[#FFF7EB] min-h-screen">
      <Header />
      <PropertyDetail property={property} />
    </div>
  );
};

export default PineRoadPage;
