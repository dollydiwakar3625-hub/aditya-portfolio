import React from "react";
import Header from "../ui/Header";
import Workbg from "../assets/main-bg.webp";
import ReelComponent from "../ui/Reel";
import poster1 from "../assets/reel-poster-1.jpg";
import reel1 from "../assets/reel-1.mp4";
import poster2 from "../assets/reel-poster-2.jpg";
import reel2 from "../assets/reel-2.mp4";
import poster3 from "../assets/reel-poster-3.jpg";
import reel3 from "../assets/reel-3.mp4";
import poster4 from "../assets/reel-poster-4.jpg"; 
import reel4 from "../assets/reel-4.mp4";
const Reel: React.FC = () => {

  return (
    <div className="relative min-h-screen pb-10 z-2"
    style={{
      backgroundImage: `url(${Workbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}>
      <div className="absolute inset-0 bg-black bg-opacity-30 z-1" />
      <Header />
      <div className="mx-auto relative z-2 flex flex-col items-center justify-center gap-[40px] sm:p-6 py-6">
        <div>
          <h1 className="text-2xl text-white font-medium">Reels</h1>
        </div>
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-10">
          <ReelComponent poster={poster1} src={reel1} alt="Wedding Video" />
          <ReelComponent poster={poster2} src={reel2} alt="Wedding Video" />
          <ReelComponent poster={poster3} src={reel3} alt="Wedding Video" />
          <ReelComponent poster={poster4} src={reel4} alt="Wedding Video" />
        </div>
        <div>
          <a href="#" className="text-md text-white">test@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Reel;
