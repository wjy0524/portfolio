// app/types/ui.ts

export type DockSection =
  | "experience"
  | "projects"
  | "skills"
  | "socials"
  | null;

export type Message = {
  id: number;
  role: "user" | "bot";
  content: string;
};
