import React from 'react';
import { propertyListings } from '../../data/listings';
import PropertyDetail from '../../components/PropertyDetail';

const Listing456OakAvenue: React.FC = () => {
  const property = propertyListings.find((p) => p.slug === '456-oak-avenue');
  if (!property) return null;
  return <PropertyDetail property={property} />;
};

export default Listing456OakAvenue;
