import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const scrollStep = 40;
    const interval = setInterval(() => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0) {
        window.scrollTo(0, Math.max(currentScroll - scrollStep, 0));
      } else {
        clearInterval(interval);
      }
    }, 8); // Lower value = slower scroll
  };

  return visible ? (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-600 transition"
      aria-label="Scroll to top"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 24V8M16 8L8 16M16 8L24 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  ) : null;
};

export default ScrollToTopButton;
