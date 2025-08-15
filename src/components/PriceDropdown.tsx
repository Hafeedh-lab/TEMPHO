import React from 'react';
import { createPortal } from 'react-dom';
import './Dropdown.css';

interface PriceDropdownProps {
  onSelect: (price: string) => void;
  onClose: () => void;
  isMobile?: boolean;
  className?: string;
  anchorRect?: DOMRect | null;
}

const prices = [
  'Any price',
  '$500 – $1,000',
  '$1,000 – $2,000',
  '$2,000 – $3,000',
  '$3,000+'
];

const PriceDropdown: React.FC<PriceDropdownProps> = ({
  onSelect,
  onClose,
  isMobile = false,
  className = '',
  anchorRect = null,
}) => {
  const handleSelect = (price: string) => {
    onSelect(price);
  };

  const content = (
    <ul className="space-y-2">
      {prices.map((price) => (
        <li key={price}>
          <button
            className="dropdown-item w-full text-left"
            onClick={() => {
              handleSelect(price);
            }}
          >
            {price}
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

  if (!anchorRect) return null;

  const width = 256; // 16rem
  let left = anchorRect.left;
  if (left + width > window.innerWidth) {
    left = window.innerWidth - width - 16; // keep some margin
  }

  const style: React.CSSProperties = {
    top: anchorRect.bottom + window.scrollY + 8,
    left,
  };

  return createPortal(
    <div className={`dropdown-desktop open ${className}`} style={style}>
      {content}
    </div>,
    document.body
  );
};

export default PriceDropdown;

