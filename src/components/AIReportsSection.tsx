import Image from "next/image";
import type { ReactElement } from "react";
import type { ContentConfig } from "@/types/content";

const featureIcons: Record<string, ReactElement> = {
  "shield-check": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  "user-check": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  clipboard: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

export default function AIReportsSection({ data }: { data: ContentConfig["aiReports"] }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-50 rounded-[40px] blur-2xl scale-90 opacity-60" />
              <div className="relative bg-[#0d2b4e] rounded-[36px] p-2 shadow-2xl w-64 mx-auto">
                <div className="bg-white rounded-[30px] overflow-hidden h-[460px] relative">
                  <Image
                    src={data.phoneImage.src}
                    alt={data.phoneImage.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* Overlay UI */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d2b4e]/80 flex flex-col justify-end p-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <p className="text-white text-xs font-semibold">Health Intelligence • YoloHealth AI</p>
                      <div className="mt-2 space-y-1.5">
                        {["Blood Glucose", "Thyroid", "Blood Pressure"].map((t) => (
                          <div key={t} className="flex justify-between items-center">
                            <span className="text-white/70 text-[10px]">{t}</span>
                            <span className="text-green-400 text-[10px] font-semibold">Normal</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">{data.sectionLabel}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d2b4e] leading-tight">{data.headline}</h2>
            <p className="text-gray-500 leading-relaxed">{data.subtext}</p>

            <div className="space-y-4">
              {data.features.map((feature) => (
                <div key={feature.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-[#1565c0]">
                    {featureIcons[feature.icon]}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0d2b4e] text-sm">{feature.title}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Store buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={data.appLinks.googlePlay.href}
                className="flex items-center gap-2 bg-[#0d2b4e] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1a3d6b] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.35.2.74.24 1.12.13l10.73-6.2-2.29-2.29-9.56 8.36zM20.46 10.5l-2.87-1.66-2.57 2.57 2.57 2.57 2.9-1.67c.83-.48.83-1.33-.03-1.81zM2.06.28C1.74.62 1.56 1.15 1.56 1.85v20.3c0 .7.18 1.22.5 1.57l.09.08 11.37-11.37v-.27L2.15.2l-.09.08zM14.91 8.06l-2.85-2.85L1.56.28l9.56 8.35 3.79-2.57z"/>
                </svg>
                Google Play
              </a>
              <a href={data.appLinks.appStore.href}
                className="flex items-center gap-2 bg-[#0d2b4e] text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#1a3d6b] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.02 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.84M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
