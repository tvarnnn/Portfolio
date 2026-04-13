import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="max-w-2xl mx-auto px-6 py-16">
        <p className="text-zinc-500">Project not found.</p>
        <Link to="/" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors mt-4 block">
          ← Back
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10 block"
      >
        ← All projects
      </Link>

      <h1 className="text-zinc-100 text-2xl font-semibold tracking-tight mb-6">
        {project.title}
      </h1>

      <Section label="Overview">
        <p className="text-zinc-400 text-sm leading-relaxed">{project.overview}</p>
      </Section>

      <Section label="Problem">
        <p className="text-zinc-400 text-sm leading-relaxed">{project.problem}</p>
      </Section>

      <Section label="Approach">
        <p className="text-zinc-400 text-sm leading-relaxed">{project.approach}</p>
      </Section>

      <Section label="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-zinc-400 border border-zinc-700 rounded px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {project.screenshots && project.screenshots.length > 0 && (
        <Section label="Screenshots">
          <div className="flex flex-col gap-4">
            {project.screenshots.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                className="rounded border border-zinc-800 w-full"
              />
            ))}
          </div>
        </Section>
      )}

      {project.video && (
        <Section label="Demo">
          <div className="aspect-video rounded border border-zinc-800 overflow-hidden">
            <iframe
              src={project.video}
              title={`${project.title} demo`}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </Section>
      )}

      <div className="pt-4 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-zinc-400 border border-zinc-700 rounded px-4 py-2 hover:text-zinc-200 hover:border-zinc-500 transition-colors inline-block"
        >
          View on GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-400 border border-zinc-700 rounded px-4 py-2 hover:text-zinc-200 hover:border-zinc-500 transition-colors inline-block"
          >
            Live Demo
          </a>
        )}
      </div>
    </main>
  );
}

function Section({ label, children }) {
  return (
    <div className="mb-8">
      <p className="text-zinc-600 text-xs uppercase tracking-widest mb-3">{label}</p>
      {children}
    </div>
  );
}
