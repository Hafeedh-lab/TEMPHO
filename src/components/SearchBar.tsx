import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface SearchBarProps {
  isScrolled: boolean;
  isMobile?: boolean;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  isScrolled, 
  isMobile = false, 
  className = '' 
}) => {
  const [searchData, setSearchData] = useState({
    location: '',
    price: '',
    guests: 1
  });
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSearch = () => {
    console.log('Search triggered:', searchData);
    // Add search logic here
  };

  const handleInputChange = (field: string, value: string | number) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatGuestText = (count: number) => {
    if (count === 1) return '1 guest';
    return `${count} guests`;
  };

  // Mobile layout
  if (isMobile) {
    return (
      <div className={`w-full transition-all duration-300 ease-in-out ${className}`}>
        <div className={`bg-white rounded-full border-2 border-[#569b6f]/30 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${isScrolled ? 'h-10' : 'h-12'}`}>
          <div className="flex items-center h-full px-3">
            {/* Compact Location Input */}
            <div className="flex-1 mr-2">
              <Input
                type="text"
                placeholder="Where to?"
                value={searchData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className={`border-none bg-transparent p-0 h-auto [font-family:'Golos_Text',Helvetica] text-gray-700 placeholder:text-[#9f9f9f] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm' : 'text-base'}`}
                aria-label="Search location"
              />
            </div>

            {/* Guest Counter */}
            <div className="flex items-center space-x-1 mr-2">
              <button
                onClick={() => handleInputChange('guests', Math.max(1, searchData.guests - 1))}
                className={`rounded-full border border-[#569b6f]/30 flex items-center justify-center hover:border-[#569b6f] hover:bg-[#569b6f]/5 transition-all duration-300 ease-in-out ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`}
                disabled={searchData.guests <= 1}
                aria-label="Decrease guest count"
              >
                <span className="text-[#569b6f] text-xs">−</span>
              </button>
              <span className={`[font-family:'Golos_Text',Helvetica] font-medium text-[#569b6f] min-w-[15px] text-center transition-all duration-300 ease-in-out ${isScrolled ? 'text-xs' : 'text-sm'}`}>
                {searchData.guests}
              </span>
              <button
                onClick={() => handleInputChange('guests', Math.min(16, searchData.guests + 1))}
                className={`rounded-full border border-[#569b6f]/30 flex items-center justify-center hover:border-[#569b6f] hover:bg-[#569b6f]/5 transition-all duration-300 ease-in-out ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`}
                aria-label="Increase guest count"
              >
                <span className="text-[#569b6f] text-xs">+</span>
              </button>
            </div>

            {/* Search Button */}
            <Button
              onClick={handleSearch}
              className={`rounded-full bg-[#569b6f] hover:bg-[#4d8a63] text-white [font-family:'Golos_Text',Helvetica] font-bold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-0 ${isScrolled ? 'h-6 w-6' : 'h-8 w-8'}`}
              aria-label="Search properties"
            >
              <svg className={`transition-all duration-300 ease-in-out ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Price Input Below */}
        {!isScrolled && (
          <div className="mt-2">
            <Input
              type="text"
              placeholder="Price range (e.g., $1000-$2000)"
              value={searchData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              className="w-full bg-white border-2 border-[#569b6f]/30 rounded-full px-4 py-2 [font-family:'Golos_Text',Helvetica] text-gray-700 placeholder:text-[#9f9f9f] focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
              aria-label="Price range"
            />
          </div>
        )}
      </div>
    );
  }

  // Desktop layout
  return (
    <div className={`relative transition-all duration-300 ease-in-out ${className}`}>
      <div className={`bg-white rounded-full border-2 border-[#569b6f]/30 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${isScrolled ? 'h-12' : 'h-16'}`}>
        <div className="flex items-center h-full">
          {/* Location Input */}
          <div className="flex-1 px-4 md:px-6 border-r border-[#569b6f]/20">
            <div className="flex flex-col justify-center h-full">
              <label className={`text-[#569b6f] font-semibold [font-family:'Golos_Text',Helvetica] transition-all duration-300 ease-in-out ${isScrolled ? 'text-xs' : 'text-sm'}`}>
                Where
              </label>
              <Input
                type="text"
                placeholder="Search destinations"
                value={searchData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                onFocus={() => setActiveField('location')}
                onBlur={() => setActiveField(null)}
                className={`border-none bg-transparent p-0 h-auto [font-family:'Golos_Text',Helvetica] text-gray-700 placeholder:text-[#9f9f9f] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm' : 'text-base'}`}
                aria-label="Search location"
              />
            </div>
          </div>

          {/* Price Input */}
          <div className="flex-1 px-4 md:px-6 border-r border-[#569b6f]/20">
            <div className="flex flex-col justify-center h-full">
              <label className={`text-[#569b6f] font-semibold [font-family:'Golos_Text',Helvetica] transition-all duration-300 ease-in-out ${isScrolled ? 'text-xs' : 'text-sm'}`}>
                Price Range
              </label>
              <Input
                type="text"
                placeholder="Any price"
                value={searchData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                onFocus={() => setActiveField('price')}
                onBlur={() => setActiveField(null)}
                className={`border-none bg-transparent p-0 h-auto [font-family:'Golos_Text',Helvetica] text-gray-700 placeholder:text-[#9f9f9f] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm' : 'text-base'}`}
                aria-label="Price range"
              />
            </div>
          </div>

          {/* Guests Input */}
          <div className="flex-1 px-4 md:px-6">
            <div className="flex flex-col justify-center h-full">
              <label className={`text-[#569b6f] font-semibold [font-family:'Golos_Text',Helvetica] transition-all duration-300 ease-in-out ${isScrolled ? 'text-xs' : 'text-sm'}`}>
                Guests
              </label>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleInputChange('guests', Math.max(1, searchData.guests - 1))}
                  className={`rounded-full border border-[#569b6f]/30 flex items-center justify-center hover:border-[#569b6f] hover:bg-[#569b6f]/5 transition-all duration-300 ease-in-out ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`}
                  disabled={searchData.guests <= 1}
                  aria-label="Decrease guest count"
                >
                  <span className="text-[#569b6f] text-sm">−</span>
                </button>
                <span className={`[font-family:'Golos_Text',Helvetica] font-medium text-gray-700 min-w-[20px] text-center transition-all duration-300 ease-in-out ${isScrolled ? 'text-sm' : 'text-base'}`}>
                  {searchData.guests}
                </span>
                <button
                  onClick={() => handleInputChange('guests', Math.min(16, searchData.guests + 1))}
                  className={`rounded-full border border-[#569b6f]/30 flex items-center justify-center hover:border-[#569b6f] hover:bg-[#569b6f]/5 transition-all duration-300 ease-in-out ${isScrolled ? 'w-5 h-5' : 'w-6 h-6'}`}
                  aria-label="Increase guest count"
                >
                  <span className="text-[#569b6f] text-sm">+</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="pr-2">
            <Button
              onClick={handleSearch}
              className={`rounded-full bg-[#569b6f] hover:bg-[#4d8a63] text-white [font-family:'Golos_Text',Helvetica] font-bold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-0 ${isScrolled ? 'h-8 w-8' : 'h-12 w-12'}`}
              aria-label="Search properties"
            >
              <svg className={`transition-all duration-300 ease-in-out ${isScrolled ? 'w-4 h-4' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown Suggestions (shown when focused) */}
      {activeField === 'location' && !isScrolled && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#569b6f]/20 p-4 z-50">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#569b6f] uppercase tracking-wide [font-family:'Golos_Text',Helvetica]">Popular destinations</div>
            {['Toronto, ON', 'Vancouver, BC', 'Montreal, QC', 'Calgary, AB'].map((city) => (
              <button
                key={city}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#569b6f]/5 text-sm [font-family:'Golos_Text',Helvetica] transition-colors"
                onClick={() => {
                  handleInputChange('location', city);
                  setActiveField(null);
                }}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      )}

      {activeField === 'price' && !isScrolled && (
        <div className="absolute top-full left-1/3 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#569b6f]/20 p-4 z-50">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#569b6f] uppercase tracking-wide [font-family:'Golos_Text',Helvetica]">Price ranges</div>
            {['$500 - $1000', '$1000 - $1500', '$1500 - $2000', '$2000+'].map((range) => (
              <button
                key={range}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-[#569b6f]/5 text-sm [font-family:'Golos_Text',Helvetica] transition-colors"
                onClick={() => {
                  handleInputChange('price', range);
                  setActiveField(null);
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
