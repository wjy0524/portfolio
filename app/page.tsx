"use client";

import { useState } from "react";
import Header from "./components/layout/Header";
import ChatStream from "./components/chat/ChatStream";
import RightDock from "./components/layout/RightDock";
import RightDockButton from "./components/layout/RightDockButton";

import Socials from "./components/sections/Socials";
import MemojiAvatar from "./components/avatar/MemojiAvatar";
import LeftSocialDock from "./components/layout/LeftSocialDock";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ChatInput from "./components/chat/ChatInput";

import type { Message } from "@/types/chat";

/* ------------------------
   Types
------------------------- */
export type DockSection =
  | "experience"
  | "projects"
  | "skills"
  | "socials"
  | null;

/* ------------------------
   Page
------------------------- */
export default function Page() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "bot",
      content: "Hi 👋 I’m Jaeyeon, a software-focused ECE student who builds embedded systems, apps, and AI-powered tools. What would you like to explore?",
    },
  ]);

  const [dockSection, setDockSection] = useState<DockSection>(null);
  const [isDockOpen, setIsDockOpen] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);

  return (
    <main className="relative min-h-screen bg-gray-50 overflow-x-hidden pb-24">
      <Header />

      {/* ================= MAIN LAYOUT ================= */}
      <div
        className="
          pt-32 max-w-7xl mx-auto
          px-4 md:px-8
          grid grid-cols-1
          lg:grid-cols-[180px_1fr_120px]
          gap-12
        "
      >
        {/* LEFT (Desktop only) */}
        <aside className="hidden lg:flex">
          <div className="fixed top-32 flex flex-col items-center gap-20">
            <MemojiAvatar size={128} />
            <LeftSocialDock />
          </div>
        </aside>

        {/* CENTER */}
        <ChatStream messages={messages} setMessages={setMessages} />

        {/* RIGHT spacer */}
        <aside className="hidden lg:block" />
      </div>

      {/* ================= RIGHT DOCK ================= */}
      <RightDockButton
        onOpen={(section) => {
          setDockSection(section);
          setIsDockOpen(true);
        }}
      />

      <RightDock isOpen={isDockOpen} onClose={() => setIsDockOpen(false)}>
        {dockSection === "experience" && <ExperienceSection />}
        {dockSection === "projects" && <ProjectsSection />}
        {dockSection === "skills" && <SkillsSection />}
        {dockSection === "socials" && <Socials />}
      </RightDock>

      {/* ================= CHAT INPUT ================= */}
      <ChatInput
        disabled={inputDisabled}
        onSend={async (text) => {
          const baseId = Date.now();

          // 1️⃣ User + Sending bubble
          setMessages((prev) => [
            ...prev,
            { id: baseId, role: "user", content: text },
            {
              id: baseId + 1,
              role: "bot",
              content: "⏳ Sending your message…",
            },
          ]);

          try {
            const MIN_DELAY = 1400;

            await Promise.all([
              fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text }),
              }),
              new Promise((r) => setTimeout(r, MIN_DELAY)),
            ]);

            // 2️⃣ Success message
            setMessages((prev) =>
              prev.map((m) =>
                m.id === baseId + 1
                  ? {
                      ...m,
                      content:
                        "✅ I've sent your message to my email! 🎉 I'll get back to you shortly.",
                    }
                  : m
              )
            );

            // 3️⃣ Disable input temporarily
            setInputDisabled(true);
            setTimeout(() => setInputDisabled(false), 5000);
          } catch {
            setMessages((prev) =>
              prev.map((m) =>
                m.id === baseId + 1
                  ? {
                      ...m,
                      content:
                        "❌ Something went wrong. Please try again later.",
                    }
                  : m
              )
            );
            setInputDisabled(false);
          }
        }}
      />
    </main>
  );
}
