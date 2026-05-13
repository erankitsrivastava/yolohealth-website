import type { ContentConfig } from "@/types/content";

export default function ImpactSection({ data }: { data: ContentConfig["impact"] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">{data.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d2b4e] mt-2 mb-4">{data.headline}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{data.subtext}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {data.stats.map((stat) => (
            <div
              key={stat.value}
              className={`rounded-2xl p-8 text-center transition-all ${
                stat.highlighted
                  ? "bg-gradient-to-br from-[#1565c0] to-[#0ea5e9] text-white shadow-xl shadow-blue-500/30"
                  : "bg-gray-50 border border-gray-100"
              }`}
            >
              <div className={`text-4xl sm:text-5xl font-black mb-2 ${stat.highlighted ? "text-white" : "text-[#0d2b4e]"}`}>
                {stat.value}
              </div>
              <div className={`text-sm font-semibold mb-1 ${stat.highlighted ? "text-white" : "text-gray-700"}`}>
                {stat.label}
              </div>
              <div className={`text-xs ${stat.highlighted ? "text-blue-100" : "text-gray-400"}`}>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
