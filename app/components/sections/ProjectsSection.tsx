// ProjectsSection.tsx
import { PROJECTS } from "@/data/projects";
import ProjectsDetail from "./ProjectsDetail";

export default function ProjectsSection() {
  return (
    <div className="space-y-10">
      {PROJECTS.map((p) => (
        <ProjectsDetail key={p.id} project={p} />
      ))}
    </div>
  );
}
