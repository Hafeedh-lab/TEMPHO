import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useResponsive } from '../hooks/useResponsive';
import MobileImageCarousel from './MobileImageCarousel';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  autoPlay?: boolean;
  onImageClick?: () => void;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt,
  className = '',
  autoPlay = false,
  onImageClick
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { isMobile } = useResponsive();

  // Use mobile carousel on mobile devices
  if (isMobile) {
    return (
      <MobileImageCarousel
        images={images}
        alt={alt}
        className={className}
        onImageClick={onImageClick}
      />
    );
  }

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1800);
  }, [images.length]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && isHovered && images.length > 1) {
      startAutoPlay();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isHovered, images.length, startAutoPlay]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDotClick = (index: number) => {
    goToIndex(index);
    if (autoPlay && isHovered) startAutoPlay();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentIndex(0); // Reset to first image
  };

  // If only one image, display it normally
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
    <div
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${alt} - Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 cursor-pointer ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={onImageClick}
            loading="lazy"
          />
        ))}
      </div>

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-[#4CAF87]' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;