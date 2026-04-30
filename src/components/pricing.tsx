import React from "react";
import Header from "../ui/Header";
import Workbg from "../assets/main-bg.webp";

const pricingData = [
  {
    category: "Wedding Video",
    items: [
      { name: "Highlight with Teaser", price: "4500/-" },
      { name: "Only Wedding Highlights", price: "3500/-" },
      { name: "Only Teaser (40-50 Sec)", price: "1500/-" },
    ],
  },
  {
    category: "Pre-Wedding Video",
    items: [
      { name: "Pre-wedding With Teaser", price: "5500/-" },
      { name: "Only Teaser", price: "2000/-" },
      { name: "Only Pre-wedding", price: "3000/-" },
    ],
  },
  {
    category: "Add-ons",
    items: [
      { name: "Reel (30sec with limited clips)", price: "500/-" },
      { name: "Wedding Documentary", price: "15000/-" },
      { name: "Traditional Data (per hr)", price: "800/-" },
    ],
  },
  {
    category: "Design & Editing",
    items: [
        { name: "Wedding Album (12x36 per sheet)", price: "50/-" },
        { name: "Pre-wedding Design (per sheet)", price: "80/-" },
        { name: "Instagram Edit + Color Grade (per photo)", price: "60/-" },
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="relative min-h-screen pb-10"
      style={{
        backgroundImage: `url(${Workbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}>
      <Header />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 container mx-auto px-4 pt-24 sm:pt-32">
        <h1 className="text-4xl sm:text-5xl font-semibold text-white text-center mb-12">Our Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {pricingData.map((category, index) => (
            <div 
              key={index} 
              className="cursor-pointer group relative flex flex-col justify-center bg-[#1a1a1a] bg-opacity-50 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-700/50 overflow-hidden transition-all duration-500 ease-in-out hover:border-gray-500 hover:shadow-2xl h-32 hover:h-64"
            >
              <div className="text-center transition-transform duration-500 ease-in-out group-hover:-translate-y-8">
                <h2 className="text-2xl font-semibold text-white">{category.category}</h2>
              </div>
              <div className="absolute bottom-6 left-0 right-0 px-6 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <ul className="text-center space-y-2">
                  {category.items.map((item, itemIndex) => (
                     <li key={itemIndex} className="text-gray-300 text-sm">
                       <span className="font-semibold text-white">{item.name}</span> - {item.price}
                     </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;