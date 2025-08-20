import React from 'react';
import { Listing } from '../data/mockListings';
import { ImageCarousel } from './ImageCarousel';

interface ListingWithImages extends Listing {
  images?: string[];
}

interface ListingCardProps {
  listing: ListingWithImages;
  onClick?: () => void;
  selected?: boolean;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing, onClick, selected }) => {
  // Prefer provided images array, fall back to single image
  const images = listing.images && listing.images.length > 0
    ? listing.images
    : listing.image
    ? [listing.image]
    : [];
  
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg overflow-hidden shadow-md bg-white transition transform hover:scale-105 border-2 ${selected ? 'border-[#4CAF87]' : 'border-transparent'}`}
    >
      <ImageCarousel
        images={images}
        alt={listing.title}
        className="w-full h-48"
        autoPlay={images.length > 1}
        showArrows={false}
      />
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