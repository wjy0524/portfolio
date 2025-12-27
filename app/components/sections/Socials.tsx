// app/components/sections/Socials.tsx
"use client";

import SocialCard from "@/components/chat/SocialCard";
import { SOCIALS } from "@/data/socials";
import { FileText } from "lucide-react";

export default function Socials() {
  return (
    <div className="space-y-4">
      {/* Social links */}
      {SOCIALS.map((social) => (
        <SocialCard key={social.id} social={social} />
      ))}

      {/* Resume */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="
          group
          flex items-center gap-4
          border rounded-xl p-5
          transition
          hover:bg-gray-50
        "
      >
        {/* Icon */}
        <div className="text-gray-400 transition group-hover:text-gray-900">
          <FileText className="w-7 h-7" />
        </div>

        {/* Text */}
        <div>
          <h3 className="font-semibold">Resume</h3>
          <p className="text-sm text-gray-500">
            View my resume (PDF)
          </p>
        </div>
      </a>
    </div>
  );
}
