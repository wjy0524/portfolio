export type Section = "experience" | "projects" | "skills" | "socials";

export type UserMessage = {
  id: number;
  role: "user";
  content: string;
};

export type BotMessage = {
  id: number;
  role: "bot";
  content: string;
};

export type SectionMessage = {
  id: number;
  role: "section";
  section: Section;
};

export type Message = UserMessage | BotMessage | SectionMessage;
