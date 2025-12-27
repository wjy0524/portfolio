import { Project } from "@/data/projects";
type Props = {
  project: Project;
};

export default function ProjectInlineDetail({ project }: Props) {
  return (
    <div className="pl-4 space-y-4">
      <ul className="list-disc pl-5 text-sm space-y-1">
        {project.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs rounded-full bg-gray-100"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
