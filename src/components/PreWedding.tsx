import React from "react";
import Header from "../ui/Header";
import Workbg from "../assets/main-bg.webp";
import Video from "../ui/Video";
import poster1 from "../assets/pre-poster-1.jpg";
import preVideo1 from "../assets/pre-video-1.mp4";
import poster2 from "../assets/pre-poster-2.jpg";
import preVideo2 from "../assets/pre-video-2.mp4";
import poster3 from "../assets/pre-poster-3.jpg";
import preVideo3 from "../assets/pre-video-3.mp4";
import poster4 from "../assets/pre-poster-4.jpg";
import preVideo4 from "../assets/pre-video-4.mp4";
import { parseDate } from "../utils/dateUtils";

const videos = [
  { poster: poster1, src: preVideo1, alt: "PreWedding Video", date: "08-Dec-2025T7:18pm" },
  { poster: poster2, src: preVideo2, alt: "PreWedding Video", date: "07-Dec-2025T6:00pm" },
  { poster: poster3, src: preVideo3, alt: "PreWedding Video", date: "06-Dec-2025T5:00pm" },
  { poster: poster4, src: preVideo4, alt: "PreWedding Video", date: "05-Dec-2025T4:00pm" },
];

videos.sort((a, b) => {
  return parseDate(b.date).getTime() - parseDate(a.date).getTime();
});

const PreWedding: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const reelsPerPage = 4;
  const totalPages = Math.ceil(videos.length / reelsPerPage);
  const startIdx = (page - 1) * reelsPerPage;
  const paginatedVideos = videos.slice(startIdx, startIdx + reelsPerPage);

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
          {paginatedVideos.map((video, idx) => (
            <div key={startIdx + idx} className="flex flex-col items-center">
              <Video poster={video.poster} src={video.src} alt={video.alt} />
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex gap-4 mt-6 items-center justify-center">
            <button
              className={`px-3 py-1 bg-black text-white rounded ${page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-black"}`}
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              style={page === 1 ? { cursor: 'not-allowed' } : {}}
            >
              Prev
            </button>
            <span className="text-white text-md font-medium">{page}</span>
            <button
              className={`px-3 py-1 bg-black text-white rounded ${page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-black"}`}
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              style={page === totalPages ? { cursor: 'not-allowed' } : {}}
            >
              Next
            </button>
          </div>
        )}
        <div>
          <a href="mailto:aditya.mehra.71619@gmail.com" className="text-md text-white">aditya.mehra.71619@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default PreWedding;
