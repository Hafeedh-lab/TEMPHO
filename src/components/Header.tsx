import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import SearchBar from './SearchBar';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="header-sticky fixed top-0 left-0 z-50 w-screen bg-[#FFF7EB] border-b border-[#569b6f]/20">
        <div className={`w-full transition-all duration-300 ease-in-out ${isScrolled ? 'py-2 shadow-lg' : 'py-4 md:py-6'}`}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Desktop Layout - Logo and Search Bar Side by Side */}
            <div className="hidden md:flex items-center justify-between">
              {/* Left Side - Logo and Search Bar */}
              <div className="flex items-center flex-1 max-w-4xl">
                {/* Logo */}
                <div className="flex-shrink-0 mr-6 lg:mr-8">
                  {/* Clickable logo that redirects to home page */}
                  <Link to="/" className="block">
                    <div className={`relative transition-all duration-300 ease-in-out ${isScrolled ? 'w-[100px] h-[40px]' : 'w-[120px] md:w-[150px] lg:w-[169px] h-[45px] md:h-[55px] lg:h-[65px]'}`}>
                      <img
                        className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${isScrolled ? 'w-8 h-[40px]' : 'w-10 md:w-12 lg:w-16 h-[45px] md:h-[55px] lg:h-[65px]'}`}
                        alt="TempHo Logo - Click to go home"
                        src="https://c.animaapp.com/mdww1mm3xpw4UO/img/polygon-2.svg"
                      />
                      <div className={`absolute bg-[#FFF7EB] transition-all duration-300 ease-in-out ${isScrolled ? 'w-[90px] h-[18px] top-4 left-2' : 'w-[110px] md:w-[135px] lg:w-[156px] h-[20px] md:h-[25px] lg:h-[33px] top-5 md:top-6 lg:top-7 left-2 md:left-2.5 lg:left-[13px]'}`} />
                      <div className={`absolute [font-family:'Golos_Text',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-300 ease-in-out ${isScrolled ? 'w-[90px] top-3 left-2 text-[16px]' : 'w-[110px] md:w-[135px] lg:w-[156px] top-4 md:top-5 lg:top-6 left-2 md:left-2.5 lg:left-3 text-[20px] md:text-[25px] lg:text-[35px]'}`}>
                        <span className="text-[#569b6f]">Temp</span>
                        <span className="text-[#ffc369]">H</span>
                        <span className="text-[#569b6f]">o</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-2xl">
                  <SearchBar isScrolled={isScrolled} />
                </div>
              </div>

              {/* Right Side - Navigation Buttons */}
              <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 flex-shrink-0 ml-6">
                <Button className={`bg-[#ffc369] rounded-[20px] md:rounded-[22px] lg:rounded-[25px] [font-family:'Golos_Text',Helvetica] font-bold text-white hover:bg-[#e6af5e] transition-all duration-300 ease-in-out ${isScrolled ? 'h-[35px] w-[70px] text-[12px]' : 'h-[40px] md:h-[45px] lg:h-[50px] w-[80px] md:w-[100px] lg:w-[120px] text-[14px] md:text-[16px] lg:text-[18px]'}`}>
                  Login
                </Button>
                <Button className={`bg-[#569b6f] rounded-[20px] md:rounded-[22px] lg:rounded-[25px] [font-family:'Golos_Text',Helvetica] font-bold text-white hover:bg-[#4d8a63] transition-all duration-300 ease-in-out ${isScrolled ? 'h-[35px] w-[70px] text-[12px]' : 'h-[40px] md:h-[45px] lg:h-[50px] w-[80px] md:w-[100px] lg:w-[120px] text-[14px] md:text-[16px] lg:text-[18px]'}`}>
                  Menu
                </Button>
              </div>
            </div>

            {/* Mobile Layout - Logo on Top, Search Bar Below */}
            <div className="md:hidden">
              {/* Logo Row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex-shrink-0">
                  {/* Clickable logo that redirects to home page - Mobile version */}
                  <Link to="/" className="block">
                    <div className={`relative transition-all duration-300 ease-in-out ${isScrolled ? 'w-[100px] h-[35px]' : 'w-[120px] h-[45px]'}`}>
                      <img
                        className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${isScrolled ? 'w-8 h-[35px]' : 'w-10 h-[45px]'}`}
                        alt="TempHo Logo - Click to go home"
                        src="https://c.animaapp.com/mdww1mm3xpw4UO/img/polygon-2.svg"
                      />
                      <div className={`absolute bg-[#FFF7EB] transition-all duration-300 ease-in-out ${isScrolled ? 'w-[90px] h-[16px] top-3 left-2' : 'w-[110px] h-[20px] top-4 left-2'}`} />
                      <div className={`absolute [font-family:'Golos_Text',Helvetica] font-bold tracking-[0] leading-[normal] whitespace-nowrap transition-all duration-300 ease-in-out ${isScrolled ? 'w-[90px] top-2.5 left-2 text-[16px]' : 'w-[110px] top-3 left-2 text-[20px]'}`}>
                        <span className="text-[#569b6f]">Temp</span>
                        <span className="text-[#ffc369]">H</span>
                        <span className="text-[#569b6f]">o</span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <Button className={`bg-[#ffc369] rounded-[20px] [font-family:'Golos_Text',Helvetica] font-bold text-white hover:bg-[#e6af5e] transition-all duration-300 ease-in-out ${isScrolled ? 'h-[30px] w-[60px] text-[11px]' : 'h-[35px] w-[70px] text-[12px]'}`}>
                    Login
                  </Button>
                  <Button className={`bg-[#569b6f] rounded-[20px] [font-family:'Golos_Text',Helvetica] font-bold text-white hover:bg-[#4d8a63] transition-all duration-300 ease-in-out ${isScrolled ? 'h-[30px] w-[60px] text-[11px]' : 'h-[35px] w-[70px] text-[12px]'}`}>
                    Menu
                  </Button>
                </div>
              </div>

              {/* Search Bar Row */}
              <div className="w-full">
                <SearchBar isScrolled={isScrolled} isMobile={true} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
