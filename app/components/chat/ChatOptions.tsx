type Section = "experience" | "projects" | "skills" | "socials";

const OPTIONS: { label: string; value: Section }[] = [
  { label: "Experience", value: "experience" },
  { label: "Projects", value: "projects" },
  { label: "Skills", value: "skills" },
  { label: "Socials", value: "socials" },
];

export default function ChatOptions({
  onSelectSection,
}: {
  onSelectSection: (section: Section) => void;
}) {
  return (
    <div className="flex gap-3 justify-center">
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onSelectSection(opt.value)}
          className="px-4 py-2 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white"
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
