import React from 'react';
import { Listing } from '../data/mockListings';

interface ListingCardProps {
  listing: Listing;
  onClick?: () => void;
  selected?: boolean;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg overflow-hidden shadow-md bg-white transition transform hover:scale-105 border-2 ${selected ? 'border-[#4CAF87]' : 'border-transparent'}`}
    >
      <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold text-[#4CAF87] [font-family:'Golos_Text',Helvetica]">
          {listing.title}
        </h3>
        <p className="text-sm text-gray-600">{listing.location}</p>
        <p className="text-sm text-gray-600">{listing.guests} guests</p>
        <p className="text-lg font-bold text-[#4CAF87]">${listing.price}</p>
      </div>
    </div>
  );
};

export default ListingCard;
