import React, { useState } from "react";

const navLinks = [
  "HOME",
  "WORK",
  "WEDDING HIGHLIGHTS",
  "REELS",
  "WEDDING TEASER",
  "PRE-WEDDING"
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-md relative z-10">
      <div className=" flex items-center justify-between px-12 py-4 h-[80px]">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const smallFont = [2, 3, 4, 5].includes(idx);
              return (
                <a
                  key={link}
                  href="#"
                  className={`font-medium ${idx === 1 ? "text-white font-bold" : "text-white hover:text-white"} 
                    ${smallFont ? "text-xs hover:text-sm" : "text-md hover:text-lg"} 
                    transition-all duration-300 ease-in-out`}
                >
                  {link}
                </a>
              );
            })}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          &#9776;
        </button>
      </div>
      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-opacity-95 flex flex-col items-center justify-center z-50 transition-all">
          <button
            className="absolute top-8 right-8 text-4xl text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => {
                const smallFont = [2, 3, 4, 5].includes(idx);
                return (
                  <a
                    key={link}
                    href="#"
                    className={`font-semibold ${idx === 1 ? "text-[#e7d1cb] font-bold" : "text-white hover:text-[#e7d1cb]"} 
                      ${smallFont ? "text-xs hover:text-sm" : "text-2xl hover:text-3xl"} 
                      transition-all duration-300 ease-in-out`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                );
              })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
