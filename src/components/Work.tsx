import React from "react";
import Header from "../ui/Header";
import Card from "../ui/Card";
import WedHighlight from "../assets/wedding-highlight-poster.jpg";
import reel from "../assets/reel-poster.jpg"
import PreWdding from "../assets/pre-wedding-poster.jpg";
import Teaser from "../assets/wedding-teaser-poster.jpg";
import Workbg from "../assets/main-bg.jpg";

const workCards = [
  {
    image: WedHighlight,
    url: "/wedding-highlights",
  },
  {
    image: reel,
    url: "/reels",
  },
  {
    image: Teaser,
    url: "/wedding-teaser",
  },
  {
    image: PreWdding,
    url: "/pre-wedding",
  }
];

const Work: React.FC = () => {
  return (
    <div className="relative min-h-screen pb-10"
      style={{
        backgroundImage: `url(${Workbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Header />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
    <div className="min-h-[calc(100vh - 80vh)] mx-auto" style={{
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
        <main className="md:w-[75%] lg:w-[60%] xl:w-[45%] mx-auto w-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {workCards.map((card, idx) => (
            <Card key={idx} url={card.url} image={card.image} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Work;
