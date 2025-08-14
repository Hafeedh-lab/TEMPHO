import React from 'react';
import './Dropdown.css';

interface PriceDropdownProps {
  onSelect: (price: string) => void;
  onClose: () => void;
  isMobile?: boolean;
}

const prices = [
  'Any price',
  '$500 - $1,000',
  '$1,000 - $2,000',
  '$2,000 - $3,000',
  '$3,000+'
];

const PriceDropdown: React.FC<PriceDropdownProps> = ({ onSelect, onClose, isMobile = false }) => {
  const handleSelect = (p: string) => {
    onSelect(p);
  };

  const content = (
    <ul className="dropdown-list">
      {prices.map((p) => (
        <li key={p} className="dropdown-item" onClick={() => handleSelect(p)}>
          {p}
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

export default PriceDropdown;
