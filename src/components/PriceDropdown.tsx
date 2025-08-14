import React from 'react';
import './Dropdown.css';

interface Props {
  onSelect: (price: string) => void;
  onClose: () => void;
  isMobile: boolean;
}

const prices = [
  'Any price',
  '$500 - $1,000',
  '$1,000 - $2,000',
  '$2,000 - $3,000',
  '$3,000+'
];

const PriceDropdown: React.FC<Props> = ({ onSelect, onClose, isMobile }) => {
  const handleSelect = (p: string) => {
    onSelect(p);
  };

  if (isMobile) {
    return (
      <div className="dropdown-modal">
        <div className="dropdown-modal-content">
          <button className="close-btn" onClick={onClose}>×</button>
          {prices.map((p) => (
            <button key={p} className="dropdown-item" onClick={() => handleSelect(p)}>
              {p}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-desktop" style={{ left: '33%' }}>
      {prices.map((p) => (
        <button key={p} className="dropdown-item" onClick={() => handleSelect(p)}>
          {p}
        </button>
      ))}
    </div>
  );
};

export default PriceDropdown;
