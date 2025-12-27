import { Briefcase, Folder, Code, Users } from "lucide-react";

type Props = {
  onOpen: (
    section: "experience" | "projects" | "skills" | "socials"
  ) => void;
};

export default function RightDockButton({ onOpen }: Props) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
      <Icon icon={<Briefcase />} onClick={() => onOpen("experience")} />
      <Icon icon={<Folder />} onClick={() => onOpen("projects")} />
      <Icon icon={<Code />} onClick={() => onOpen("skills")} />
      <Icon icon={<Users />} onClick={() => onOpen("socials")} />
    </div>
  );
}

function Icon({
  icon,
  onClick,
}: {
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full bg-white shadow hover:bg-gray-100 flex items-center justify-center"
    >
      {icon}
    </button>
  );
}
