import React from 'react';

const NewPage: React.FC = () => {
  const images = [
    '../assets/pre-poster-5.jpeg',
    '../assets/pre-poster-6.jpeg',
    '../assets/pre-poster-7.jpeg',
    '../assets/pre-poster-8.jpeg',
    '../assets/pre-poster-9.jpeg',
    '../assets/pre-poster-10.jpeg',
    '../assets/pre-poster-11.jpeg',
  ];

  return (
    <div className="text-center p-5">
      <div className="my-5 max-w-4xl mx-auto">
        <video controls autoPlay loop className="w-full h-auto rounded-lg shadow-lg">
          <source src="../assets/teaser-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="text-xl italic my-5 text-white">
        "Photography is the story I fail to put into words."
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-1/3 mb-4">
            <img src={image} alt={`Collage item ${index + 5}`} className="w-full h-auto rounded-md shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPage;