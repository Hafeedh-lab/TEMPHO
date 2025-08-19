import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Button } from './ui/button';
import LightboxModal from './LightboxModal';

interface PropertyGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export const PropertyGallery: React.FC<PropertyGalleryProps> = ({
  images,
  alt,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const openLightbox = (index?: number) => {
    if (index !== undefined) {
      setCurrentIndex(index);
    }
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  if (images.length === 0) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main Image Display */}
      <div className="relative group">
        <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden bg-gray-100">
          <img
            src={images[currentIndex]}
            alt={`${alt} - Main view`}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => openLightbox(currentIndex)}
          />

          {/* Navigation arrows for main image */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-[#4CAF87]" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-[#4CAF87]" />
              </button>
            </>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="space-y-3">
          <div
            ref={scrollContainerRef}
            className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2"
          >
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-[#4CAF87] opacity-100'
                    : 'border-gray-200 opacity-70 hover:opacity-100'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${alt} - Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* View All Photos Button */}
          <Button
            onClick={() => openLightbox()}
            className="bg-[#4CAF87] hover:bg-[#3b9b73] text-white rounded-lg px-4 py-2 flex items-center space-x-2 transition-colors"
          >
            <Camera className="w-4 h-4" />
            <span>View All Photos ({images.length})</span>
          </Button>
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        images={images}
        initialIndex={currentIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        alt={alt}
      />
    </div>
  );
};

export default PropertyGallery;