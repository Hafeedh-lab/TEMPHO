import React from 'react';
import { createPortal } from 'react-dom';
import './Dropdown.css';

interface LocationDropdownProps {
  onSelect: (location: string) => void;
  onClose: () => void;
  isMobile?: boolean;
  className?: string;
  anchorRect?: DOMRect | null;
}

const locations = [
  'Toronto, Canada',
  'Vancouver, Canada',
  'Montreal, Canada',
  'Calgary, Canada',
  'Ottawa, Canada'
];

const LocationDropdown: React.FC<LocationDropdownProps> = ({
  onSelect,
  onClose,
  isMobile = false,
  className = '',
  anchorRect = null,
}) => {
  const handleSelect = (location: string) => {
    onSelect(location);
  };

  const content = (
    <ul className="space-y-2">
      {locations.map((loc) => (
        <li key={loc}>
          <button
            className="dropdown-item flex items-center w-full"
            onClick={() => {
              handleSelect(loc);
            }}
          >
            <svg
              className="w-4 h-4 mr-2 text-[#4CAF87]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22s8-4.5 8-11c0-4.418-3.582-8-8-8S4 6.582 4 11c0 6.5 8 11 8 11z"
              />
            </svg>
            {loc}
          </button>
        </li>
      ))}
    </ul>
  );

  if (isMobile) {
    return createPortal(
      <div className="dropdown-modal" onClick={onClose}>
        <div className="modal-mobile open" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#4CAF87] font-semibold">Where</h2>
            <button className="text-2xl" onClick={onClose}>
              &times;
            </button>
          </div>
          {content}
        </div>
      </div>,
      document.body
    );
  }

  if (!anchorRect) return null;

  const style: React.CSSProperties = {
    top: anchorRect.bottom + window.scrollY + 8,
    left: anchorRect.left,
  };

  return createPortal(
    <div className={`dropdown-desktop open ${className}`} style={style}>
      {content}
    </div>,
    document.body
  );
};

export default LocationDropdown;

