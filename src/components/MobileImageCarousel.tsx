import React, { useState, useRef } from 'react';

interface MobileImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  onImageClick?: () => void;
}

export const MobileImageCarousel: React.FC<MobileImageCarouselProps> = ({
  images,
  alt,
  className = '',
  onImageClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showIndicators, setShowIndicators] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setShowIndicators(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0 && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (diffX < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
    setTimeout(() => setShowIndicators(false), 1500);
  };

  // Mouse handling for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setShowIndicators(true);
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setShowIndicators(false), 1500);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setTimeout(() => setShowIndicators(false), 1500);
  };

  if (images.length <= 1) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-full object-cover cursor-pointer"
          onClick={onImageClick}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={onImageClick}
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Image Indicators */}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10 transition-opacity duration-300 ${
          showIndicators ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
              setShowIndicators(true);
            }}
            className={`w-2 h-2 rounded-full focus:outline-none transition-colors duration-200 ${
              index === currentIndex ? 'bg-[#4CAF87]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileImageCarousel;