import React from 'react';
import './Dropdown.css';

interface Props {
  value: number;
  onChange: (value: number) => void;
  onClose: () => void;
  isMobile: boolean;
}

const GuestsDropdown: React.FC<Props> = ({ value, onChange, onClose, isMobile }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(Math.max(1, value - 1));

  const controls = (
    <div className="guest-controls">
      <button className="guest-btn" onClick={decrement} disabled={value <= 1}>-</button>
      <span className="guest-count">{value}</span>
      <button className="guest-btn" onClick={increment}>+</button>
    </div>
  );

  if (isMobile) {
    return (
      <div className="dropdown-modal">
        <div className="dropdown-modal-content">
          <button className="close-btn" onClick={onClose}>×</button>
          {controls}
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-desktop" style={{ left: '66%' }}>
      {controls}
    </div>
  );
};

export default GuestsDropdown;
