import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-zinc-800 rounded p-5 hover:border-zinc-700 transition-colors">
      <h3 className="text-zinc-100 text-base font-medium mb-3">{project.title}</h3>
      <ul className="space-y-1 mb-4">
        {project.bullets.map((bullet, i) => (
          <li key={i} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
            <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 pt-1">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-zinc-400 border border-zinc-700 rounded px-3 py-1.5 hover:text-zinc-200 hover:border-zinc-500 transition-colors"
        >
          GitHub
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-zinc-400 border border-zinc-700 rounded px-3 py-1.5 hover:text-zinc-200 hover:border-zinc-500 transition-colors"
          >
            Live Demo
          </a>
        )}
        <Link
          to={`/projects/${project.id}`}
          className="text-xs text-zinc-400 border border-zinc-700 rounded px-3 py-1.5 hover:text-zinc-200 hover:border-zinc-500 transition-colors"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
