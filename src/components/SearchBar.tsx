import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import LocationDropdown from './LocationDropdown';
import PriceDropdown from './PriceDropdown';
import GuestsDropdown from './GuestsDropdown';

interface SearchBarProps {
  isScrolled: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ isScrolled }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [guests, setGuests] = useState(1);
  const [active, setActive] = useState<null | 'location' | 'price' | 'guests'>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    setActive('price');
  };

  const handlePriceSelect = (p: string) => {
    setPrice(p);
    setActive('guests');
  };

  const handleGuestsChange = (count: number) => {
    setGuests(count);
  };

  const closeDropdown = () => setActive(null);

  const handleSearch = () => {
    console.log('Search triggered:', { location, price, guests });
    closeDropdown();
  };

  return (
    <div className="relative w-full">
      <div className={`flex items-center bg-white rounded-full shadow-md border-2 border-green transition-all duration-300 overflow-hidden ${isScrolled ? 'py-2 px-4 scale-90' : 'py-3 px-6'}`}>
        <div className="flex-1 flex items-center section cursor-pointer" onClick={() => setActive('location')}>
          <span className="section-label">Where</span>
          <span className="section-value">{location || 'Add location'}</span>
        </div>
        <div className="flex-1 flex items-center section cursor-pointer" onClick={() => setActive('price')}>
          <span className="section-label">Price</span>
          <span className="section-value">{price || 'Any price'}</span>
        </div>
        <div className="flex-1 flex items-center section cursor-pointer" onClick={() => setActive('guests')}>
          <span className="section-label">Guests</span>
          <span className="section-value">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
        </div>
        <button
          onClick={handleSearch}
          className={`search-button flex items-center justify-center rounded-full text-white transition-all duration-300 ${active ? 'px-4 search-button-active' : 'px-3'}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {active && <span className="ml-2 font-semibold">Search</span>}
        </button>
      </div>

      {active === 'location' && (
        <LocationDropdown
          onSelect={handleLocationSelect}
          onClose={closeDropdown}
          isMobile={isMobile}
        />
      )}

      {active === 'price' && (
        <PriceDropdown
          onSelect={handlePriceSelect}
          onClose={closeDropdown}
          isMobile={isMobile}
        />
      )}

      {active === 'guests' && (
        <GuestsDropdown
          value={guests}
          onChange={handleGuestsChange}
          onClose={closeDropdown}
          isMobile={isMobile}
        />
      )}

      {active && (
        <div
          className={`search-overlay fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={closeDropdown}
        />
      )}
    </div>
  );
};

export default SearchBar;
