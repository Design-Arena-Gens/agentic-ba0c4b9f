const pillars = [
  {
    title: "Semantic Alignment Engine",
    description: "Normalize cross-domain knowledge with enterprise ontologies and contextual embeddings.",
    metric: "98.6%",
    metricLabel: "precision"
  },
  {
    title: "Workflow Genome Builder",
    description: "Design executable blueprints that orchestrate agentic tasks from policy to production.",
    metric: "72 hrs",
    metricLabel: "to launch"
  },
  {
    title: "Governed Memory Fabric",
    description: "Air-gapped data vault with field-level lineage, access tiers, and compliance guardrails.",
    metric: "SOC2",
    metricLabel: "Type II ready"
  }
];

export function Pillars() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-3">
      {pillars.map((pillar) => (
        <div
          key={pillar.title}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:bg-white/10"
        >
          <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/20" />
            <div className="absolute -left-10 top-10 h-20 w-20 rounded-full bg-blue-500/25 blur-3xl" />
          </div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-slate-300">{pillar.metricLabel}</span>
            </div>
            <p className="mt-3 text-sm text-slate-300/80">{pillar.description}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-emerald-200">{pillar.metric}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-100/70">validated</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
