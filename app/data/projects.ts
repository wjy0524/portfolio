// app/data/projects.ts

export type ProjectMedia =
  | {
      type: "image";
      src: string;
    }
  | {
      type: "video";
      src: string;
    };

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  media?: ProjectMedia[];
  links?: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    id: "unitime",
    title: "UniTime",
    subtitle: "UT Austin Student Planner App",
    period: "Aug 2025 – Present",
    summary:
      "A student-focused planner that integrates schedule management, GPA tracking, and social features into a single UT Austin–specific platform.",
    highlights: [
      "Built a cross-platform mobile application using Flutter",
      "Implemented authentication and real-time data sync using Firebase Auth and Firestore",
      "Designed UT-specific UX flows for course scheduling and academic planning",
      "Focused on scalable architecture to support future multi-university expansion",
    ],
    techStack: ["Flutter", "Swift", "Firebase", "OpenAPI"],
    media: [
      { type: "image", src: "/UniTime.png" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wjy0524",
      },
    ],
  },

  {
    id: "dystrace",
    title: "Dystrace",
    subtitle: "AI-powered Dyslexia Screening Platform",
    period: "May 2025 – Nov 2025",
    summary:
      "A web-based AI platform for early dyslexia screening using multimodal behavioral data.",
    highlights: [
      "Designed an end-to-end dyslexia screening workflow using Flutter Web and FastAPI",
      "Integrated eye-tracking, speech-to-text, and comprehension tests for multimodal data collection",
      "Applied Whisper ASR and Levenshtein similarity for reading accuracy evaluation",
      "Trained and evaluated ML models including Random Forest classifiers",
      "Collected and processed data from 80+ participants",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Flutter Web",
      "PyTorch",
      "Whisper",
      "NumPy",
    ],
    media: [
      { type: "image", src: "/Dystrace.png" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wjy0524/HackTX25-DYSCVER",
      },
    ],
  },

  {
    id: "debug-invader",
    title: "Debug Invader",
    subtitle: "Embedded Systems Arcade Game",
    period: "Jan 2025 – May 2025",
    summary:
      "An arcade-style embedded systems game developed on a TI microcontroller platform.",
    highlights: [
      "Developed a real-time arcade game on the TI MSPM0G3507 LaunchPad",
      "Implemented hardware-level control using timers, ADC slide-pot, UART, and interrupts",
      "Achieved low-latency input handling and collision detection",
      "Combined C and ARM assembly for performance-critical components",
    ],
    techStack: ["C", "ARM Assembly", "Embedded Systems"],
    media: [
      { type: "video", src: "/Debug Invader.mp4" }
    ],
  },
  {
    id: "dungeon-crawler",
    title: "Dungeon Crawler RPG",
    subtitle: "Object-Oriented Console RPG Game",
    period: "Aug 2025 – Dec 2025",
    summary:
      "A turn-based dungeon crawler RPG built with a strong focus on object-oriented design, extensibility, and game logic architecture.",
    highlights: [
      "Designed a full RPG system using OOP principles including inheritance, polymorphism, and encapsulation",
      "Implemented Player, Monster, and Item class hierarchies with virtual functions and dynamic dispatch",
      "Built turn-based combat logic with health, damage, and skill mechanics",
      "Applied DFS-style dungeon traversal and state management",
      "Focused on memory safety and clean resource management using RAII concepts",
    ],
    techStack: ["C++", "OOP", "STL", "Data Structures"],
    media: [
      { type: "image", src: "/Dungeon.png" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wjy0524/Dungeon_Crawler_RPG",
      },
    ],
  },
];
