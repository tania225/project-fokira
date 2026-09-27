import logoImg from '../../assets/logo.png';
export default function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b border-white/10 bg-[#1E1E1E] px-6 text-white">

      {/* LEFT - LOGO */}
      <div className="flex items-center gap-2">
        {/* <img 
    src="/logo.png" 
    alt="FitLog Logo" 
    className="h-8 w-auto object-contain" 
  /> */}
        {/* <div className="flex h-6 w-6 items-center justify-center rounded bg-[#B6FF00] text-[9px] font-black text-black">
          F
        </div> */}

        <span className="text-xs font-bold tracking-wide">
          FITLOG
        </span>
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-6 text-[10px]">
        <a
          href="#"
          className="rounded-full bg-[#B6FF00] px-4 py-1.5 font-semibold text-black"
        >
          Workout
        </a>

        <a
          href="#"
          className="text-white/60 hover:text-white"
        >
          My Plan
        </a>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 text-[10px]">

        <button className="text-white/70 hover:text-white">
          Plan
        </button>

        <button className="flex items-center gap-1.5 text-white/70 hover:text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B6FF00]"></span>
          Saved
        </button>

      </div>

    </nav>
  );
}