import React from 'react';
import './Dropdown.css';

interface PriceDropdownProps {
  onSelect: (price: string) => void;
  onClose: () => void;
  isMobile?: boolean;
  className?: string;
}

const prices = [
  'Any price',
  '$500 - $1,000',
  '$1,000 - $2,000',
  '$2,000 - $3,000',
  '$3,000+'
];

const PriceDropdown: React.FC<PriceDropdownProps> = ({
  onSelect,
  onClose,
  isMobile = false,
  className = ''
}) => {
  const content = (
    <ul className="space-y-2">
      {prices.map((price) => (
        <li key={price}>
          <button
            className="dropdown-item w-full text-left"
            onClick={() => {
              onSelect(price);
            }}
          >
            {price}
          </button>
        </li>
      ))}
    </ul>
  );

  if (isMobile) {
    return (
      <div className="dropdown-modal">
        <div className="modal-mobile open">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#4CAF87] font-semibold">Price</h2>
            <button className="text-2xl" onClick={onClose}>
              &times;
            </button>
          </div>
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className={`dropdown-desktop open ${className}`}>
      {content}
    </div>
  );
};

export default PriceDropdown;

