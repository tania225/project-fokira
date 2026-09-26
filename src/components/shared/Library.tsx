import Link from "next/link";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
};

async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export default async function Library() {
  const workouts = await getWorkouts();

  return (
    <section className="bg-[#1E1E1E] px-5 py-12 text-white">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B6FF00]">
            The Library
          </p>

          <p className="mt-2 text-sm text-white/50">
            Twelve lifts covering every muscle group.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <article
              key={workout.id}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#15161A]"
            >
              <img
                src={workout.image}
                alt={workout.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">

                <div className="mb-3 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded bg-[#B6FF00] px-2 py-1 text-[9px] font-bold uppercase text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                <h2 className="text-lg font-bold">
                  {workout.name}
                </h2>

                <div className="mt-3 flex gap-4 text-xs text-white/50">
                  <span>{workout.duration} min</span>
                  <span>{workout.caloriesBurned} kcal</span>
                  <span>★ {workout.rating}</span>
                </div>

                <Link
                  href={`/workout/${workout.id}`}
                  className="mt-5 block w-full rounded bg-[#B6FF00] py-2 text-center text-xs font-bold uppercase text-black"
                >
                  View Details
                </Link>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}