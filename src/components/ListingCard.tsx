import React from 'react';
import { Listing } from '../data/mockListings';

interface Props {
  listing: Listing;
  onClick?: () => void;
  selected?: boolean;
}

const ListingCard: React.FC<Props> = ({ listing, onClick, selected }) => {
  return (
    <div
      className={`border rounded-lg overflow-hidden mb-4 cursor-pointer transition-transform hover:scale-105 ${selected ? 'ring-2 ring-[#4CAF87]' : ''}`}
      onClick={onClick}
    >
      <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#4CAF87] mb-1">{listing.title}</h3>
        <p className="text-sm text-gray-700">{listing.location}</p>
        <p className="text-sm text-gray-700">Guests: {listing.guests}</p>
        <p className="text-base font-bold mt-2">${listing.price}</p>
      </div>
    </div>
  );
};

export default ListingCard;
