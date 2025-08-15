import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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

const priceLabels: Record<string, string> = {
  '': 'Any price',
  '500-1000': '$500 – $1,000',
  '1000-2000': '$1,000 – $2,000',
  '2000-3000': '$2,000 – $3,000',
  '3000-': '$3,000+'
};

export const SearchBar: React.FC<SearchBarProps> = ({
  isScrolled,
  isMobile = false,
  className = ''
}) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [guests, setGuests] = useState(1);
  const [active, setActive] = useState<null | 'location' | 'price' | 'guests'>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties | null>(null);

  const locationRef = useRef<HTMLButtonElement>(null);
  const priceRef = useRef<HTMLButtonElement>(null);
  const guestsRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync state with URL when on listings page
  useEffect(() => {
    if (pathname === '/listings') {
      const loc = searchParams.get('location') || '';
      const pr = searchParams.get('price') || '';
      const g = parseInt(searchParams.get('guests') || '1', 10);
      setLocation(loc);
      setPrice(pr);
      setGuests(g || 1);
    }
  }, [pathname, searchParams]);

  const updateParam = (key: string, value: string | number | undefined) => {
    if (pathname !== '/listings') return;
    const params = new URLSearchParams(searchParams);
    if (!value || value === '' || value === '1') {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }
    setSearchParams(params);
  };

  const formatGuests = (n: number) => (n === 1 ? '1 guest' : `${n} guests`);

  const updatePosition = (type: 'location' | 'price' | 'guests') => {
    const ref =
      type === 'location' ? locationRef.current : type === 'price' ? priceRef.current : guestsRef.current;
    if (ref) {
      const rect = ref.getBoundingClientRect();
      const dropdownWidth = 256; // 16rem
      let left = rect.left + window.scrollX;
      if (type === 'guests') {
        left = rect.right + window.scrollX - dropdownWidth;
      }
      setDropdownStyle({ top: rect.bottom + 8, left, width: dropdownWidth });
    }
  };

  const openDropdown = (type: 'location' | 'price' | 'guests') => {
    updatePosition(type);
    setActive(type);
  };

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    updateParam('location', loc);
    // Auto-progression to price
    setTimeout(() => openDropdown('price'), 100);
  };

  const handlePriceSelect = (value: string) => {
    setPrice(value);
    updateParam('price', value);
    // Auto-progression to guests
    setTimeout(() => openDropdown('guests'), 100);
  };

  const handleGuestsSelect = (count: number) => {
    setGuests(count);
    updateParam('guests', count);
    setActive(null);
    setDropdownStyle(null);
  };

  const isActiveSearch = Boolean(active || location || price || guests !== 1);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (price) params.set('price', price);
    if (guests !== 1) params.set('guests', String(guests));
    navigate(`/listings${params.toString() ? `?${params.toString()}` : ''}`);
    setActive(null);
  };

  const handleClickOutside = () => {
    setActive(null);
    setDropdownStyle(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!active || isMobile) return;
    const handleClick = (e: MouseEvent) => {
      const dropdown = document.querySelector('.dropdown-desktop.open, .modal-mobile.open');
      if (
        dropdown && dropdown.contains(e.target as Node)
      ) {
        return;
      }
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        return;
      }
      handleClickOutside();
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [active, isMobile]);

  // Keep dropdown attached on scroll/resize
  useEffect(() => {
    if (!active) return;
    const handleScroll = () => updatePosition(active);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [active]);

  useEffect(() => {
    if (active) updatePosition(active);
  }, [active, isScrolled]);

  return (
    <div ref={containerRef} className={`relative transition-all duration-300 ease-in-out ${className}`}>
      <div
        className={`bg-white rounded-full border-2 border-[#4CAF87]/30 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${isScrolled ? 'h-12' : 'h-16'}`}
      >
        <div className="flex items-center h-full overflow-hidden">
          <button
            ref={locationRef}
            className="flex-1 px-4 md:px-6 text-left border-r border-[#4CAF87]/20 focus:outline-none"
            onClick={() => openDropdown('location')}
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
            ref={priceRef}
            className="flex-1 px-4 md:px-6 text-left border-r border-[#4CAF87]/20 focus:outline-none"
            onClick={() => openDropdown('price')}
          >
            <span
              className={`block text-[#4CAF87] font-semibold [font-family:'Golos_Text',Helvetica] transition-all duration-300 ${isScrolled ? 'text-xs' : 'text-sm'}`}
            >
              Price
            </span>
            <span
              className={`block [font-family:'Golos_Text',Helvetica] text-gray-700 transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}
            >
              {priceLabels[price] || 'Any price'}
            </span>
          </button>

          <button
            ref={guestsRef}
            className="flex-1 px-4 md:px-6 text-left focus:outline-none"
            onClick={() => openDropdown('guests')}
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
          style={dropdownStyle ?? undefined}
          onSelect={handleLocationSelect}
          onClose={handleClickOutside}
        />
      )}

      {active === 'price' && (
        <PriceDropdown
          isMobile={isMobile}
          style={dropdownStyle ?? undefined}
          onSelect={handlePriceSelect}
          onClose={handleClickOutside}
        />
      )}

      {active === 'guests' && (
        <GuestsDropdown
          isMobile={isMobile}
          style={dropdownStyle ?? undefined}
          guests={guests}
          onSelect={handleGuestsSelect}
          onClose={handleClickOutside}
        />
      )}
    </div>
  );
};

export default SearchBar;
