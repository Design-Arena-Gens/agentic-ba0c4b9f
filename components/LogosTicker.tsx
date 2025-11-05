const marqueeItems = [
  { name: "Helios Systems", caption: "Global Manufacturing" },
  { name: "Atlas Cloud", caption: "Hybrid Infrastructure" },
  { name: "Nova Bank", caption: "Regulated Finance" },
  { name: "Aurelia Bio", caption: "Life Sciences" },
  { name: "Vanguard Energy", caption: "Industrial Ops" }
];

export function LogosTicker() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/40 shadow-glow-sm backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-[#030712]" />
      <div className="flex animate-marquee gap-16 whitespace-nowrap py-6 text-sm font-medium uppercase tracking-[0.6em] text-slate-300/80">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex items-center gap-4 px-8">
            <span className="text-xs text-sky-200/70">◦</span>
            <div className="flex flex-col items-start">
              <span>{item.name}</span>
              <span className="mt-1 text-[0.6rem] tracking-[0.3em] text-slate-500 uppercase">{item.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
