import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from './ui/button';
import './Dropdown.css';

interface GuestsDropdownProps {
  guests: number;
  onSelect: (guests: number) => void;
  onClose: () => void;
  isMobile?: boolean;
  className?: string;
  anchorRect?: DOMRect | null;
}

const GuestsDropdown: React.FC<GuestsDropdownProps> = ({
  guests,
  onSelect,
  onClose,
  isMobile = false,
  className = '',
  anchorRect = null,
}) => {
  const [count, setCount] = useState(guests);

  const handleChange = (delta: number) => {
    setCount((prev) => Math.max(1, prev + delta));
  };

  const handleApply = () => {
    onSelect(count);
  };

  const controls = (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-center mb-2">
        <span className="text-[#4CAF87] font-semibold [font-family:'Golos_Text',Helvetica]">
          How many guests?
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="guest-btn"
          onClick={() => handleChange(-1)}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="text-lg font-medium min-w-[60px] text-center" aria-live="polite">
          {count}
        </span>
        <button className="guest-btn" onClick={() => handleChange(1)}>
          +
        </button>
      </div>
      <Button
        onClick={handleApply}
        className="bg-[#4CAF87] hover:bg-[#3b9b73] text-white rounded-full px-4 py-1 transition"
      >
        Apply
      </Button>
    </div>
  );

  if (isMobile) {
    return createPortal(
      <div className="dropdown-modal" onClick={onClose}>
        <div className="modal-mobile open" onClick={(e) => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#4CAF87] font-semibold">Guests</h2>
            <button className="text-2xl" onClick={onClose}>
              &times;
            </button>
          </div>
          {controls}
        </div>
      </div>,
      document.body
    );
  }

  if (!anchorRect) return null;

  const width = 256; // 16rem
  let left = anchorRect.left;
  if (left + width > window.innerWidth) {
    left = window.innerWidth - width - 16;
  }

  const style: React.CSSProperties = {
    top: anchorRect.bottom + window.scrollY + 8,
    left,
  };

  return createPortal(
    <div className={`dropdown-desktop open ${className}`} style={style}>
      {controls}
    </div>,
    document.body
  );
};

export default GuestsDropdown;

