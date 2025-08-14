import React from 'react';
import { Button } from './ui/button';
import './Dropdown.css';

interface GuestsDropdownProps {
  value: number;
  onChange: (count: number) => void;
  onClose?: () => void;
}

const GuestsDropdown: React.FC<GuestsDropdownProps> = ({ value, onChange, onClose }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-4">
        <button
          className="h-8 w-8 rounded-full border border-[#4CAF87] flex items-center justify-center disabled:opacity-50"
          onClick={() => onChange(Math.max(1, value - 1))}
          disabled={value <= 1}
        >
          −
        </button>
        <span className="text-lg font-semibold">{value}</span>
        <button
          className="h-8 w-8 rounded-full border border-[#4CAF87] flex items-center justify-center"
          onClick={() => onChange(value + 1)}
        >
          +
        </button>
      </div>
      <Button className="bg-[#4CAF87] text-white rounded-full px-4 py-2 hover:bg-[#3f8b6c]" onClick={onClose}>
        Done
      </Button>
    </div>
  );
};

export default GuestsDropdown;
