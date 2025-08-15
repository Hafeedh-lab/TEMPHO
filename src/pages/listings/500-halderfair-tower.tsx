import React from 'react';
import { propertyListings } from '../../data/listings';
import PropertyDetail from '../../components/PropertyDetail';

const Listing500HalderfairTower: React.FC = () => {
  const property = propertyListings.find((p) => p.slug === '500-halderfair-tower');
  if (!property) return null;
  return <PropertyDetail property={property} />;
};

export default Listing500HalderfairTower;
