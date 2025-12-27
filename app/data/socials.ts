// app/data/socials.ts
import { Github, Linkedin, Instagram } from "lucide-react";

export type Social = {
  id: "linkedin" | "github" | "instagram";
  title: string;
  url: string;
  icon: React.ElementType;
  hoverClass: string;
};

export const SOCIALS: Social[] = [
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/jaeyeonwon",
    icon: Linkedin,
    hoverClass: "group-hover:text-[#0A66C2]",
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/wjy0524",
    icon: Github,
    hoverClass: "group-hover:text-black",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/jae._.yeon_02/",
    icon: Instagram,
    hoverClass: "group-hover:text-pink-500",
  },
];
