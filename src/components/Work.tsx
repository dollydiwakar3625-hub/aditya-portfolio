import React from "react";
import Header from "../ui/Header";
import Workbg from "../assets/main-bg.webp";

const btn = [
  { label: "WEDDING HIGHLIGHTS", url: "/wedding-highlights" },
  { label: "REELS", url: "/reels" },
  { label: "WEDDING TEASER", url: "/wedding-teaser" },
  { label: "PRE-WEDDING", url: "/pre-wedding" },
]

const Work: React.FC = () => {
  return (
    <div className="relative min-h-screen pb-10"
      style={{
        backgroundImage: `url(${Workbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}>
      <Header />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="mx-auto flex flex-col justify-center sm:items-end pr-4 pl-4 sm:pl-0 sm:pr-[40px] z-5 relative" style={{
        minHeight: 'calc(100vh - 120px)'
      }}>
        <div className="xl:w-1/5 2xl:w-1/6 flex flex-col gap-6">
          {btn.map((button) => (
            <a
              key={button.label}
              href={button.url}
              className="text-white text-md font-bold hover:text-[#e7d1cb] transition-colors duration-300 bg-[#ffffff0d] w-full px-6 py-4 rounded-md shadow-md text-center"
            >
              {button.label}
            </a>
          ))}
        </div>
        <div className="fixed left-0 bottom-0 sm:left-8 sm:bottom-8 p-4 sm:p-0">
          <span className="text-lg font-bold text-white"><i>“Emotion is the true substance of wedding photography”</i></span>
        </div>
      </div>
    </div>
  );
};

export default Work;
