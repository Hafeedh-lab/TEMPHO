import React from 'react';
import { createPortal } from 'react-dom';
import './Dropdown.css';

interface PriceDropdownProps {
  onSelect: (price: string) => void; // value like "1000-2000"
  onClose: () => void;
  isMobile?: boolean;
  style?: React.CSSProperties;
}

const prices = [
  { label: 'Any price', value: '' },
  { label: '$500 – $1,000', value: '500-1000' },
  { label: '$1,000 – $2,000', value: '1000-2000' },
  { label: '$2,000 – $3,000', value: '2000-3000' },
  { label: '$3,000+', value: '3000-' }
];

const PriceDropdown: React.FC<PriceDropdownProps> = ({
  onSelect,
  onClose,
  isMobile = false,
  style
}) => {
  const handleSelect = (price: string) => {
    onSelect(price);
  };

  const content = (
    <ul className="space-y-2">
      {prices.map((price) => (
        <li key={price.value}>
          <button
            className="dropdown-item w-full text-left"
            onClick={() => {
              handleSelect(price.value);
            }}
          >
            {price.label}
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
            <h2 className="text-[#4CAF87] font-semibold">Price</h2>
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

  return createPortal(
    <div className="dropdown-desktop open" style={style}>
      {content}
    </div>,
    document.body
  );
};

export default PriceDropdown;
