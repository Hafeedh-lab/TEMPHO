import React from 'react';
import { MapPin } from 'lucide-react';
import './Dropdown.css';

interface LocationDropdownProps {
  onSelect: (location: string) => void;
}

const locations = [
  'Toronto, Canada',
  'Vancouver, Canada',
  'Montreal, Canada',
  'Calgary, Canada',
  'Ottawa, Canada'
];

const LocationDropdown: React.FC<LocationDropdownProps> = ({ onSelect }) => {
  return (
    <div className="space-y-2">
      {locations.map((loc) => (
        <button
          key={loc}
          className="dropdown-item"
          onClick={() => onSelect(loc)}
        >
          <MapPin className="h-4 w-4 mr-2 text-[#4CAF87]" />
          {loc}
        </button>
      ))}
    </div>
  );
};

export default LocationDropdown;
