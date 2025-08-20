import React, { useState, useEffect } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';
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
  const [fullscreen, setFullscreen] = useState(false);

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
    setTimeout(() => {
      setShowMap(false);
      setFullscreen(false);
    }, 300);
  };

  const toggleFullscreen = () => setFullscreen((f) => !f);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (showMap) {
      window.addEventListener('keydown', handler);
    }
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [showMap]);

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
        {!showMap && (
          <Map
            coordinates={property.coordinates}
            title={property.address}
            price={property.price}
            className="w-full h-64 rounded"
          />
        )}
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
          onClick={closeModal}
        >
          {/* Control Panel - Outside map container with highest z-index */}
          <div
            className="absolute top-4 right-4 z-[9999] flex items-center space-x-3 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Fullscreen Toggle Button */}
            <button
              onClick={toggleFullscreen}
              className="group bg-white hover:bg-gray-50 border border-gray-200 shadow-xl rounded-lg w-12 h-12 flex items-center justify-center text-gray-700 hover:text-[#4CAF87] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#4CAF87] focus:ring-offset-2 hover:scale-105"
              aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              title={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {fullscreen ? (
                <Minimize2 className="w-5 h-5 transition-transform group-hover:scale-110" />
              ) : (
                <Maximize2 className="w-5 h-5 transition-transform group-hover:scale-110" />
              )}
            </button>

            {/* Close/Cancel Button */}
            <button
              onClick={closeModal}
              className="group bg-white hover:bg-red-50 border border-gray-200 hover:border-red-200 shadow-xl rounded-lg w-12 h-12 flex items-center justify-center text-gray-700 hover:text-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 hover:scale-105"
              aria-label="Close map view"
              title="Close map view"
            >
              <svg 
                className="w-5 h-5 transition-transform group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Control Panel - Bottom positioned with highest z-index */}
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-[9999] md:hidden pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-xl rounded-full px-6 py-3 flex items-center space-x-6">
              <button
                onClick={toggleFullscreen}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#4CAF87] transition-colors"
                aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {fullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
                <span className="text-sm font-medium [font-family:'Golos_Text',Helvetica]">
                  {fullscreen ? "Exit" : "Fullscreen"}
                </span>
              </button>
              <div className="w-px h-4 bg-gray-300" />
              <button
                onClick={closeModal}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
                aria-label="Close map view"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-sm font-medium [font-family:'Golos_Text',Helvetica]">Close</span>
              </button>
            </div>
          </div>

          <div
            className={`relative bg-white ${fullscreen ? 'w-full h-full' : 'w-11/12 h-5/6 rounded-lg'} transition-all duration-300 transform ${fullscreen ? 'scale-100' : 'scale-95'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Map
              coordinates={property.coordinates}
              title={property.address}
              price={property.price}
              className={`w-full h-full ${fullscreen ? '' : 'rounded-lg overflow-hidden'}`}
              zoom={15}
              fullscreen={fullscreen}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingDetail;
