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
      className={`border rounded-xl p-5 cursor-pointer transition
        ${isOpen ? "bg-blue-50 border-blue-400" : "hover:bg-gray-50"}`}
    >
      {/* 상단 */}
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-500">
        {project.subtitle} · {project.period}
      </p>

      <p className="mt-2 text-sm text-gray-700">
        {project.summary}
      </p>

      {/* 토글 텍스트 */}
      <span className="mt-3 inline-block text-blue-600 text-sm">
        {isOpen ? "Hide details ↑" : "See details →"}
      </span>

      {/* ✅ 카드 내부 확장 */}
      {isOpen && (
        <div className="mt-4">
          <ProjectInlineDetail project={project} />
        </div>
      )}
    </div>
  );
}
