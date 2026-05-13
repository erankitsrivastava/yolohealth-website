import Image from "next/image";
import type { ContentConfig } from "@/types/content";

export default function SetupSection({ data }: { data: ContentConfig["setup"] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">{data.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d2b4e] mt-2 mb-4">{data.headline}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{data.subtext}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.options.map((option) => (
            <div key={option.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={option.image.src}
                  alt={option.image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b4e]/60 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-white font-bold text-base">{option.title}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{option.description}</p>
                <a href={option.cta.href}
                  className="inline-flex items-center gap-1.5 text-[#1565c0] font-semibold text-sm hover:gap-2.5 transition-all">
                  {option.cta.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
