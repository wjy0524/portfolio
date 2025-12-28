import { Project } from "@/data/projects";
import ProjectInlineDetail from "./ProjectInlineDetail";

type Props = {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
};

export default function ProjectPreview({
  project,
  isOpen,
  onToggle,
}: Props) {
  return (
    <div
      onClick={onToggle}
      className={`rounded-xl border p-5 cursor-pointer transition
        ${isOpen ? "bg-blue-50 border-blue-400" : "hover:bg-gray-50"}`}
    >
      <div className="flex gap-4 items-start">
        {/* Preview Image*/}
        {project.previewImage && (
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-lg border flex items-center justify-center bg-white">
              <img
                src={project.previewImage}
                alt={project.title}
                className="w-7 h-7 object-contain"
              />
            </div>
          </div>
        )}

        {/* Text */}
        <div className="flex-1">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-500">
            {project.subtitle} · {project.period}
          </p>

          <p className="mt-2 text-sm text-gray-700">
            {project.summary}
          </p>

          <span className="mt-3 inline-block text-blue-600 text-sm">
            {isOpen ? "Hide details ↑" : "See details →"}
          </span>
        </div>
      </div>

      {/* 카드 내부 확장 */}
      {isOpen && (
        <div className="mt-4">
          <ProjectInlineDetail project={project} />
        </div>
      )}
    </div>
  );
}

