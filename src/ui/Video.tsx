import React, { useRef, useState } from "react";

interface VideoProps {
  poster: string;
  src: string;
  alt?: string;
}

const Video: React.FC<VideoProps> = ({ poster, src, alt }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative w-full  aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
      {!playing && (
        <>
          <img
            src={poster}
            alt={alt || "Video Poster"}
            className="w-full h-full object-cover"
          />
          <button
            className="absolute inset-0 flex items-center justify-center text-white text-6xl bg-black bg-opacity-30 hover:bg-opacity-50 transition"
            onClick={handlePlay}
            aria-label="Play video"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.5)" />
              <polygon points="32,25 60,40 32,55" fill="white" />
            </svg>
          </button>
        </>
      )}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls
        className={`w-full h-full object-cover ${playing ? "block" : "hidden"}`}
        onPause={() => setPlaying(false)}
      />
    </div>
  );
};

export default Video;
