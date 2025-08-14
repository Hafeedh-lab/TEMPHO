import React from 'react';
import './Dropdown.css';

interface GuestsDropdownProps {
  value: number;
  onChange: (count: number) => void;
  onClose: () => void;
  isMobile?: boolean;
}

const GuestsDropdown: React.FC<GuestsDropdownProps> = ({ value, onChange, onClose, isMobile = false }) => {
  const decrement = () => {
    if (value > 1) onChange(value - 1);
  };
  const increment = () => onChange(value + 1);

  const content = (
    <div className="guest-controls">
      <button className="guest-btn" onClick={decrement} disabled={value <= 1}>
        −
      </button>
      <span className="guest-count">{value}</span>
      <button className="guest-btn" onClick={increment}>
        +
      </button>
    </div>
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

export default GuestsDropdown;
