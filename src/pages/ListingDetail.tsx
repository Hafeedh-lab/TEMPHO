import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from '../components/ui/button';
import PropertyGallery from '../components/PropertyGallery';
import Map from '../components/Map';
import { propertyListings } from '../data/listings';

const ListingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = propertyListings.find((p) => p.id === Number(id));
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMap ? 'hidden' : '';
  }, [showMap]);

  if (!property) return null;

  return (
    <div className="bg-[#FFF7EB] min-h-screen">
      <Header />
      <div className="container pt-28 pb-16">
        {/* Property Gallery */}
        <PropertyGallery
          images={property.images}
          alt={`${property.propertyType} at ${property.address}`}
          className="mb-8"
        />

        <h1 className="[font-family:'Golos_Text',Helvetica] font-semibold text-3xl md:text-4xl text-black mb-2">
          {property.address}
        </h1>
        <p className="[font-family:'Golos_Text',Helvetica] text-xl md:text-2xl text-[#4CAF87] mb-4">
          {property.price} — {property.propertyType}
        </p>
        <p className="[font-family:'Golos_Text',Helvetica] text-black text-lg mb-4">
          {property.beds} Beds | {property.baths} Baths | {property.garage}-Car Garage
        </p>
        <p className="text-[#6b6b6b] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at magna non nunc tristique rhoncus. Donec non semper nulla. Praesent vitae arcu tempor neque lacinia pretium. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.
        </p>
        <Button
          onClick={() => (window.location.href = '/contact')}
          className="bg-[#4CAF87] text-white [font-family:'Golos_Text',Helvetica]"
        >
          Contact / Book Now
        </Button>

        {/* Inline Map */}
        <div className="mt-8">
          <Map
            coordinates={property.coordinates}
            title={property.address}
            price={property.price}
            className="w-full h-64 rounded-lg"
          />
          <button
            onClick={() => setShowMap(true)}
            className="mt-2 text-[#4CAF87] underline [font-family:'Golos_Text',Helvetica]"
          >
            View on Map
          </button>
        </div>
      </div>

      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-in fade-in">
          <div className="relative w-full h-full">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-50"
              onClick={() => setShowMap(false)}
            >
              &times;
            </button>
            <Map
              coordinates={property.coordinates}
              title={property.address}
              price={property.price}
              className="w-full h-full"
              zoom={15}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingDetail;
