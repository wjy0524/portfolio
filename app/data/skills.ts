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
  /* ---------- Programming ---------- */
  {
    title: "Programming",
    skills: [
      { name: "C", level: 90 },
      { name: "C++", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 75 },
      { name: "JavaScript", level: 65 },
      { name: "TypeScript", level: 65 },
      { name: "Dart", level: 75 },
      { name: "Swift", level: 65 },
      { name: "HTML / CSS", level: 75 },
    ],
  },

  /* ---------- Technologies ---------- */
  {
    title: "Technologies",
    skills: [
      { name: "NumPy", level: 80 },
      { name: "pandas", level: 80 },
      { name: "scikit-learn", level: 75 },
      { name: "FastAPI", level: 80 },
      { name: "Flask", level: 65 },
      { name: "React", level: 75 },
      { name: "Node.js", level: 65 },
      { name: "Flutter", level: 90 },
      { name: "MongoDB", level: 60 },
      { name: "Firebase / Firestore", level: 85 },
      { name: "Linux", level: 70 },
      { name: "Git / GitHub", level: 80 },
    ],
  },

  /* ---------- Machine Learning ---------- */
  {
    title: "Machine Learning",
    skills: [
      { name: "Isolation Forest", level: 80 },
      { name: "Robust PCA", level: 75 },
      { name: "BOCPD", level: 75 },
      { name: "Random Forest", level: 70 },
      { name: "RAG", level: 70 },
      { name: "CNN", level: 80 },
      { name: "RNN", level: 75 },
      { name: "Transformers", level: 80 },
      { name: "GANs", level: 70 },
      { name: "Whisper ASR", level: 75 },
    ],
  },

  /* ---------- Systems & Hardware ---------- */
  {
    title: "Systems & Hardware",
    skills: [
      { name: "Embedded Systems", level: 85 },
      { name: "ARM Assembly", level: 70 },
      { name: "UART / ADC / Timers", level: 75 },
      { name: "Signal Processing", level: 75 },
      { name: "Battery Management Systems (BMS)", level: 70 },
      { name: "Impedance Spectroscopy (EIS)", level: 65 },
    ],
  },

  /* ---------- Human Languages ---------- */
  {
    title: "Languages",
    skills: [
      { name: "English", level: 100 },
      { name: "Korean", level: 100 },
    ],
  },
];
