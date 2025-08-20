import React from 'react';
import { useParams } from 'react-router-dom';
import { propertyListings } from '../data/listings';
import PropertyDetail from '../components/PropertyDetail';

const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = propertyListings.find((p) => p.id === Number(id));
  if (!property) return null;
  return <PropertyDetail property={property} />;
};

export default ListingDetail;
