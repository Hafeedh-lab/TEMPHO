import React from 'react';
import { MapPin } from 'lucide-react';
import './Dropdown.css';

interface Props {
  onSelect: (location: string) => void;
  onClose: () => void;
  isMobile: boolean;
}

const locations = [
  'Toronto, Canada',
  'Vancouver, Canada',
  'Montreal, Canada',
  'Calgary, Canada',
  'Ottawa, Canada'
];

const LocationDropdown: React.FC<Props> = ({ onSelect, onClose, isMobile }) => {
  const handleSelect = (loc: string) => {
    onSelect(loc);
  };

  if (isMobile) {
    return (
      <div className="dropdown-modal">
        <div className="dropdown-modal-content">
          <button className="close-btn" onClick={onClose}>×</button>
          {locations.map((loc) => (
            <button key={loc} className="dropdown-item" onClick={() => handleSelect(loc)}>
              <MapPin className="w-4 h-4 mr-2" />
              {loc}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-desktop left-0">
      {locations.map((loc) => (
        <button key={loc} className="dropdown-item" onClick={() => handleSelect(loc)}>
          <MapPin className="w-4 h-4 mr-2" />
          {loc}
        </button>
      ))}
    </div>
  );
};

export default LocationDropdown;
