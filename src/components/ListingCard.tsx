import React from 'react';
import { Listing } from '../hooks/useListingsData';

interface Props {
  listing: Listing;
  selected?: boolean;
  onClick?: () => void;
}

export const ListingCard: React.FC<Props> = ({ listing, selected, onClick }) => {
  return (
    <div
      id={`listing-${listing.id}`}
      onClick={onClick}
      className={`cursor-pointer mb-4 border rounded-lg overflow-hidden shadow-md bg-white transition-colors duration-300 ${
        selected ? 'border-[#4CAF87]' : 'border-gray-200'
      }`}
    >
      <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-black mb-1">{listing.title}</h3>
        <p className="text-sm text-gray-600">{listing.location}</p>
        <p className="text-[#4CAF87] font-semibold mt-2">${listing.price} / month</p>
        <p className="text-sm text-gray-600">{listing.guests} guest{listing.guests > 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

export default ListingCard;
