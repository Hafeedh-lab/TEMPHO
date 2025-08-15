import React from 'react';
import Header from '../../components/Header';
import ListingDetail from '../../components/ListingDetail';
import { propertyListings } from '../../data/listings';

const property = propertyListings.find((p) => p.slug === '23-siennalane-hill')!;

const SiennalaneHillPage: React.FC = () => {
  return (
    <div className="bg-[#FFF7EB] min-h-screen">
      <Header />
      <ListingDetail property={property} />
    </div>
  );
};

export default SiennalaneHillPage;
