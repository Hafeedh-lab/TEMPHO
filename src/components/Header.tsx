import React, { useState, useEffect } from 'react';
import './Header.css';
import { Button } from './ui/button';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header
      className={`header-container sticky top-0 z-50 w-full border-b border-green transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-4'}`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between flex-nowrap px-4 transition-all duration-300 ${isScrolled ? 'scale-95' : ''}`}>
        <div className="flex items-center flex-shrink-0 gap-2">
          <img src="https://c.animaapp.com/mdww1mm3xpw4UO/img/polygon-2.svg" alt="logo" className="w-10 h-10" />
          <span className="font-bold text-2xl whitespace-nowrap">
            <span className="text-green">Temp</span>
            <span className="text-[#ffc369]">H</span>
            <span className="text-green">o</span>
          </span>
        </div>
        <div className="flex-1 mx-4">
          <SearchBar isScrolled={isScrolled} />
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button className="bg-[#ffc369] text-white hover:bg-[#e6af5e]">Login</Button>
          <Button className="bg-green text-white hover:bg-[#3d8b6e]">Menu</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
