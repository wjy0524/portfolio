"use client";

import { useState } from "react";
import ChatBubble from "./ChatBubble";
import ChatOptions from "./ChatOptions";
import TypingBubble from "./TypingBubble";

import ExperiencePreview from "./ExperiencePreview";
import ExperienceInlineDetail from "./ExperienceInlineDetail";
import ProjectPreview from "./ProjectPreview";
import ProjectInlineDetail from "./ProjectInlineDetail";
import SocialCard from "./SocialCard";

import { EXPERIENCES } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { SOCIALS } from "@/data/socials";
import type { Message } from "@/types/chat";
import { SKILLS } from "@/data/skills";
import SkillBar from "./SkillBar";
import MemojiAvatar from "@/components/avatar/MemojiAvatar";


/* ------------------------
   Types
------------------------- */
export type Section = "experience" | "projects" | "skills" | "socials";

type SectionMessage = {
  id: number;
  role: "section";
  section: Section;
};

type Props = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

/* ------------------------
   Component
------------------------- */
export default function ChatStream({ messages, setMessages }: Props) {
  const [isTyping, setIsTyping] = useState(false);

  const [expandedExperienceIds, setExpandedExperienceIds] = useState<Set<string>>(
    new Set()
  );
  const [expandedProjectIds, setExpandedProjectIds] = useState<Set<string>>(
    new Set()
  );

  /* ------------------------
     Handlers
  ------------------------- */
  const handleOptionClick = (section: Section) => {
    // user bubble
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        content: section,
      },
    ]);

    setIsTyping(true);

    setTimeout(() => {
      // bot bubble
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          content: getBotReply(section),
        },
        {
          id: Date.now() + 2,
          role: "section",
          section,
        } as SectionMessage,
      ]);

      setIsTyping(false);
    }, 600);
  };

  const toggleExperience = (id: string) => {
    setExpandedExperienceIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleProject = (id: string) => {
    setExpandedProjectIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  /* ------------------------
     Render
  ------------------------- */
  return (
    <section className="flex flex-col w-full max-w-5xl p-4 gap-6">
      {messages.length === 1 && (
        <div className="lg:hidden flex justify-center pt-4 pb-2">
          <MemojiAvatar size={96} />
        </div>
      )}
      {messages.map((msg) => {
        // ---------------- Chat bubbles ----------------
        if (msg.role === "user" || msg.role === "bot") {
          return (
            <ChatBubble
              key={msg.id}
              role={msg.role}
              content={msg.content}
            />
          );
        }

        // ---------------- EXPERIENCE section ----------------
        if (msg.role === "section" && msg.section === "experience") {
          return (
            <div key={msg.id} className="space-y-6">
              {EXPERIENCES.map((exp) => {
                const isOpen = expandedExperienceIds.has(exp.id);

                return (
                  <div key={exp.id} className="space-y-3">
                    <ExperiencePreview
                      experience={exp}
                      isOpen={isOpen}
                      onToggle={() => toggleExperience(exp.id)}
                    />
                  </div>
                );
              })}
            </div>
          );
        }

        // ---------------- PROJECTS section ----------------
        if (msg.role === "section" && msg.section === "projects") {
          return (
            <div key={msg.id} className="space-y-6">
              {PROJECTS.map((project) => {
                const isOpen = expandedProjectIds.has(project.id);

                return (
                  <div key={project.id} className="space-y-3">
                    <ProjectPreview
                      project={project}
                      isOpen={isOpen}
                      onToggle={() => toggleProject(project.id)}
                    />
                  </div>
                );
              })}
            </div>
          );
        }
         /* ---------------- SOCIALS ---------------- */
        if (msg.section === "socials") {
          return (
            <div key={msg.id} className="space-y-4">
              {SOCIALS.map((social) => (
                <SocialCard key={social.id} social={social} />
              ))}
            </div>
          );
        }

        // ---------------- SKILLS section ----------------
        if (msg.role === "section" && msg.section === "skills") {
          return (
            <div key={msg.id} className="space-y-10">
              {SKILLS.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {section.title}
                  </h3>

                  {section.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      label={skill.name}
                      value={skill.level}
                    />
                  ))}
                </div>
              ))}
            </div>
          );
        }


        return null;
      })}

      {/* Typing */}
      {isTyping && <TypingBubble />}

      {/* Options */}
      {!isTyping && (
        <ChatOptions onSelectSection={handleOptionClick} />
      )}
    </section>
  );
}

/* ------------------------
   Bot Reply
------------------------- */
function getBotReply(section: Section): string {
  switch (section) {
    case "experience":
      return "Here’s a quick overview of my experience. Click a card to expand.";
    case "projects":
      return "Here are some projects I’ve worked on. Click a card to see details.";
    case "skills":
      return "My core skills include C/C++, TypeScript, React, Flutter, Firebase, and systems programming.";
    case "socials":
      return "You can find me on GitHub, LinkedIn, and Instagram.";
    default:
      return "";
  }
}
