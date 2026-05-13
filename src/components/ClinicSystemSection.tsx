import Image from "next/image";
import type { ContentConfig } from "@/types/content";

export default function ClinicSystemSection({ data }: { data: ContentConfig["clinicSystem"] }) {
  return (
    <section id="healthcare" className="py-20" style={{ background: "linear-gradient(180deg, #f0f8ff 0%, #e8f4fd 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">{data.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d2b4e] mt-2 mb-4">{data.headline}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{data.subtext}</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Dashboard image */}
            <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px]">
              <Image
                src={data.dashboardImage.src}
                alt={data.dashboardImage.alt}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 lg:to-white" />
            </div>

            {/* Features */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <ul className="space-y-4">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0ea5e9] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#0d2b4e] font-medium text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#demo"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1565c0] hover:bg-[#0d47a1] text-white font-semibold rounded-xl transition-colors text-sm">
                  Request a Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
