

import { createContext, useContext, useState } from "react";

export type Workout = {
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
  description: string;
  instructions: string[];
};

type WorkoutContextType = {
  savedWorkouts: Workout[];
  planWorkouts: Workout[];
  addToSaved: (workout: Workout) => void;
  addToPlan: (workout: Workout) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export function WorkoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
  const [planWorkouts, setPlanWorkouts] = useState<Workout[]>([]);

  const addToSaved = (workout: Workout) => {
    setSavedWorkouts((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  };

  const addToPlan = (workout: Workout) => {
    setPlanWorkouts((current) => {
      if (current.some((item) => item.id === workout.id)) {
        return current;
      }

      return [...current, workout];
    });
  };

  return (
    <WorkoutContext.Provider
      value={{
        savedWorkouts,
        planWorkouts,
        addToSaved,
        addToPlan,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("useWorkout must be used inside WorkoutProvider");
  }

  return context;
}