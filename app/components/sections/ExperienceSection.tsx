"use client";

import { EXPERIENCES } from "@/data/experience";
import ExperienceDetail from "./ExperienceDetail";

export default function ExperienceSection() {
  return (
    <div className="space-y-10">
      {EXPERIENCES.map((exp) => (
        <ExperienceDetail key={exp.id} experience={exp} />
      ))}
    </div>
  );
}
