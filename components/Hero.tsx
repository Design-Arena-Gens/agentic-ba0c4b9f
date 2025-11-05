import { IntelligenceCanvas } from "./IntelligenceCanvas";
import { LogosTicker } from "./LogosTicker";
import { Pillars } from "./Pillars";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-20 sm:pb-28 sm:pt-28">
      <div className="absolute inset-0 -z-10 grid-mask opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-blue-600/20 via-blue-500/5 to-transparent blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 md:flex-row md:items-center md:gap-20">
        <div className="relative flex-1">
          <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200 shadow-glow-sm">
            Workflow Intelligence Fabric
            <span className="h-1 w-1 rounded-full bg-emerald-300" />
            Live
          </div>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Convert proprietary knowledge into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              orchestrated AI workflows
            </span>{" "}
            trusted by the enterprise.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200/80 sm:text-xl">
            Synthesis Orbit harmonizes fragmented documents, systems, and conversations into a single intelligence
            layer—fueling autonomous agents and multimodal copilots that understand your business context from day one.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-400 px-8 py-3 text-sm font-semibold text-slate-900 shadow-glow-sm transition hover:shadow-glow-lg"
            >
              Launch a Private Pilot
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/10">
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                  <path d="M3.5 8h9m0 0L8 3.5M12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
            >
              Explore Data Vault
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs">↗</span>
            </a>
          </div>
          <Pillars />
        </div>
        <div className="relative flex-1">
          <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-sky-500/40 blur-3xl" />
          <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-emerald-400/30 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-black/40 p-3 shadow-glow-lg backdrop-blur-3xl">
            <div className="gradient-border absolute inset-0 -z-10 rounded-3xl" />
            <IntelligenceCanvas />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <LogosTicker />
      </div>
    </section>
  );
}
