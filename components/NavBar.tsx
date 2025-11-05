import Link from "next/link";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Playbooks", href: "#playbooks" },
  { label: "Security", href: "#security" },
  { label: "Insights", href: "#insights" }
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-base font-medium tracking-tight text-sky-100">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 via-sky-400 to-emerald-400 shadow-glow-sm">
            <span className="absolute h-16 w-16 animate-spin-slow rounded-full border border-white/20" />
            <span className="text-[0.75rem] font-semibold text-white">SO</span>
          </span>
          Synthesis Orbit
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-white/90">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:text-white md:inline-flex"
          >
            View Blueprint
          </a>
          <a
            href="#"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-glow-sm transition hover:shadow-glow-lg"
          >
            Schedule Immersion
            <span className="absolute inset-0 animate-pulse-fast bg-gradient-to-r from-white/40 via-transparent to-white/40 opacity-0 hover:opacity-40" />
          </a>
        </div>
      </div>
    </header>
  );
}
