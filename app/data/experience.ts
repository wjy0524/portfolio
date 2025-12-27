// app/data/experience.ts

export type Experience = {
  id: string;

  role: string;
  company: string;
  period: string;
  //회사 로고
  logo?: string;

  // chat 카드 미리보기 (1줄)
  preview: string;

  // 카드 확장 시 (3~5줄)
  inlineDetails: string[];

  // 오른쪽 Dock (풀 이력서급)
  fullDetails: string[];

  techStack: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "kookmin-ai",
    role: "Undergraduate Research Assistant",
    company: "Kookmin University",
    period: "May 2025 – Aug 2025",
    logo: "Kookmin.svg",
    preview:
      "AI research on dyslexia detection using eye-tracking, speech, and transformers.",
    inlineDetails: [
      "Researched ML models for reading disorder detection",
      "Built multimodal pipelines with eye-tracking and speech data",
      "Evaluated CNN, RNN, and Transformer architectures",
    ],
    fullDetails: [
      "Designed a multimodal ML pipeline integrating eye-tracking gaze vectors, speech features, and transformer-based encoders",
      "Trained CNN, RNN, and Transformer models for dyslexia classification tasks",
      "Collected and processed data from 80+ participants with noise filtering and normalization",
      "Achieved ~85% classification accuracy and conducted ablation studies",
    ],
    techStack: ["Python", "PyTorch", "CNNs", "RNNs", "GNNs", "Transformers", "Whisper", "NumPy"],
  },

  {
    id: "rokmc",
    role: "Communication / Signal Squad Leader & Interpreter (E-5)",
    company: "Republic of Korea Marine Corps",
    period: "Jun 2023 – Dec 2024",
    logo: "/ROKMC.png",
    preview:
      "Led battalion-level signal operations and supported joint military exercises.",
    inlineDetails: [
      "Led signal squad operations at battalion level",
      "Coordinated joint exercises with allied forces",
      "Served as Korean–English military interpreter",
    ],
    fullDetails: [
      "Led battalion-level communication and signal operations in high-pressure environments",
      "Coordinated joint military exercises with allied forces including U.S. units",
      "Acted as primary Korean–English interpreter for operational briefings",
      "Managed secure communication protocols and field equipment",
    ],
    techStack: ["Leadership", "Communication Systems", "Interpretation"],
  },

  {
    id: "UTECE",
    role: "Faculty Recruitment Interviewer",
    company: "Univesity of Texas at Austin, ECE Department",
    period: "Dec 2025 – Present",
    logo: "ECE.png",
    preview:
      "Conduct undergraduate-led interviews for ECE faculty candidates, focusing on teaching philosophy, student engagement, and research accessibility.",
    inlineDetails: [
      "Interviewing faculty candidates as part of the ECE department hiring process",
      "Evaluating teaching philosophy, communication clarity, and undergraduate engagement",
      "Providing structured feedback representing the undergraduate student perspective",
    ],
    fullDetails: [
      "Participating as an undergraduate interviewer in the UT Austin ECE faculty recruitment process",
      "Conducting one-on-one and panel interviews with faculty candidates focusing on teaching effectiveness and approachability",
      "Assessing candidates’ ability to communicate complex research ideas to undergraduate students",
      "Providing written and verbal feedback to the faculty hiring committee representing student perspectives",
      "Contributing to discussions on curriculum impact, mentoring style, and inclusivity in undergraduate education",
    ],
    techStack: ["Interviewing",
    "Academic Evaluation",
    "Faculty Recruitment",
    "Communication",
    "Student Advocacy",],
  },
];
