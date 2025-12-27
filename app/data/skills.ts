export type Skill = {
  name: string;
  level: number; // 0 ~ 100
};

export type SkillSection = {
  title: string;
  skills: Skill[];
};

/* =========================
   SKILLS DATA
========================= */

export const SKILLS: SkillSection[] = [
  /* ---------- Languages ---------- */
  {
    title: "Languages",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 65 },
      { name: "HTML / CSS", level: 75 },
      { name: "Java", level: 75 },
      { name: "Dart", level: 75 },
      { name: "Swift", level: 65 },
    ],
  },

  /* ---------- Frameworks & Tools ---------- */
  {
    title: "Frameworks / Tools",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "React", level: 75 },
      { name: "FastAPI", level: 80 },
      { name: "Firebase / Firestore", level: 85 },
      { name: "Node.js", level: 65 },
    ],
  },

  /* ---------- ML & Systems ---------- */
  {
    title: "ML & Systems",
    skills: [
      { name: "CNN", level: 80 },
      { name: "RNN", level: 75 },
      { name: "Transformers", level: 80 },
      { name: "GANs", level: 70 },
      { name: "Whisper ASR", level: 75 },
      { name: "Embedded Systems", level: 85 },
      { name: "ARM Assembly", level: 70 },
      { name: "UART / ADC / Timers", level: 75 },
    ],
  },

  /* ---------- Human Languages (optional) ---------- */
  {
    title: "Languages (Human)",
    skills: [
      { name: "English", level: 100 },
      { name: "Korean", level: 100 },
    ],
  },
];
