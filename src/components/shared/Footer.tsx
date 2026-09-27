export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1E1E1E] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          {/* <img 
            src="/logo.png" 
            alt="FitLog Logo" 
            className="h-8 w-auto object-contain" 
          /> */}
          <span className="text-sm font-bold tracking-wider uppercase">FITLOG</span>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex items-center gap-6 text-xs text-white/60">
          <a href="#" className="hover:text-[#B6FF00] transition-colors">Workout</a>
          <a href="#" className="hover:text-[#B6FF00] transition-colors">My Plan</a>
          <a href="#" className="hover:text-[#B6FF00] transition-colors">Saved</a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-[10px] text-white/40">
          &copy; {new Date().getFullYear()} FitLog. All rights reserved.
        </div>

      </div>
    </footer>
  );
}