import React, { useState } from 'react';
import { Button } from './ui/button';
import LocationDropdown from './LocationDropdown';
import PriceDropdown from './PriceDropdown';
import GuestsDropdown from './GuestsDropdown';
import './SearchBar.css';

interface SearchBarProps {
  isScrolled: boolean;
  isMobile?: boolean;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  isScrolled,
  isMobile = false,
  className = ''
}) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [guests, setGuests] = useState(1);
  const [active, setActive] = useState<null | 'location' | 'price' | 'guests'>(null);

  const open = (field: 'location' | 'price' | 'guests') => setActive(field);
  const close = () => setActive(null);

  const handleSearch = () => {
    console.log('Searching', { location, price, guests });
    close();
  };

  const activeSearch = location !== '' || price !== '' || guests > 1;

  return (
    <div className={`relative search-bar ${className}`}>
      {/* Overlay */}
      <div
        className={`search-bar-overlay ${active ? 'active' : ''}`}
        onClick={close}
      />

      {/* Bar */}
      <div
        className={`search-bar-container ${isScrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : 'desktop'}`}
      >
        <div className="section" onClick={() => open('location')}>
          <span className="label">Where</span>
          <span className="value">{location || 'Add location'}</span>
        </div>
        <div className="section" onClick={() => open('price')}>
          <span className="label">Price</span>
          <span className="value">{price || 'Any price'}</span>
        </div>
        <div className="section" onClick={() => open('guests')}>
          <span className="label">Guests</span>
          <span className="value">{guests} {guests === 1 ? 'guest' : 'guests'}</span>
        </div>
        <Button
          onClick={handleSearch}
          className={`search-button ${activeSearch ? 'expanded' : ''}`}
          aria-label="Search properties"
        >
          {activeSearch ? 'Search' : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </Button>
      </div>

      {/* Dropdowns */}
      {active === 'location' && (
        <div className="absolute left-0 top-full">
          <LocationDropdown
            isMobile={isMobile}
            onSelect={(loc) => {
              setLocation(loc);
              setActive('price');
            }}
            onClose={close}
          />
        </div>
      )}
      {active === 'price' && (
        <div className="absolute left-1/3 top-full">
          <PriceDropdown
            isMobile={isMobile}
            onSelect={(p) => {
              setPrice(p);
              setActive('guests');
            }}
            onClose={close}
          />
        </div>
      )}
      {active === 'guests' && (
        <div className="absolute left-2/3 top-full">
          <GuestsDropdown
            isMobile={isMobile}
            value={guests}
            onChange={(count) => setGuests(count)}
            onClose={close}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
