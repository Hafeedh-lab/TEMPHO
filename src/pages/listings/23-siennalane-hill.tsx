import React from 'react';
import { propertyListings } from '../../data/listings';
import PropertyDetail from '../../components/PropertyDetail';

const Listing23SiennalaneHill: React.FC = () => {
  const property = propertyListings.find((p) => p.slug === '23-siennalane-hill');
  if (!property) return null;
  return <PropertyDetail property={property} />;
};

export default Listing23SiennalaneHill;
