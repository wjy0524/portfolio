"use client";

import { Github, Linkedin, Instagram } from "lucide-react";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jaeyeonwon",
    icon: <Linkedin size={35} />,
    hover: "hover:text-blue-600",
  },
  {
    label: "GitHub",
    href: "https://github.com/jaeyeonwon",
    icon: <Github size={35} />,
    hover: "hover:text-black",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jaeyeonwon",
    icon: <Instagram size={35} />,
    hover: "hover:text-pink-500",
  },
];

export default function LeftSocialDock() {
  return (
    <div className="flex flex-col items-center gap-10">
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-gray-400
            transition-all
            hover:scale-110
            ${s.hover}
          `}
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
