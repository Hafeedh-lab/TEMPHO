import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import LocationDropdown from './LocationDropdown';
import PriceDropdown from './PriceDropdown';
import GuestsDropdown from './GuestsDropdown';
import './SearchBar.css';

interface SearchBarProps {
  isScrolled: boolean;
  isMobile?: boolean;
  className?: string;
  onOverlayChange?: (active: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  isScrolled,
  isMobile = false,
  className = '',
  onOverlayChange
}) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [guests, setGuests] = useState(1);
  const [active, setActive] = useState<null | 'location' | 'price' | 'guests'>(null);

  useEffect(() => {
    onOverlayChange?.(active !== null);
  }, [active, onOverlayChange]);

  const formatGuests = (n: number) => (n === 1 ? '1 guest' : `${n} guests`);

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    // Auto-progression to price
    setTimeout(() => setActive('price'), 100);
  };

  const handlePriceSelect = (value: string) => {
    setPrice(value);
    // Auto-progression to guests
    setTimeout(() => setActive('guests'), 100);
  };

  const handleGuestsSelect = (count: number) => {
    setGuests(count);
    setActive(null);
  };

  const isActiveSearch = Boolean(active || location || price || guests !== 1);

  const handleSearch = () => {
    console.log('Search', { location, price, guests });
    setActive(null);
  };

  const handleClickOutside = () => {
    setActive(null);
  };

  return (
    <div className={`relative transition-all duration-300 ease-in-out ${className}`}>
      <div
        className={`bg-white rounded-full border-2 border-[#4CAF87]/30 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${isScrolled ? 'h-12' : 'h-16'}`}
      >
        <div className="flex items-center h-full overflow-hidden">
          <button
            className="flex-1 px-4 md:px-6 text-left border-r border-[#4CAF87]/20 focus:outline-none"
            onClick={() => setActive('location')}
          >
            <span
              className={`block text-[#4CAF87] font-semibold [font-family:'Golos_Text',Helvetica] transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}
            >
              Where
            </span>
            <span
              className={`block [font-family:'Golos_Text',Helvetica] text-gray-700 transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}
            >
              {location || 'Search destinations'}
            </span>
          </button>

          <button
            className="flex-1 px-4 md:px-6 text-left border-r border-[#4CAF87]/20 focus:outline-none"
            onClick={() => setActive('price')}
          >
            <span
              className={`block text-[#4CAF87] font-semibold [font-family:'Golos_Text',Helvetica] transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}
            >
              Price
            </span>
            <span
              className={`block [font-family:'Golos_Text',Helvetica] text-gray-700 transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}
            >
              {price || 'Any price'}
            </span>
          </button>

          <button
            className="flex-1 px-4 md:px-6 text-left focus:outline-none"
            onClick={() => setActive('guests')}
          >
            <span
              className={`block text-[#4CAF87] font-semibold [font-family:'Golos_Text',Helvetica] transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}
            >
              Guests
            </span>
            <span
              className={`block [font-family:'Golos_Text',Helvetica] text-gray-700 transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}
            >
              {formatGuests(guests)}
            </span>
          </button>

          <div className="pr-2">
            <Button
              onClick={handleSearch}
              className={`search-button rounded-full bg-[#4CAF87] text-white [font-family:'Golos_Text',Helvetica] font-bold shadow-md transition-all duration-300 hover:bg-[#3b9b73] ${isActiveSearch ? 'px-4 h-10 flex items-center gap-2' : 'h-10 w-10 flex items-center justify-center'} ${isScrolled ? 'text-sm' : 'text-base'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {isActiveSearch && <span>Search</span>}
            </Button>
          </div>
        </div>
      </div>

      {active === 'location' && (
        <LocationDropdown
          isMobile={isMobile}
          className="left-0"
          onSelect={handleLocationSelect}
          onClose={handleClickOutside}
        />
      )}

      {active === 'price' && (
        <PriceDropdown
          isMobile={isMobile}
          className="left-1/3"
          onSelect={handlePriceSelect}
          onClose={handleClickOutside}
        />
      )}

      {active === 'guests' && (
        <GuestsDropdown
          isMobile={isMobile}
          className="right-0"
          guests={guests}
          onSelect={handleGuestsSelect}
          onClose={handleClickOutside}
        />
      )}
    </div>
  );
};

export default SearchBar;

