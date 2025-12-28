import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectsDetail({ project }: Props) {
  return (
    <div className="space-y-8">

      {/* ================= Project Hero (Preview-style) ================= */}
      <div className="flex gap-4 items-start">
        {/* 🔵 Preview Image */}
        {project.previewImage && (
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-xl border bg-white flex items-center justify-center">
              <img
                src={project.previewImage}
                alt={project.title}
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        )}

        {/* 📝 Title / Period / Tech Stack */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">
            {project.title}
          </h2>

          <p className="text-sm text-gray-500">
            {project.subtitle} · {project.period}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* ================= Detail Media (RightDock 전용) ================= */}
      {project.detailMedia && (
        <div className="space-y-4">
          {project.detailMedia.map((m, i) =>
            m.type === "image" ? (
              <img
                key={i}
                src={m.src}
                className="
                  w-full
                  max-h-[420px]
                  object-contain
                  rounded-xl
                  border
                  mx-auto
                "
              />
            ) : (
              <video
                key={i}
                src={m.src}
                controls
                muted
                playsInline
                className="
                  w-full
                  max-h-[420px]
                  object-contain
                  rounded-xl
                  border
                  mx-auto
                "
              />
            )
          )}
        </div>
      )}

      {/* ================= Highlights ================= */}
      <ul className="list-disc pl-5 text-sm space-y-2">
        {project.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {/* ================= Links ================= */}
      {project.links && (
        <div className="flex gap-3">
          {project.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              className="text-sm text-blue-600 hover:underline"
            >
              {l.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
