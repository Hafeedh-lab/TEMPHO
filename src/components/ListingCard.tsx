import React from 'react';
import { Listing } from '../hooks/useListingsData';

interface ListingCardProps {
  listing: Listing;
  selected?: boolean;
  onClick?: () => void;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg overflow-hidden shadow-md mb-4 cursor-pointer transition-transform transform hover:scale-[1.02] bg-white ${selected ? 'ring-4 ring-[#4CAF87]' : ''}`}
    >
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{listing.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{listing.location}</p>
        <p className="text-[#4CAF87] font-semibold">CA$ {listing.price}/month</p>
        <p className="text-sm text-gray-600">{listing.guests} guest{listing.guests !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default ListingCard;
