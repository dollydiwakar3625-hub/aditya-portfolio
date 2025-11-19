import React from "react";

interface CardProps {
  title: string;
  date: string;
  image?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, date, image, children }) => {
  return (
    <div className="relative w-full h-78 overflow-hidden transition-transform duration-300 hover:scale-95 cursor-pointer group">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          {children}
        </div>
      )}
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-2xl mb-2 uppercase">{title}</h2>
        <p className="text-white text-xl">{date}</p>
      </div>
    </div>
  );
};

export default Card;
