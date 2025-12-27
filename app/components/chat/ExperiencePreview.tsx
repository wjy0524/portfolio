import { Experience } from "@/data/experience";
import ExperienceInlineDetail from "./ExperienceInlineDetail";

type Props = {
  experience: Experience;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ExperiencePreview({
  experience,
  isOpen,
  onToggle,
}: Props) {
  return (
    <div
      onClick={onToggle}
      className={`rounded-xl border p-5 cursor-pointer transition
        ${isOpen ? "bg-blue-50 border-blue-400" : "hover:bg-gray-50"}`}
    >
      <div className="flex gap-4 items-center">
        {/* 🔵 Logo */}
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

        {/* 📝 Text */}
        <div>
          <h3 className="font-semibold">{experience.role}</h3>
          <p className="text-sm text-gray-500">
            {experience.company} · {experience.period}
          </p>

          <span className="text-blue-600 text-sm mt-1 inline-block">
            {isOpen ? "Hide details ↑" : "See my work →"}
          </span>
        </div>
      </div>

      {/* ✅ 카드 내부 확장 */}
      {isOpen && (
        <div className="mt-4">
          <ExperienceInlineDetail experience={experience} />
        </div>
      )}
    </div>
  );
}
