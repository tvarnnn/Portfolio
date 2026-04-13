import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-zinc-100 text-sm font-medium tracking-wide hover:text-white transition-colors">
        TV
      </Link>
      <div className="flex items-center gap-6 text-sm text-zinc-400">
        {isHome ? (
          <>
            <a href="#projects" className="hover:text-zinc-200 transition-colors">Projects</a>
          </>
        ) : (
          <Link to="/" className="hover:text-zinc-200 transition-colors">← Home</Link>
        )}
        <a
          href="https://github.com/tvarnnn"
          target="_blank"
          rel="noreferrer"
          className="hover:text-zinc-200 transition-colors"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
