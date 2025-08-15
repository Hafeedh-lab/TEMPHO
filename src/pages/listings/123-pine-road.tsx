import React from 'react';
import { propertyListings } from '../../data/listings';
import PropertyDetail from '../../components/PropertyDetail';

const Listing123PineRoad: React.FC = () => {
  const property = propertyListings.find((p) => p.slug === '123-pine-road');
  if (!property) return null;
  return <PropertyDetail property={property} />;
};

export default Listing123PineRoad;
