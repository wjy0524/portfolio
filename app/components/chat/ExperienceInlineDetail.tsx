// app/components/chat/ExperienceInlineDetail.tsx

import { Experience } from "@/data/experience";

type Props = {
  experience: Experience;
};

export default function ExperienceInlineDetail({ experience }: Props) {
  return (
    <ul className="mt-3 list-disc pl-5 text-sm text-gray-800 space-y-1">
      {experience.inlineDetails.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
}
