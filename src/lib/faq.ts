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
  { id: "coaches", label: "Sessions" },
  { id: "launch", label: "Early testing and pricing" },
];

export const FAQS: FaqItem[] = [
  {
    id: "what",
    category: "basics",
    q: "What is HealFitMe?",
    a: "An iPhone app for people who train. Each morning it tells you how recovered you are as a score out of 100, and gives you one workout or recovery task to do that day.",
  },
  {
    id: "wearable",
    category: "basics",
    q: "Do I need a wearable?",
    a: "No. The morning check-in works on its own. If you connect Apple Health, an Apple Watch, WHOOP, Oura or Garmin can share sleep, HRV, resting heart rate and steps, and a few Stats cards, such as sleep quality and training load, appear only with a connected wearable.",
  },
  {
    id: "score",
    category: "basics",
    q: "How is the Recovery score worked out?",
    a: "From a fixed formula, never from AI. Your check-in sets the base, then your training, stretching, rest days and finished sessions add or take away points. The same answers always give the same number from 0 to 100, shown with a word such as Good or Watch.",
  },
  {
    id: "mission",
    category: "basics",
    q: "What is a daily mission?",
    a: "One coach video chosen for your score, your body and the time you have, with a one-line reason. You preview the moves, swipe to start, or tap Not today. You can skip it and try a shorter one.",
  },
  {
    id: "checkin",
    category: "basics",
    q: "How long does the check-in take?",
    a: "It is five quick questions about sleep, soreness, energy, pain and how much time you have for recovery. You tap an answer and move on.",
  },
  {
    id: "medical",
    category: "basics",
    q: "Is HealFitMe medical advice?",
    a: "No. HealFitMe gives recovery guidance, not medical advice. It does not diagnose or treat anything. If you have an injury or a health condition, talk to a clinician.",
  },
  {
    id: "data-used",
    category: "data",
    q: "What data does HealFitMe use?",
    a: "Your first name, your profile answers (birth year, sex, training, recovery preferences, injuries and kit), your check-ins and logs, your sessions, and the health days you choose to connect. Connecting health data is always optional.",
  },
  {
    id: "data-kept",
    category: "data",
    q: "What does the AI see?",
    a: "Only categories and numbers, such as an age band. When it helps pick your mission, it never receives your name, email, user ID or free text. It never sets your score and never makes the videos.",
  },
  {
    id: "data-delete",
    category: "data",
    q: "Can I delete my data?",
    a: "Yes. Disconnecting health data stops new reads, and deleting your account removes all of your data. HealFitMe never writes to Apple Health.",
  },
  {
    id: "data-waitlist",
    category: "data",
    q: "What do you do with my name and email?",
    a: "We use them to tell you when early testing opens and to share HealFitMe updates. We also keep your answer about where you heard of us, so we know what is working. Nothing else.",
  },
  {
    id: "coach-who",
    category: "coaches",
    q: "Who are the coaches?",
    a: "Each mission is a coach video from a library tagged by body area, minutes, intensity and audience. We will introduce the coaches as we get closer to launch. The early build uses placeholder videos.",
  },
  {
    id: "coach-session",
    category: "coaches",
    q: "What is a guided session?",
    a: "A short guided workout that fills your screen. Each move has a timer, you can pause or skip a move, and a finish screen asks how it felt. If you leave halfway, the app asks if you want to stop.",
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
    a: "Not at the moment. Guided sessions and clubs are where it starts, and early testers will hear first about anything more.",
  },
  {
    id: "launch-when",
    category: "launch",
    q: "When does early testing start?",
    a: "Soon. HealFitMe is coming to iOS, and the current build runs on demo data. Sign up and we will email you when early testing opens.",
  },
  {
    id: "launch-price",
    category: "launch",
    q: "How much will it cost?",
    a: "We have not announced pricing. Early testers will hear first, well before anything is charged.",
  },
  {
    id: "launch-device",
    category: "launch",
    q: "Which phones will it work on?",
    a: "iPhone. HealFitMe is coming to iOS first. We have not announced anything for other phones.",
  },
  {
    id: "launch-list",
    category: "launch",
    q: "How does signing up work?",
    a: "Add your name, your email and where you heard about us. We will write to you when your spot opens. You will only hear from us about HealFitMe, and you can leave whenever you like.",
  },
];

/** Questions shown on the home page and on other pages as a teaser. */
export const FEATURED_FAQ_IDS = ["what", "wearable", "launch-when", "data-kept"];
