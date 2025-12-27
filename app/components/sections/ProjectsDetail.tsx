import { Project } from "@/data/projects";
type Props = {
  project: Project;
};

export default function ProjectsDetail({ project }: Props) {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-xl font-semibold">{project.title}</h2>
        <p className="text-sm text-gray-500">{project.subtitle}</p>
      </header>

      {/* 🎥 Media */}
      {project.media && (
        <div className="space-y-4">
          {project.media.map((m, i) =>
            m.type === "image" ? (
              <div key={i} className="flex justify-center">
                <img
                  src={m.src}
                  className="w-full max-w-sm max-h-[320px] object-contain rounded-lg border"
                />
              </div>
            ) : (
              <div key={i} className="flex justify-center">
                <video
                  src={m.src}
                  controls
                  muted
                  playsInline
                  className="w-full max-w-sm max-h-[320px] object-contain rounded-lg border"
                />
              </div>
            )
          )}
        </div>
      )}

      {/* 설명 */}
      <ul className="list-disc pl-5 text-sm space-y-1">
        {project.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {/* 링크 */}
      {project.links && (
        <div className="flex gap-3">
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              className="text-sm text-blue-600"
            >
              {l.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
