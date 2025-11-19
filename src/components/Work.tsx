import React from "react";
import Header from "../ui/Header";
import Card from "../ui/Card";
import WedHighlight from "../assets/wedding-highlight-poster.png";
import reel from "../assets/reel-poster.png"
import PreWdding from "../assets/pre-wedding-poster.png";
import Teaser from "../assets/wedding-teaser-poster.png";
import Workbg from "../assets/main-bg.jpg";

const workCards = [
  {
    title: "Wedding Highlights",
    date: "2024",
    image: WedHighlight,
  },
  {
    title: "Reels",
    date: "2024",
    image: reel,
  },
  {
    title: "Wedding Teaser",
    date: "2024",
    image: Teaser,
  },
  {
    title: "Pre-Wedding",
    date: "2024",
    image: PreWdding,
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
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <main className="md:w-2/3 mx-auto w-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {workCards.map((card, idx) => (
          <Card key={idx} title={card.title} date={card.date} image={card.image} />
        ))}
      </main>
    </div>
  );
};

export default Work;
