"use client";

import SkillBar from "@/components/chat/SkillBar";
import { SKILLS } from "@/data/skills";

export default function SkillsSection() {
  return (
    <div className="p-6 space-y-10">
      <h2 className="text-xl font-semibold">Skills</h2>

      {SKILLS.map((section) => (
        <div key={section.title} className="space-y-4">
          {/* Section Title */}
          <h3 className="text-lg font-medium text-gray-800">
            {section.title}
          </h3>

          {/* Skill Bars */}
          <div className="space-y-3">
            {section.skills.map((skill) => (
              <SkillBar
                key={skill.name}
                label={skill.name}
                value={skill.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
