import React from 'react';
import { propertyListings } from '../../data/listings';
import PropertyDetailTemplate from './PropertyDetailTemplate';

const property = propertyListings.find(p => p.slug === '456-oak-avenue');

export default function Page() {
  if (!property) return null;
  return <PropertyDetailTemplate property={property} />;
}
