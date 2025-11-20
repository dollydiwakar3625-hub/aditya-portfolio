import mainBg from '../assets/main-bg.jpg';
import { FaWhatsapp, FaInstagram, FaEnvelope} from "react-icons/fa";

function App() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col px-4 xl:w-1/3">
        <h2 className="text-white mb-2 font-medium tracking-wide">
          I'M <span className="text-cyan-400 font-bold text-3xl sm:text3xl">ADITYA</span>
        </h2>
        <p className="text-white text-base max-w-xl mb-2">
          
          A passionate Freelance Video Editor &amp; Photographer with <span className="font-semibold">5+ years</span> of experience,<br />
          Specializing in top-tier software to craft compelling Visual Stories.
        </p>
        <button onClick={() => window.location.href = '/work'}
          className="group mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-semibold shadow-lg w-[180px]
            transition-all duration-700 ease-in-out focus:outline-none relative overflow-hidden
            hover:bg-gradient-to-r hover:from-purple-600 hover:via-blue-500 hover:to-blue-500 hover:shadow-2xl hover:scale-105"
        >
          <span className="relative z-10">View Work</span>
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition duration-700 bg-white"></span>
        </button>
        {/* Social Icons */}
        <div className="flex space-x-6 mt-8 text-white text-2xl">
          <a href="https://w.app/3thw8q" target='_blank' aria-label="Behance" className="hover:text-cyan-400">
            <FaWhatsapp size={28} />
          </a>
          <a href="https://www.instagram.com/story_by_aditya?igsh=MXVoNXhwc2NuMDJ1dw==" target='_blank' aria-label="Email" className="hover:text-cyan-400">
            <FaInstagram size={28} />
          </a>
          <a href="mailto:aditya.mehra.71619@gmail.com" aria-label="Instagram" className="hover:text-cyan-400">
          <FaEnvelope size={28} />  
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
