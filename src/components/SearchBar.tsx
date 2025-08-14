import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import LocationDropdown from './LocationDropdown';
import PriceDropdown from './PriceDropdown';
import GuestsDropdown from './GuestsDropdown';
import './SearchBar.css';
import './Dropdown.css';

interface SearchBarProps {
  isScrolled: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isScrolled }) => {
  const [searchData, setSearchData] = useState({
    location: '',
    price: '',
    guests: 1
  });
  const [activeDropdown, setActiveDropdown] = useState<'location' | 'price' | 'guests' | null>(null);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLocationSelect = (loc: string) => {
    setSearchData(prev => ({ ...prev, location: loc }));
    setActiveDropdown('price');
  };

  const handlePriceSelect = (price: string) => {
    setSearchData(prev => ({ ...prev, price }));
    setActiveDropdown('guests');
  };

  const handleGuestsChange = (count: number) => {
    setSearchData(prev => ({ ...prev, guests: count }));
  };

  const handleSearch = () => {
    console.log('Search triggered:', searchData);
    setActiveDropdown(null);
  };

  const isSearchReady =
    searchData.location !== '' && searchData.price !== '' && searchData.guests >= 1;

  return (
    <div className="relative">
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ${
          activeDropdown ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setActiveDropdown(null)}
      />

      <div
        className={`search-bar flex items-center divide-x divide-[#569b6f]/20 transition-all duration-300 ease-in-out ${
          isScrolled ? 'py-2 pr-2 pl-4' : 'py-3 pr-3 pl-6'
        }`}
      >
        <button
          className="section"
          onClick={() => setActiveDropdown('location')}
        >
          <span className="section-label">Where</span>
          <span className="section-value">
            {searchData.location || 'Add location'}
          </span>
        </button>
        <button
          className="section"
          onClick={() => setActiveDropdown('price')}
        >
          <span className="section-label">Price</span>
          <span className="section-value">
            {searchData.price || 'Add price'}
          </span>
        </button>
        <button
          className="section"
          onClick={() => setActiveDropdown('guests')}
        >
          <span className="section-label">Guests</span>
          <span className="section-value">
            {searchData.guests} guest{searchData.guests > 1 ? 's' : ''}
          </span>
        </button>
        <Button
          onClick={handleSearch}
          className={`search-trigger ml-2 ${isSearchReady ? 'active px-4' : ''}`}
        >
          {isSearchReady ? (
            'Search'
          ) : (
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

      {activeDropdown === 'location' && (
        isMobileView ? (
          <div className="dropdown-modal">
            <button className="close-modal" onClick={() => setActiveDropdown(null)}>
              ×
            </button>
            <LocationDropdown
              onSelect={(loc) => {
                handleLocationSelect(loc);
              }}
            />
          </div>
        ) : (
          <div className="dropdown-desktop left-0">
            <LocationDropdown onSelect={handleLocationSelect} />
          </div>
        )
      )}

      {activeDropdown === 'price' && (
        isMobileView ? (
          <div className="dropdown-modal">
            <button className="close-modal" onClick={() => setActiveDropdown(null)}>
              ×
            </button>
            <PriceDropdown
              onSelect={(price) => {
                handlePriceSelect(price);
              }}
            />
          </div>
        ) : (
          <div className="dropdown-desktop left-1/3">
            <PriceDropdown onSelect={handlePriceSelect} />
          </div>
        )
      )}

      {activeDropdown === 'guests' && (
        isMobileView ? (
          <div className="dropdown-modal">
            <button className="close-modal" onClick={() => setActiveDropdown(null)}>
              ×
            </button>
            <GuestsDropdown
              value={searchData.guests}
              onChange={handleGuestsChange}
              onClose={() => setActiveDropdown(null)}
            />
          </div>
        ) : (
          <div className="dropdown-desktop left-2/3">
            <GuestsDropdown
              value={searchData.guests}
              onChange={handleGuestsChange}
              onClose={() => setActiveDropdown(null)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default SearchBar;
