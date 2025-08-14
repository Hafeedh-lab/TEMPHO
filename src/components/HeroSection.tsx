import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const handleExploreClick = () => {
    document
      .getElementById('services')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full min-h-[600px] md:min-h-[800px] lg:min-h-[973px] bg-[#fff7eb]">
      <div className="container h-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start h-full">
          {/* Hero Content */}
          <div className="flex-1 pt-16 md:pt-24 lg:pt-40 text-center lg:text-left">
            <h1 className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-4xl md:text-6xl lg:text-8xl tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5.76px] leading-tight md:leading-[1.1] lg:leading-[84.3px] mb-6 md:mb-8 lg:mb-10">
              Welcome To Your <br />
              Canadian Dream
            </h1>
            <p className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[522px] mx-auto lg:mx-0 [font-family:'Golos_Text',Helvetica] font-medium text-[#6f6f6f] text-lg md:text-2xl lg:text-[32px] tracking-[-1px] md:tracking-[-1.5px] lg:tracking-[-1.92px] leading-relaxed md:leading-[1.2] lg:leading-[28.1px] mb-8 md:mb-10 lg:mb-12">
              At the frontier of the living lavish lifestyle in Canada
            </p>

            <Button
              onClick={handleExploreClick}
              className="hero-btn relative h-[55px] md:h-[65px] lg:h-[72px] w-[280px] md:w-[300px] lg:w-[328px] bg-[#4CAF87] rounded-[30px] md:rounded-[35px] lg:rounded-[43px] [font-family:'Golos_Text',Helvetica] font-medium text-white text-lg md:text-xl lg:text-2xl tracking-[-1px] md:tracking-[-1.2px] lg:tracking-[-1.44px] hover:bg-[#3b9b73] transition-colors overflow-hidden pr-16 md:pr-20 lg:pr-24">
              <span className="relative z-10">Explore Our Listings</span>
              <div className="absolute w-[45px] md:w-[55px] lg:w-[62px] h-[45px] md:h-[55px] lg:h-[62px] top-[5px] right-[5px] bg-white rounded-[25px] md:rounded-[30px] lg:rounded-[40px] flex items-center justify-center">
                <img
                  className="w-[20px] md:w-[25px] lg:w-[30px] h-[20px] md:h-[25px] lg:h-[30px]"
                  alt="Arrow forward"
                  src="https://c.animaapp.com/mdww1mm3xpw4UO/img/arrow-forward-1.svg"
                />
              </div>
            </Button>
          </div>

          {/* Hero Image Section - Hidden on mobile, visible on large screens */}
          <div className="relative w-full max-w-[600px] lg:max-w-[722px] h-[400px] md:h-[600px] lg:h-[864px] mt-8 lg:mt-[109px] hidden md:block">
            <div className="absolute w-[70%] lg:w-[573px] h-full lg:h-[864px] top-0 left-[15%] lg:left-[113px] bg-[#ffc3698c] rounded-[200px_200px_0px_0px] lg:rounded-[300px_300px_0px_0px]" />
            <img
              className="absolute w-[60%] lg:w-[504px] h-[85%] lg:h-[792px] top-4 lg:top-9 left-[20%] lg:left-[146px] object-cover"
              alt="Luxury home"
              src="https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group.png"
            />

            {/* Floating Cards - Only visible on large screens */}
            <Card className="absolute w-60 lg:w-72 h-[200px] lg:h-[257px] top-[100px] lg:top-[135px] right-0 lg:left-[434px] hidden lg:block">
              <CardContent className="p-0">
                <div className="relative w-full h-[60px] lg:h-[75px] bg-white rounded-[20px_20px_0px_0px] border border-solid border-black">
                <div className="absolute top-[20px] lg:top-[25px] left-[25px] lg:left-[35px] [font-family:'Golos_Text',Helvetica] font-medium text-black text-[20px] lg:text-[28px] tracking-[-1px] lg:tracking-[-1.68px] leading-[1.2] lg:leading-[29.5px] whitespace-nowrap">
                    Vast Gallery
                  </div>
                  <div className="w-[45px] lg:w-[58px] h-[45px] lg:h-[58px] top-[7px] lg:top-[9px] right-[7px] lg:left-[215px] bg-black absolute rounded-[30px] lg:rounded-[40px] flex items-center justify-center">
                    <img
                      className="w-8 lg:w-10 h-8 lg:h-10"
                      alt="Arrow forward"
                      src="https://c.animaapp.com/mdww1mm3xpw4UO/img/arrow-forward-2.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-full h-[140px] lg:h-[182px] object-cover"
                  alt="Gallery preview"
                  src="https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-2.png"
                />
              </CardContent>
            </Card>

            <Card className="absolute w-60 lg:w-[292px] h-[110px] lg:h-[139px] top-[350px] lg:top-[523px] left-0 hidden lg:block">
              <CardContent className="p-0">
                <div className="relative w-full h-full bg-white rounded-[20px] border border-solid border-black p-4 lg:p-6">
                  <div className="[font-family:'Golos_Text',Helvetica] font-medium text-black text-[20px] lg:text-[28px] tracking-[-1px] lg:tracking-[-1.68px] leading-[1.2] lg:leading-[29.5px]">
                    Revenue
                  </div>
                  <div className="w-[45px] lg:w-[58px] h-[45px] lg:h-[58px] top-2 lg:top-2.5 right-2 lg:left-[207px] bg-black absolute rounded-[30px] lg:rounded-[40px] flex items-center justify-center">
                    <img
                      className="w-8 lg:w-10 h-8 lg:h-10"
                      alt="Arrow forward"
                      src="https://c.animaapp.com/mdww1mm3xpw4UO/img/arrow-forward.svg"
                    />
                  </div>
                  <div className="mt-2 [font-family:'Golos_Text',Helvetica] font-medium text-black text-3xl lg:text-5xl tracking-[-2px] lg:tracking-[-2.88px] leading-[1.1] lg:leading-[50.6px]">
                    150K+
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

