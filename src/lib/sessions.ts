/** Guided session categories shown on /sessions. Durations and kit are what each session is planned to use. */

export interface Session {
  title: string;
  minutes: number;
  kit: string;
  img: string;
}

export interface SessionCategory {
  slug: string;
  name: string;
  /** Short label shown on session cards, e.g. "Mobility". */
  label: string;
  /** Category page title, e.g. "Mobility & Stretching Sessions". */
  title: string;
  /** One line for the card on /sessions. */
  short: string;
  /** Intro on the category page. */
  description: string;
  types: string[];
  sessions: Session[];
  faqs: { q: string; a: string }[];
}

export const CATEGORIES: SessionCategory[] = [
  {
    slug: "mobility-stretching",
    label: "Mobility",
    name: "Mobility & Stretching",
    title: "Mobility & Stretching Sessions",
    short:
      "Full-body, lower-body and upper-body mobility, plus targeted work for hips, ankles, shoulders, back and neck, and stretches for hamstrings, quads and calves.",
    description:
      "Guided mobility and stretching sessions for the whole body or one area at a time, built to help you move freely and feel less stiff between training days.",
    types: [
      "Full-Body Mobility",
      "Lower-Body Mobility",
      "Upper-Body Mobility",
      "Hip Mobility",
      "Ankle Mobility",
      "Shoulder Mobility",
      "Back Mobility",
      "Neck Mobility",
      "Hamstring Stretch",
      "Quad & Hip-Flexor Stretch",
      "Calf & Ankle Stretch",
    ],
    sessions: [
      { title: "Hip Mobility", minutes: 10, kit: "Yoga mat", img: "hip-mobility" },
      { title: "Full-Body Mobility", minutes: 15, kit: "Yoga mat", img: "full-body-mobility" },
      { title: "Quad & Hip-Flexor Stretch", minutes: 5, kit: "Yoga mat", img: "quad-hip-flexor" },
    ],
    faqs: [
      {
        q: "What is the difference between mobility and stretching?",
        a: "Stretching holds a muscle at length. Mobility moves a joint through its range under control. HealFitMe sessions mix both, depending on the area.",
      },
      {
        q: "How often should I do mobility work?",
        a: "Short, regular sessions tend to work better than one long one. Many people do a few minutes most days. HealFitMe suggests one when your score and history point to it.",
      },
      {
        q: "Do I need any kit?",
        a: "Most mobility sessions need only a yoga mat or a soft floor. Sessions that use other kit say so before you start, and HealFitMe only suggests kit you told it you have.",
      },
    ],
  },
  {
    slug: "post-training",
    label: "Post-training",
    name: "Post-Training Recovery",
    title: "Post-Training Recovery Sessions",
    short:
      "Recovery after workouts, runs, rides, gym days, leg days, upper-body days, tennis and other sports, plus active recovery and cooldowns.",
    description:
      "Sessions for after you train, matched to what you just did, from a run or a ride to leg day or a match. Use them to cool down and get ready for the next session.",
    types: [
      "Post-Workout Recovery",
      "Post-Run Recovery",
      "Post-Cycling Recovery",
      "Post-Gym Recovery",
      "Post-Leg-Day Recovery",
      "Post-Upper-Body Recovery",
      "Post-Tennis Recovery",
      "Post-Sports Recovery",
      "Active Recovery",
      "Cooldown Recovery",
    ],
    sessions: [
      { title: "Post-Workout Recovery", minutes: 10, kit: "No kit", img: "post-workout" },
      { title: "Post-Run Recovery", minutes: 10, kit: "No kit", img: "post-run" },
      { title: "Post-Gym Recovery", minutes: 15, kit: "Yoga mat, foam roller", img: "post-gym" },
    ],
    faqs: [
      {
        q: "Should I do a recovery session right after training?",
        a: "A short cooldown straight after training is a good habit. Longer recovery sessions also work later in the day or the next morning.",
      },
      {
        q: "What is active recovery?",
        a: "Easy, low-effort movement on a rest day or after hard training, such as gentle mobility or light stretching, instead of complete rest.",
      },
      {
        q: "Does a recovery session change my score?",
        a: "Yes. Finishing a guided session adds points to your Recovery score, up to 15 a day.",
      },
    ],
  },
  {
    slug: "low-energy",
    label: "Tired day",
    name: "Low-Energy / Tired Days",
    title: "Low-Energy & Tired-Day Sessions",
    short:
      "Gentle sessions for days when you're tired: quick resets, light recovery, full-body relaxation, easy stretching and desk recovery.",
    description:
      "When your check-in says you're drained, HealFitMe can suggest something gentle instead of something hard. These sessions keep you moving without asking much of you.",
    types: [
      "Tired-Day Recovery",
      "3-Minute Reset",
      "5-Minute Light Recovery",
      "Full-Body Relaxation",
      "Gentle Mobility",
      "Easy Stretch",
      "Desk Recovery",
    ],
    sessions: [
      { title: "Tired-Day Recovery", minutes: 10, kit: "No kit", img: "tired-day" },
      { title: "Full-Body Relaxation", minutes: 10, kit: "Yoga mat", img: "full-body-relaxation" },
      { title: "Easy Stretch", minutes: 5, kit: "Yoga mat", img: "easy-stretch" },
    ],
    faqs: [
      {
        q: "Should I train when I'm tired?",
        a: "Sometimes an easy session is the better choice. A low Recovery score is a signal to go lighter, and HealFitMe picks gentler missions on those days.",
      },
      {
        q: "Can I skip today's mission?",
        a: "Yes. Tap Not today to skip it, or choose Try a shorter one.",
      },
      {
        q: "What if I feel unwell, not just tired?",
        a: "HealFitMe gives recovery guidance, not medical advice. If you feel unwell, rest and talk to a doctor.",
      },
    ],
  },
  {
    slug: "time-based",
    label: "Quick",
    name: "Time-Based",
    title: "Recovery Sessions by Time",
    short:
      "Sessions sorted by how long you have, from 3 to 15 minutes, and by time of day: quick morning recovery, a midday reset, evening recovery and a bedtime wind-down.",
    description:
      "Pick by the time you have. HealFitMe never suggests a session longer than the time you said you have for recovery.",
    types: [
      "3-Minute Recovery",
      "5-Minute Recovery",
      "10-Minute Recovery",
      "15-Minute Recovery",
      "Quick Morning Recovery",
      "Midday Reset",
      "Evening Recovery",
      "Bedtime Wind-Down",
    ],
    sessions: [
      { title: "Quick Morning Recovery", minutes: 5, kit: "No kit", img: "morning" },
      { title: "Midday Reset", minutes: 10, kit: "Yoga mat", img: "midday" },
      { title: "Evening Recovery", minutes: 15, kit: "Yoga mat", img: "evening" },
    ],
    faqs: [
      {
        q: "Is a 3-minute session worth it?",
        a: "Yes. A few minutes of easy movement is better than none, and short sessions are easier to keep up every day.",
      },
      {
        q: "How does HealFitMe pick the length?",
        a: "From the time you say you have, in setup and in each check-in. It never picks a session longer than that.",
      },
      {
        q: "When is the best time of day to recover?",
        a: "Whenever you will actually do it. Morning sessions loosen you up, and evening sessions help you wind down.",
      },
    ],
  },
  {
    slug: "breathwork",
    label: "Breathwork",
    name: "Relaxation & Breathwork",
    title: "Relaxation & Breathwork Sessions",
    short:
      "Recovery breathing, breathing after training, stress resets, relaxation flows, breathing before sleep and a body scan.",
    description:
      "Slow down your breathing and your body. These sessions are calm and quiet, and most need nothing but a place to sit or lie down.",
    types: [
      "Recovery Breathing",
      "Post-Training Breathing",
      "Stress Reset",
      "Relaxation Flow",
      "Pre-Sleep Breathing",
      "Body Scan",
    ],
    sessions: [
      { title: "Recovery Breathing", minutes: 5, kit: "No kit", img: "recovery-breathing" },
      { title: "Body Scan", minutes: 10, kit: "No kit", img: "body-scan" },
      { title: "Stress Reset", minutes: 3, kit: "No kit", img: "stress-reset" },
    ],
    faqs: [
      {
        q: "How can breathing help recovery?",
        a: "Slow, steady breathing helps you relax after training and before sleep. It's an easy way to recover when you don't want to move much.",
      },
      {
        q: "Do I need any experience?",
        a: "No. The coach talks you through each step, and you can pause whenever you like.",
      },
      {
        q: "Can I use these before bed?",
        a: "Yes. Pre-Sleep Breathing and the Body Scan are made for winding down at night.",
      },
    ],
  },
  {
    slug: "specific-needs",
    label: "Targeted",
    name: "Specific Needs",
    title: "Sessions for Specific Needs",
    short:
      "Targeted help for tight hips, hamstrings, calves, shoulders and neck, lower- and upper-back mobility, sore legs and shoulders, and recovering after travel.",
    description:
      "Go straight to the part that needs it. These sessions focus on one tight or sore area, or on getting back to normal after a long journey.",
    types: [
      "Tight Hips",
      "Tight Hamstrings",
      "Tight Calves",
      "Tight Shoulders",
      "Tight Neck",
      "Lower-Back Mobility",
      "Upper-Back Mobility",
      "Sore Legs",
      "Sore Shoulders",
      "Post-Travel Recovery",
    ],
    sessions: [
      { title: "Lower-Back Mobility", minutes: 10, kit: "Yoga mat", img: "lower-back" },
      { title: "Tight Hamstrings", minutes: 5, kit: "Yoga mat", img: "tight-hamstrings" },
      { title: "Tight Calves", minutes: 5, kit: "No kit", img: "tight-calves" },
    ],
    faqs: [
      {
        q: "What if something hurts, not just feels tight?",
        a: "Stop and get it checked. HealFitMe gives recovery guidance, not medical advice, and does not treat injuries.",
      },
      {
        q: "Does HealFitMe know about my injuries?",
        a: "Only what you tell it in setup or Edit profile. It uses that to steer missions away from areas to go easy on.",
      },
      {
        q: "Why is there a session for after travel?",
        a: "Long sitting and travel days leave you stiff, and they lower your Recovery score. Post-Travel Recovery helps you loosen up.",
      },
    ],
  },
  {
    slug: "sport-specific",
    label: "Sport",
    name: "Sport Specific",
    title: "Sport-Specific Recovery Sessions",
    short:
      "Recovery made for your sport: running, tennis, cycling, the gym, football and soccer, basketball, swimming and other outdoor sports.",
    description:
      "Every sport loads the body differently. These sessions focus on the areas your sport works hardest.",
    types: [
      "Runner Recovery",
      "Tennis Recovery",
      "Cyclist Recovery",
      "Gym Recovery",
      "Football/Soccer Recovery",
      "Basketball Recovery",
      "Swimmer Recovery",
      "Outdoor/Sports Recovery",
    ],
    sessions: [
      { title: "Runner Recovery", minutes: 10, kit: "No kit", img: "runner" },
      { title: "Tennis Recovery", minutes: 10, kit: "Yoga mat", img: "tennis" },
      { title: "Outdoor/Sports Recovery", minutes: 15, kit: "No kit", img: "sports" },
    ],
    faqs: [
      {
        q: "How does HealFitMe know my sport?",
        a: "You choose your activities and training days in setup. You can change them any time in Edit profile.",
      },
      {
        q: "I play more than one sport. Which sessions will I get?",
        a: "HealFitMe looks at what you logged and how you feel each day, so the mission can change with your training.",
      },
      {
        q: "Is there a club for my sport?",
        a: "There are clubs for Runners, Athletes, Gym & Strength, Office workers, Students, and Adventurers & travelers.",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
