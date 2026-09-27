import bannerImg from ' ../../assets/banner.png';
export default function Hero() {
  return (
    <section className="bg-[#1E1E1E] px-5 py-6 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="grid min-h-[330px] grid-cols-1 overflow-hidden rounded-lg bg-[#15161A] md:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col justify-center p-8 md:p-10">

            <p className="mb-3 text-[9px] font-bold uppercase tracking-widest text-[#B6FF00]">
              Workout Library
            </p>

            <h1 className="max-w-md text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
              Train With Intent.
              <br />
              Log Every Set.
            </h1>

            <p className="mt-5 max-w-md text-xs leading-5 text-white/50">
              FitLog is a dark, no-nonsense gym companion.
              Pick a lift, lock it into today's plan, and watch
              the work stack up.
            </p>

            <div className="mt-6">
              <button className="btn btn-sm rounded bg-[#B6FF00] px-5 text-[10px] font-bold uppercase text-black hover:bg-[#c5ff33]">
                Browse Workout
              </button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-end justify-center bg-[#18191D] p-6">

            <div className="flex h-full w-full items-center justify-center">

            {/* hero image area */}
{/* <img src="/bannerImg" alt="Hero banner" className="h-[334px] w-[334px] object-cover rounded-lg" /> */}
<div className="flex h-64 w-64 items-center justify-center rounded-lg bg-[#25272C]">
  <span className="text-xs uppercase tracking-widest text-white/30">
    Workout Image
  </span>
</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
