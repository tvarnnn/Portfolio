import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-zinc-100 text-3xl font-semibold tracking-tight mb-2">
          Tristan Varner
        </h1>
        <p className="text-zinc-500 text-sm mb-4 tracking-wide uppercase">
          AI Systems · Data · ML
        </p>
        <p className="text-zinc-300 text-base leading-relaxed mb-8">
          I build systems that turn messy data into usable decisions.
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/tvarnnn"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-400 border border-zinc-700 rounded px-4 py-2 hover:text-zinc-200 hover:border-zinc-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-400 border border-zinc-700 rounded px-4 py-2 hover:text-zinc-200 hover:border-zinc-500 transition-colors"
          >
            Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section className="mb-20">
        <h2 className="text-zinc-500 text-xs uppercase tracking-widest mb-6">
          About
        </h2>
        <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
          <p>
            I build systems that turn messy data into something useful.
          </p>
          <p>
            Most of my work sits around machine learning, data pipelines, and LLMs, with a focus on making things reliable, not just interesting.
          </p>
          <p>
            I like working on problems where the data is messy and the solution still has to work.
          </p>
          <p>
            Outside of tech, I spend a lot of time cooking - I used to work as a chef.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-zinc-500 text-xs uppercase tracking-widest mb-6">
          Projects
        </h2>
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
