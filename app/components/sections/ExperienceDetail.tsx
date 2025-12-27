// app/components/sections/ExperienceDetail.tsx

import { Experience } from "@/data/experience";

type Props = {
  experience: Experience;
};

export default function ExperienceDetail({ experience }: Props) {
  return (
    <div className="space-y-6">
      {/* Header with Logo */}
      <div className="flex gap-4 items-start">
        {/* Logo */}
        {experience.logo && (
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center bg-white">
              <img
                src={experience.logo}
                alt={experience.company}
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>
        )}

        {/* Title */}
        <div>
          <h2 className="text-xl font-semibold">{experience.role}</h2>
          <p className="text-sm text-gray-600">
            {experience.company} · {experience.period}
          </p>
        </div>
      </div>

      {/* Details */}
      <ul className="list-disc pl-5 space-y-2 text-sm">
        {experience.fullDetails.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div>
        <h3 className="text-sm font-medium mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
