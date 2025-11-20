import React, { useRef, useState } from "react";

interface ReelProps {
  poster: string;
  src: string;
  alt?: string;
}

const Reel: React.FC<ReelProps> = ({ poster, src, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative w-full max-w-[600px] aspect-[9/16] min-h-[600px] mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
      {/* Poster image absolutely positioned and fills container */}
      <img
        src={poster}
        alt={alt || "Reel Poster"}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${playing ? "opacity-0" : "opacity-100"}`}
        style={{ zIndex: 1 }}
      />
      {/* Play button always centered */}
      {!playing && (
        <button
          className="absolute inset-0 flex items-center justify-center text-white text-6xl bg-black bg-opacity-30 hover:bg-opacity-50 transition"
          onClick={handlePlay}
          aria-label="Play reel"
          style={{ zIndex: 2 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.5)" />
            <polygon points="32,25 60,40 32,55" fill="white" />
          </svg>
        </button>
      )}
      {/* Video absolutely positioned and fills container */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        className={`absolute inset-0 w-full h-full object-cover ${playing ? "block" : "hidden"}`}
        onPause={() => setPlaying(false)}
        style={{ zIndex: 3 }}
      />
    </div>
  );
};

export default Reel;
