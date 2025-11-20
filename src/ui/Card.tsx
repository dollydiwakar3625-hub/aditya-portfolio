import React from "react";

interface CardProps {
  image?: string;
  url?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, url, children }) => {
  const cardContent = image ? (
    <img
      src={image}
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      {children}
    </div>
  );

  const cardDiv = (
    <div className="relative w-full h-78 overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer group">
      {cardContent}
      {/* Overlay on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center  duration-300">
      </div>
    </div>
  );

  return url ? (
    <a href={url} className="block w-full h-full" rel="noopener noreferrer">
      {cardDiv}
    </a>
  ) : (
    cardDiv
  );
};

export default Card;
