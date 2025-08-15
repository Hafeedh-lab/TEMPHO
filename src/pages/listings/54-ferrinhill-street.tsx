import React from 'react';
import { propertyListings } from '../../data/listings';
import PropertyDetail from '../../components/PropertyDetail';

const Listing54FerrinhillStreet: React.FC = () => {
  const property = propertyListings.find((p) => p.slug === '54-ferrinhill-street');
  if (!property) return null;
  return <PropertyDetail property={property} />;
};

export default Listing54FerrinhillStreet;
