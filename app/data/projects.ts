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
  previewImage?: string;     
  detailMedia?: ProjectMedia[];
  links?: ProjectLink[];

  
};

export const PROJECTS: Project[] = [
  {
    id: "unitime",
    title: "UniTime",
    subtitle: "AI-Powered Student Platform for UT Austin",
    period: "Aug 2025 – Present",
    summary:
      "A native iOS platform for UT Austin students combining schedule management, GPA tracking, and campus social features, with an AI advisor grounded in retrieved UT course and event data.",
    highlights: [
      "Built a native iOS app in SwiftUI (~25,000 lines) on Firebase Auth, Firestore, and Cloud Functions",
      "Designed a confidence-gated RAG pipeline where OpenAI embeddings retrieve UT course and event data from a Qdrant vector database, using campus context only when at least two results clear a 0.75 similarity threshold",
      "Built a four-mode reasoning router (personal / campus / web / general) with a SerpAPI fallback, so the assistant reports that it lacks reliable information instead of hallucinating an answer",
      "Added a rule-based intent classifier that injects only the profile fields relevant to each question, reducing prompt size and unnecessary exposure of student data",
      "Automated a daily scheduled Cloud Function that scrapes campus events and refreshes the vector index",
      "Built a reusable SwiftUI component library plus social features including friends, profiles, and post sharing",
    ],
    techStack: ["SwiftUI", "Firebase", "Cloud Functions", "TypeScript", "Qdrant", "OpenAI", "RAG"],
    previewImage: "/UniTime.png",
    detailMedia: [
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
      "Collected and processed data from 80+ participants and achieved ~85% classification accuracy on 80+ participants",
      "Reduced input latency by 40% using interrupt-driven design"

    ],
    techStack: [
      "Python",
      "FastAPI",
      "Flutter Web",
      "PyTorch",
      "Whisper",
      "NumPy",
    ],
    previewImage: "/Dystrace.png",
    detailMedia: [
      { type: "video", src: "/dystrace.mp4" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wjy0524/HackTX25-DYSCVER",
      },

      {
        label: "Website",
        url: "https://dystrace-dyscvr.vercel.app/",
      },
    ],
  },

  {
    id: "pitcrew",
    title: "PitCrew",
    subtitle: "Agentic Predictive Maintenance · Austin Agentic AI Hackathon",
    period: "Oct 2026",
    summary:
      "A multi-agent crew that watches shop-floor machines, flags failure risk, recommends actions, and orders parts only after a human operator approves.",
    highlights: [
      "Built the operator console in Python Shiny for a multi-agent crew running on Strands Agents and Amazon Bedrock AgentCore",
      "Redesigned the console around a priority queue so operators see the most urgent machines first",
      "Added a Comms agent that turns the monitoring agent's readings into alerts for floor operators",
      "Kept a human-approval step before any part order or technician booking",
    ],
    techStack: ["Python", "Shiny", "Strands Agents", "Amazon Bedrock", "Multi-Agent"],
    previewImage: "/PitCrew.svg",
    detailMedia: [{ type: "video", src: "/pitcrew.mp4" }],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/MuditUpadhyay04/AI-Agentic-Hack",
      },
    ],
  },

  {
    id: "virtual-stylist",
    title: "Virtual Stylist",
    subtitle: "Digital Closet & Outfit Recommendation App (ECE 364D)",
    period: "Oct 2026 – Present",
    summary:
      "A mobile app that builds a digital closet from the clothes you own, records how they fit, suggests outfits, and recommends a size from a shopping link.",
    highlights: [
      "Owned the backend in a 4-person team: FastAPI service with wardrobe, profile, and product APIs",
      "Designed the Supabase Postgres schema (profiles, style preferences, clothing items, fit feedback, linked products) with Row Level Security so users only reach their own rows",
      "Verified Supabase JWTs on every request (HS256 secret or JWKS) and stored closet photos in a private, per-user storage bucket",
      "Wrote API tests with pytest and documented the API contract for the frontend and AI teammates",
    ],
    techStack: ["Python", "FastAPI", "Supabase", "PostgreSQL", "JWT", "pytest"],
    previewImage: "/VirtualStylist.png",
    detailMedia: [{ type: "video", src: "/virtual-stylist.mp4" }],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wjy0524/ece364d-virtual-stylist",
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
    previewImage: "/Debug.png",
    detailMedia: [
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
    previewImage: "/Rpg.png",
    detailMedia: [
      { type: "video", src: "/game.mp4" },
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/wjy0524/Dungeon_Crawler_RPG",
      },
    ],
  },
];
