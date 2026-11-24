export type FaqCategory = "basics" | "data" | "coaches" | "launch";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  q: string;
  a: string;
}

export const FAQ_CATEGORIES: { id: FaqCategory; label: string }[] = [
  { id: "basics", label: "The basics" },
  { id: "data", label: "Your data" },
  { id: "coaches", label: "Coaches" },
  { id: "launch", label: "Launch and pricing" },
];

export const FAQS: FaqItem[] = [
  {
    id: "what",
    category: "basics",
    q: "What is HealFitMe?",
    a: "An app that turns your health and activity data into a clearer picture of recovery, then gives you one useful next step each day. It is built to tell you what your body needs today, in plain words.",
  },
  {
    id: "wearable",
    category: "basics",
    q: "Do I need a wearable?",
    a: "No. You can check in with how you feel, or optionally connect your wearable and activity data. Both paths lead to the same recovery picture.",
  },
  {
    id: "score",
    category: "basics",
    q: "What does the recovery score mean?",
    a: "It is a number out of 100 with a simple label: Rest, Watch or Good. Good means you are fresh for the sessions that matter, Watch means pay attention to how you respond, and Rest means today is for recovery.",
  },
  {
    id: "mission",
    category: "basics",
    q: "What is a daily mission?",
    a: "One practical thing to do today, chosen for how you are doing, with the reason it was chosen. It might be a gentle mobility session or a moment to breathe. You reveal it when you are ready, and you can skip it.",
  },
  {
    id: "medical",
    category: "basics",
    q: "Is HealFitMe medical advice?",
    a: "No. HealFitMe is a wellness tool, not a medical service. It does not diagnose or treat anything. If you have an injury or a health condition, talk to a clinician.",
  },
  {
    id: "data-used",
    category: "data",
    q: "What data does HealFitMe use?",
    a: "Your answers to the morning check-in, and, if you choose to connect them, your wearable and activity data. Connecting a wearable is always optional.",
  },
  {
    id: "data-kept",
    category: "data",
    q: "What happens to my data?",
    a: "It is yours. We use it to power your recovery picture and nothing else. Our full privacy policy will spell out exactly how data is handled before launch.",
  },
  {
    id: "data-waitlist",
    category: "data",
    q: "What do you do with my email?",
    a: "We use it to tell you when early access opens and to share HealFitMe updates. Nothing else.",
  },
  {
    id: "coach-who",
    category: "coaches",
    q: "Who are the coaches?",
    a: "Real people who lead guided recovery sessions in the app. We will introduce them as we get closer to launch.",
  },
  {
    id: "coach-session",
    category: "coaches",
    q: "What is a guided session?",
    a: "A short, coach-led session made for how your body is today, such as a gentle mobility flow, a breathing reset or a 12-minute guided reset. Short enough to fit into a real day.",
  },
  {
    id: "coach-medical",
    category: "coaches",
    q: "Can coaches give medical advice?",
    a: "No. Coaches guide recovery sessions. They do not diagnose, treat or replace your doctor or physical therapist.",
  },
  {
    id: "coach-one",
    category: "coaches",
    q: "Can I message a coach directly?",
    a: "We have not announced that yet. Guided sessions are the starting point, and waitlist members will hear first about anything more.",
  },
  {
    id: "launch-when",
    category: "launch",
    q: "When does it launch?",
    a: "HealFitMe is in development and coming soon. Join the waitlist and we will email you when early access opens.",
  },
  {
    id: "launch-price",
    category: "launch",
    q: "How much will it cost?",
    a: "We have not announced pricing. Waitlist members will hear first, well before anything is charged.",
  },
  {
    id: "launch-device",
    category: "launch",
    q: "Which phones will it work on?",
    a: "HealFitMe is a mobile app. We will announce supported devices and how to get access before early access opens.",
  },
  {
    id: "launch-list",
    category: "launch",
    q: "How does the waitlist work?",
    a: "Add your email and we will let you know when your spot opens. You will only hear from us about HealFitMe, and you can leave the list whenever you like.",
  },
];

/** Questions shown on the home page and on other pages as a teaser. */
export const FEATURED_FAQ_IDS = ["what", "wearable", "launch-when", "data-kept"];
