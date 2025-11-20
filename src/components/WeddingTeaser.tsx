import React from "react";
import Header from "../ui/Header";
import Workbg from "../assets/main-bg.webp";
import Video from "../ui/Video";
import poster1 from "../assets/teaser-poster-1.jpg";
import teaser1 from "../assets/teaser-1.mp4";
import poster2 from "../assets/teaser-poster-2.jpg";
import teaser2 from "../assets/teaser-2.mp4";

const WeddingTeaser: React.FC = () => {

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
          <h1 className="text-2xl text-white font-medium">Wedding Teaser</h1>
        </div>
        <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-10">
          <Video poster={poster1} src={teaser1} alt="Wedding Video" />
          <Video poster={poster2} src={teaser2} alt="Wedding Video" />
        </div>
        <div>
          <a href="#" className="text-md text-white">test@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default WeddingTeaser;
