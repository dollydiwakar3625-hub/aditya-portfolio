import React, { useState } from "react";

const navLinks = [
  { label: "HOME", url: "/" },
  { label: "WORK", url: "/work" },
  { label: "WEDDING HIGHLIGHTS", url: "/wedding-highlights" },
  { label: "REELS", url: "/reels" },
  { label: "WEDDING TEASER", url: "/wedding-teaser" },
  { label: "PRE-WEDDING", url: "/pre-wedding" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-[#ffffff0d] relative z-10">
      <div className=" flex items-center justify-between px-12 py-4 h-[80px]">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((nav, idx) => {
              const smallFont = [2, 3, 4, 5].includes(idx);
              return (
                <a
                  key={nav.label}
                  href={nav.url}
                  className={`font-medium ${idx === 1 ? "text-white font-bold" : "text-white hover:text-white"} 
                    ${smallFont ? "text-xs hover:text-sm" : "text-md hover:text-lg"} 
                    transition-all duration-300 ease-in-out`}
                >
                  {nav.label}
                </a>
              );
            })}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          &#9776;
        </button>
      </div>
      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#000] flex flex-col items-center justify-center z-50 transition-all">
          <button
            className="absolute top-8 right-8 text-4xl text-white focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <nav className="flex flex-col gap-8 text-center">
              {navLinks.map((nav, idx) => {
                const smallFont = [2, 3, 4, 5].includes(idx);
                return (
                  <a
                    key={nav.label}
                    href={nav.url}
                    className={`font-semibold ${idx === 1 ? "text-[#e7d1cb] font-bold" : "text-white hover:text-[#e7d1cb]"} 
                      ${smallFont ? "text-xs hover:text-sm" : "text-2xl hover:text-3xl"} 
                      transition-all duration-300 ease-in-out`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {nav.label}
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
