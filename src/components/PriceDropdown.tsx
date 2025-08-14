import React from 'react';
import './Dropdown.css';

interface PriceDropdownProps {
  onSelect: (price: string) => void;
}

const prices = [
  'Any price',
  '$500 - $1,000',
  '$1,000 - $2,000',
  '$2,000 - $3,000',
  '$3,000+'
];

const PriceDropdown: React.FC<PriceDropdownProps> = ({ onSelect }) => {
  return (
    <div className="space-y-2">
      {prices.map((price) => (
        <button
          key={price}
          className="dropdown-item"
          onClick={() => onSelect(price)}
        >
          {price}
        </button>
      ))}
    </div>
  );
};

export default PriceDropdown;
