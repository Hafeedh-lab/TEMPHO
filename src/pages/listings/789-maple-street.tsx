import React from 'react';
import { propertyListings } from '../../data/listings';
import PropertyDetail from '../../components/PropertyDetail';

const Listing789MapleStreet: React.FC = () => {
  const property = propertyListings.find((p) => p.slug === '789-maple-street');
  if (!property) return null;
  return <PropertyDetail property={property} />;
};

export default Listing789MapleStreet;
