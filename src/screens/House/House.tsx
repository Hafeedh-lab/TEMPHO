import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

// Property listing data
const propertyListings = [
  {
    id: 1,
    image: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-3.png",
    price: "CA$ 1500/month",
    type: "Condominium",
    address: "500 Halderfair Tower",
    details: "2 Beds | 2 Bath | 1-Car Garage",
  },
  {
    id: 2,
    image: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-4.png",
    price: "CA$ 1500/month",
    type: "Apartment",
    address: "54 Ferrinhill Street",
    details: "2 Beds | 2 Bath | 1-Car Garage",
  },
  {
    id: 3,
    image: "https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-5.png",
    price: "CA$ 1500/month",
    type: "House",
    address: "23 Siennalane Hill",
    details: "3 Beds | 2 Bath | 1-Car Garage",
  },
];

export const House = (): JSX.Element => {
  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="2060:120"
    >
      <div className="bg-white w-[1728px] relative">
        {/* Header */}
        <header className="flex items-center justify-between px-36 py-9 bg-transparent">
          <div className="relative h-[65px]">
            <div className="relative w-[169px] h-[76px] -top-1.5 -left-1.5">
              <img
                className="absolute w-16 h-[76px] top-0 left-0"
                alt="Polygon"
                src="https://c.animaapp.com/mdww1mm3xpw4UO/img/polygon-2.svg"
              />
              <div className="absolute w-[156px] h-[33px] top-9 left-[13px] bg-white" />
              <div className="absolute w-[156px] top-[29px] left-3 [font-family:'Golos_Text',Helvetica] font-bold text-[35px] tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="text-[#569b6f]">Temp</span>
                <span className="text-[#ffc369]">H</span>
                <span className="text-[#569b6f]">o</span>
              </div>
            </div>
          </div>

          <div className="relative w-[612px] h-[73px] bg-[#ffc3690d] rounded-[35px] border-2 border-solid border-[#ffc369]">
            <img
              className="absolute w-[34px] h-[34px] top-5 left-[34px]"
              alt="Search magnifying glass"
              src="https://c.animaapp.com/mdww1mm3xpw4UO/img/search-magnifiying-glass.svg"
            />
            <Input
              className="absolute top-[25px] left-[78px] border-none bg-transparent [font-family:'Golos_Text',Helvetica] font-normal text-[#9f9f9f] text-xl tracking-[0] leading-[normal] focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Where in Canada?"
            />
            <img
              className="absolute w-[52px] h-[50px] top-2.5 left-[542px]"
              alt="Canadian flag"
              src="https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-1.png"
            />
          </div>

          <div className="flex gap-4">
            <Button className="h-[58px] w-36 bg-[#ffc369] rounded-[27px] [font-family:'Golos_Text',Helvetica] font-bold text-white text-[22px] hover:bg-[#e6af5e]">
              Login
            </Button>
            <Button className="h-[58px] w-36 bg-[#569b6f] rounded-[27px] [font-family:'Golos_Text',Helvetica] font-bold text-white text-[22px] hover:bg-[#4d8a63]">
              Menu
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="w-full h-[973px] bg-[#fff7eb] border-t border-[#b4b4b4] flex">
          <div className="flex-1 pl-36 pt-56">
            <h1 className="[font-family:'Golos_Text',Helvetica] font-semibold text-black text-8xl tracking-[-5.76px] leading-[84.3px]">
              Welcome To Your <br />
              Canadian Dream
            </h1>
            <p className="mt-10 w-[522px] [font-family:'Golos_Text',Helvetica] font-medium text-[#6f6f6f] text-[32px] tracking-[-1.92px] leading-[28.1px]">
              At the frontier of the living lavish lifestyle in Canada
            </p>
            <Button className="mt-12 h-[72px] w-[328px] bg-[#569b6f] rounded-[43px] [font-family:'Golos_Text',Helvetica] font-medium text-white text-2xl tracking-[-1.44px] hover:bg-[#4d8a63] relative">
              Explore Our Service
              <div className="absolute w-[62px] h-[62px] top-[5px] right-[5px] bg-white rounded-[40px] flex items-center justify-center">
                <img
                  className="w-[30px] h-[30px]"
                  alt="Arrow forward"
                  src="https://c.animaapp.com/mdww1mm3xpw4UO/img/arrow-forward-1.svg"
                />
              </div>
            </Button>
          </div>

          <div className="relative w-[722px] h-[864px] mt-[109px]">
            <div className="absolute w-[573px] h-[864px] top-0 left-[113px] bg-[#ffc3698c] rounded-[300px_300px_0px_0px]" />
            <img
              className="absolute w-[504px] h-[792px] top-9 left-[146px]"
              alt="Luxury home"
              src="https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group.png"
            />

            <Card className="absolute w-72 h-[257px] top-[135px] left-[434px]">
              <CardContent className="p-0">
                <div className="relative w-72 h-[75px] bg-white rounded-[20px_20px_0px_0px] border border-solid border-black">
                  <div className="absolute top-[25px] left-[35px] [font-family:'Golos_Text',Helvetica] font-medium text-black text-[28px] tracking-[-1.68px] leading-[29.5px] whitespace-nowrap">
                    Vast Gallery
                  </div>
                  <div className="w-[58px] h-[58px] top-[9px] left-[215px] bg-black absolute rounded-[40px] flex items-center justify-center">
                    <img
                      className="w-10 h-10"
                      alt="Arrow forward"
                      src="https://c.animaapp.com/mdww1mm3xpw4UO/img/arrow-forward-2.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-72 h-[182px]"
                  alt="Gallery preview"
                  src="https://c.animaapp.com/mdww1mm3xpw4UO/img/mask-group-2.png"
                />
              </CardContent>
            </Card>

            <Card className="absolute w-[292px] h-[139px] top-[523px] left-0">
              <CardContent className="p-0">
                <div className="relative w-72 h-[139px] bg-white rounded-[20px] border border-solid border-black p-6">
                  <div className="[font-family:'Golos_Text',Helvetica] font-medium text-black text-[28px] tracking-[-1.68px] leading-[29.5px]">
                    Revenue
                  </div>
                  <div className="w-[58px] h-[58px] top-2.5 left-[207px] bg-black absolute rounded-[40px] flex items-center justify-center">
                    <img
                      className="w-10 h-10"
                      alt="Arrow forward"
                      src="https://c.animaapp.com/mdww1mm3xpw4UO/img/arrow-forward.svg"
                    />
                  </div>
                  <div className="mt-2 [font-family:'Golos_Text',Helvetica] font-medium text-black text-5xl tracking-[-2.88px] leading-[50.6px]">
                    150K+
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* About Us Section */}
        <div className="px-36 py-24">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-[#569b6f] rounded-md mr-[22px]" />
            <Badge className="bg-transparent [font-family:'Golos_Text',Helvetica] font-semibold text-[#569b6f] text-xl tracking-[2.60px] leading-[21.1px] p-0">
              ABOUT US
            </Badge>
          </div>

          <p className="w-[1043px] [font-family:'Golos_Text',Helvetica] font-medium text-black text-[40px] leading-10 tracking-[0]">
            Prevail in the subahs Turbo Pack is a new, high-performance bundler
            designed to speed up development in Next.js. It's built by Vercel,
            the creators of Next.js, and is intended to replace{" "}
            <a
              href="https://www.google.com/search?sca_esv=12c7b01f52a29939&amp;rlz=1C1NDCM_enNG1030NG1030&amp;sxsrf=AE3TifNnBaIZBTcdMSmJJm3hmPwAzHy5qA%3A1753015930808&amp;q=Webpack&amp;sa=X&amp;ved=2ahUKEwi5sN2evcuOAxWSE1kFHbkcB-oQxccNegQIIxAB&amp;mstk=AUtExfBF0Z33ag7MkcoefjUTjtrCF9fF3FR54q6yJjlostu22nzvpJXZVV0LLqow4xrpnTvD_ung6IJfcq5f0THVaULczWVGKkNzYSin0Smr9nHwegWMhTR1O8XeetOqOGjAlrVyjMA86WiD8Lu_bxY5VfuyBdDV_tkHNPPR3vD8WCUn2VI&amp;csui=3"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium tracking-[1.12px] leading-[50.8px] underline"
            >
              Webpack
            </a>{" "}
            as the default bundler for Next.js applications.{" "}
          </p>

          <p className="mt-8 ml-auto w-[573px] [font-family:'Golos_Text',Helvetica] font-medium text-[#6b6b6b] text-[25px] tracking-[0.44px] leading-[31.8px]">
            in{" "}
            <a
              href="https://www.google.com/search?sca_esv=12c7b01f52a29939&amp;rlz=1C1NDCM_enNG1030NG1030&amp;sxsrf=AE3TifNnBaIZBTcdMSmJJm3hmPwAzHy5qA%3A1753015930808&amp;q=Rust&amp;sa=X&amp;ved=2ahUKEwi5sN2evcuOAxWSE1kFHbkcB-oQxccNegQINxAB&amp;mstk=AUtExfBF0Z33ag7MkcoefjUTjtrCF9fF3FR54q6yJjlostu22nzvpJXZVV0LLqow4xrpnTvD_ung6IJfcq5f0THVaULczWVGKkNzYSin0Smr9nHwegWMhTR1O8XeetOqOGjAlrVyjMA86WiD8Lu_bxY5VfuyBdDV_tkHNPPR3vD8WCUn2VI&amp;csui=3"
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Rust
            </a>
            , which allows it to leverage the language's speed and efficiency
            for faster builds and more responsive development experiences
          </p>
        </div>

        {/* Services Section */}
        <div className="w-full h-[973px] bg-[url(https://c.animaapp.com/mdww1mm3xpw4UO/img/rectangle-56.svg)] bg-[100%_100%] px-36 py-12">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-[#569b6f] rounded-md mr-[22px]" />
            <Badge className="bg-transparent [font-family:'Golos_Text',Helvetica] font-semibold text-[#569b6f] text-xl tracking-[2.60px] leading-[21.1px] p-0">
              OUR SERVICES
            </Badge>
          </div>

          <div className="flex justify-between items-center mb-12">
            <div className="[font-family:'Golos_Text',Helvetica]">
              <span className="font-medium text-black text-[40px] leading-[42.2px] tracking-[0]">
                Explore Our
                <br />
              </span>
              <span className="font-medium text-[#787878] text-[40px] leading-[42.2px] tracking-[0.80px]">
                Services
              </span>
            </div>

            <Button className="h-[72px] w-[225px] bg-transparent rounded-[43px] border-2 border-solid border-[#569b6f] [font-family:'Golos_Text',Helvetica] font-medium text-black text-2xl tracking-[-1.44px] hover:bg-[#569b6f10] relative">
              See More
              <div className="absolute w-[62px] h-[62px] top-[3px] right-[3px] bg-white rounded-[40px] flex items-center justify-center">
                <img
                  className="w-[30px] h-[30px]"
                  alt="Arrow forward"
                  src="https://c.animaapp.com/mdww1mm3xpw4UO/img/arrow-forward-1.svg"
                />
              </div>
            </Button>
          </div>

          <div className="flex gap-8 mt-8">
            {propertyListings.map((property) => (
              <Card
                key={property.id}
                className="w-[440px] h-[662px] bg-transparent border-none shadow-none"
              >
                <CardContent className="p-0">
                  <img
                    className="w-[432px] h-[504px]"
                    alt={`${property.type} property`}
                    src={property.image}
                  />
                  <div className="mt-5 [font-family:'Golos_Text',Helvetica] font-semibold text-black text-2xl tracking-[1.20px] leading-[25.3px]">
                    {property.price}
                  </div>
                  <div className="mt-2 [font-family:'Golos_Text',Helvetica] font-medium text-black text-2xl tracking-[1.20px] leading-[25.3px]">
                    {property.type}
                  </div>
                  <div className="mt-2 [font-family:'Golos_Text',Helvetica] font-semibold text-[#ffc369] text-[32px] leading-[33.7px] tracking-[0]">
                    {property.address}
                  </div>
                  <div className="mt-4 [font-family:'Golos_Text',Helvetica] font-normal text-black text-base leading-[16.9px] tracking-[0]">
                    {property.details}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
