"use client";

type Props = {
  label: string;
  value: number; // 0 ~ 100
};

export default function SkillBar({ label, value }: Props) {
  return (
    <div className="flex items-center gap-6">
      {/* Skill name */}
      <div className="w-32 text-sm font-medium text-gray-800 shrink-0">
        {label}
      </div>

      {/* Bar background */}
      <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
        {/* Bar fill */}
        <div
          className="
            h-full
            rounded-full
            bg-blue-600
            transition-all
            duration-700
            ease-out
          "
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
