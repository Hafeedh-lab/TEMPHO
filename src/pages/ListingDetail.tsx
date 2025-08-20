import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import PropertyGallery from '../components/PropertyGallery';
import { propertyListings } from '../data/listings';
import Map from '../components/Map';

const ListingDetail: React.FC = () => {
  const { id } = useParams();
  const property = propertyListings.find((p) => p.id === Number(id));
  const [showMap, setShowMap] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (showMap) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showMap]);

  if (!property) return null;

  const openModal = () => {
    setShowMap(true);
    requestAnimationFrame(() => setAnimate(true));
  };

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => setShowMap(false), 300);
  };

  return (
    <div className="bg-[#FFF7EB] min-h-screen">
      <Header />
      <div className="container pt-28 pb-16">
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
        <Map
          coordinates={property.coordinates}
          title={property.address}
          price={property.price}
          className="w-full h-64 rounded"
        />
        <button
          onClick={openModal}
          className="mt-4 px-4 py-2 bg-[#4CAF87] text-white rounded [font-family:'Golos_Text',Helvetica]"
        >
          View on Map
        </button>
      </div>

      {showMap && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative w-full h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black"
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
