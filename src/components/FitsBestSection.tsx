import Image from "next/image";
import type { ContentConfig } from "@/types/content";

export default function FitsBestSection({ data }: { data: ContentConfig["fitsBest"] }) {
  const [featured, ...rest] = data.useCases;

  return (
    <section id="about" className="py-20" style={{ background: "linear-gradient(180deg, #f0f8ff 0%, #e8f4fd 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">{data.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d2b4e] mt-2 mb-4">{data.headline}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{data.subtext}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Featured large card */}
          {featured && (
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-72 sm:h-80 group">
              <Image
                src={featured.image.src}
                alt={featured.image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b4e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {featured.label}
                </span>
                <p className="text-white font-bold text-lg">{featured.description}</p>
              </div>
            </div>
          )}

          {/* Right column */}
          <div className="space-y-4">
            {rest.map((useCase) => (
              <div key={useCase.label} className="relative rounded-2xl overflow-hidden h-[calc(33%-8px)] min-h-[100px] group" style={{ height: `${(80 - (rest.length - 1) * 4) / rest.length}px`, minHeight: '90px' }}>
                <div className="relative rounded-2xl overflow-hidden h-24 group">
                  <Image
                    src={useCase.image.src}
                    alt={useCase.image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b4e]/70 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-center px-4">
                    <span className="text-white font-bold text-sm">{useCase.label}</span>
                    <span className="text-white/70 text-xs">{useCase.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href={data.cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1565c0] hover:bg-[#0d47a1] text-white font-semibold rounded-xl transition-colors text-sm">
            {data.cta.label}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
