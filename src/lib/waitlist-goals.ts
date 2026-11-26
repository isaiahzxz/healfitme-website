/** Where people say they heard about HealFitMe. "Other" lets them type their own answer. */
export const HEARD_FROM = [
  "Instagram",
  "TikTok",
  "YouTube",
  "X (Twitter)",
  "Reddit",
  "Friend or family",
  "Coach or gym",
  "Google search",
  "Other",
] as const;

export type HeardFrom = (typeof HEARD_FROM)[number];
