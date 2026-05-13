import Image from "next/image";
import type { ReactElement } from "react";
import type { ContentConfig } from "@/types/content";

function SmartScreeningCard({ card }: { card: ContentConfig["hero"]["featureCards"][0] }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100 w-48">
      <p className="text-xs font-semibold text-gray-500 mb-3">{card.title}</p>
      <div className="space-y-2">
        {card.metrics?.map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: m.color + "22" }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400">{m.label}</p>
              <p className="text-xs font-bold text-gray-700">{m.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InstantReportsCard({ card }: { card: ContentConfig["hero"]["featureCards"][0] }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100 w-52">
      <p className="text-xs font-semibold text-gray-500 mb-3">{card.title}</p>
      <div className="space-y-2">
        {card.tests?.map((t) => (
          <div key={t.name}>
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[10px] text-gray-600">{t.name}</span>
              <span className={`text-[10px] font-semibold ${t.progress === 100 ? "text-[#0ea5e9]" : "text-gray-400"}`}>
                {t.status}
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div
                className="h-1.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8]"
                style={{ width: `${t.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeleconsultCard({ card }: { card: ContentConfig["hero"]["featureCards"][0] }) {
  return (
    <div className="bg-[#0d2b4e] rounded-2xl p-4 shadow-xl w-56 relative overflow-hidden">
      <p className="text-xs font-semibold text-white/70 mb-2">{card.title}</p>
      <div className="relative rounded-xl overflow-hidden h-28 bg-gray-700 mb-3">
        {card.doctorImage && (
          <Image src={card.doctorImage} alt={card.doctorName || ""} fill className="object-cover" />
        )}
        <div className="absolute top-2 left-2 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
          {card.liveLabel}
        </div>
        <div className="absolute top-2 right-2 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded">
          {card.timer}
        </div>
      </div>
      <p className="text-xs font-bold text-white">{card.doctorName}</p>
      <p className="text-[10px] text-blue-300">⭐ {card.rating} · {card.specialty}</p>
      <div className="flex justify-center gap-2 mt-2">
        {["🎤", "📹", "📞", "💬", "•••"].map((icon, i) => (
          <div key={i} className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px]
            ${i === 2 ? "bg-red-500" : "bg-white/10"}`}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

function AIHealthCard({ card }: { card: ContentConfig["hero"]["featureCards"][0] }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100 w-44">
      <p className="text-xs font-semibold text-gray-500 mb-3">{card.title}</p>
      <div className="flex items-center justify-center mb-2">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#0ea5e9" strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 40 * 0.88} ${2 * Math.PI * 40}`}
              strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-black text-[#0d2b4e]">{card.score}</span>
          </div>
        </div>
      </div>
      <p className="text-[9px] text-center text-gray-400 mb-2">{card.scoreLabel}</p>
      <div className="space-y-1">
        {card.indicators?.map((ind) => (
          <div key={ind.label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ind.color }} />
            <span className="text-[10px] text-gray-500">{ind.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function UnifiedRecordCard({ card }: { card: ContentConfig["hero"]["featureCards"][0] }) {
  const icons: Record<string, string> = {
    Tests: "🧪", AI: "🤖", Meds: "💊", Consult: "👨‍⚕️", Report: "📋"
  };
  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg border border-blue-100 w-44">
      <p className="text-xs font-semibold text-gray-500 mb-3">{card.title}</p>
      <div className="grid grid-cols-3 gap-2">
        {card.items?.map((item) => (
          <div key={item} className="flex flex-col items-center gap-1">
            <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center text-base">
              {icons[item] || "📁"}
            </div>
            <span className="text-[9px] text-gray-500 text-center">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection({ data }: { data: ContentConfig["hero"] }) {
  const cardComponents: Record<string, (card: ContentConfig["hero"]["featureCards"][0]) => ReactElement> = {
    "smart-screening": (c) => <SmartScreeningCard card={c} />,
    "instant-reports": (c) => <InstantReportsCard card={c} />,
    "teleconsultation": (c) => <TeleconsultCard card={c} />,
    "ai-health": (c) => <AIHealthCard card={c} />,
    "unified-record": (c) => <UnifiedRecordCard card={c} />,
  };

  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #c8e8f8 0%, #ddf0fb 40%, #eef7fd 70%, #f5fbff 100%)" }}>
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold text-[#0d2b4e]">
              <span className="w-2 h-2 bg-[#0ea5e9] rounded-full animate-pulse" />
              {data.badge}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black text-[#0d2b4e] leading-tight tracking-tight">
              {data.headline}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              {data.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={data.primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1565c0] hover:bg-[#0d47a1] text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-900/20 text-sm"
              >
                {data.primaryCta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={data.secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 hover:bg-white text-[#0d2b4e] font-semibold rounded-xl border border-blue-200 transition-colors text-sm"
              >
                {data.secondaryCta.label}
              </a>
            </div>

            {/* Trust */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {data.trustAvatars.map((a, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ backgroundColor: a.color }}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">{data.trustText}</p>
            </div>
          </div>

          {/* Right: Kiosk Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={data.kioskImage.src}
                alt={data.kioskImage.alt}
                width={600}
                height={700}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Feature Cards Row */}
        <div className="mt-8 lg:mt-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory lg:justify-center">
            {data.featureCards.map((card) => (
              <div key={card.id} className="flex-shrink-0 snap-start">
                {cardComponents[card.id]?.(card)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
