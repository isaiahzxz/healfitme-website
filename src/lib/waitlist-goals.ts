export const GOALS = [
  "Recover faster after workouts",
  "Sleep and energy",
  "Come back from an injury",
  "Train smarter, not harder",
  "Just curious",
] as const;

export type Goal = (typeof GOALS)[number];
