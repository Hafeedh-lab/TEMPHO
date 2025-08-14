import React from 'react';
import { MapPin } from 'lucide-react';
import './Dropdown.css';

interface LocationDropdownProps {
  onSelect: (location: string) => void;
  onClose: () => void;
  isMobile?: boolean;
}

const locations = [
  'Toronto, Canada',
  'Vancouver, Canada',
  'Montreal, Canada',
  'Calgary, Canada',
  'Ottawa, Canada'
];

const LocationDropdown: React.FC<LocationDropdownProps> = ({ onSelect, onClose, isMobile = false }) => {
  const handleSelect = (loc: string) => {
    onSelect(loc);
  };

  const content = (
    <ul className="dropdown-list">
      {locations.map((loc) => (
        <li key={loc} className="dropdown-item" onClick={() => handleSelect(loc)}>
          <MapPin className="w-4 h-4 mr-2 text-[#4CAF87]" />
          {loc}
        </li>
      ))}
    </ul>
  );

  return isMobile ? (
    <div className="mobile-modal">
      <button className="modal-close" onClick={onClose}>
        &times;
      </button>
      {content}
    </div>
  ) : (
    <div className="dropdown">{content}</div>
  );
};

export default LocationDropdown;
