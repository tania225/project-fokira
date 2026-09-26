"use client";

import { ReactNode } from "react";
import { WorkoutProvider } from "./WorkoutContext";

export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return <WorkoutProvider>{children}</WorkoutProvider>;
}