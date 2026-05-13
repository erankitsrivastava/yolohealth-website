"use client";
import { useState } from "react";
import type { ContentConfig } from "@/types/content";

export default function FAQSection({ data }: { data: ContentConfig["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #f0f8ff 0%, #e8f4fd 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <span className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">{data.sectionLabel}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d2b4e] mt-2 mb-4">{data.headline}</h2>
            <p className="text-gray-500 mb-8">{data.subtext}</p>
            <p className="text-sm text-gray-600 mb-3">{data.ctaText}</p>
            <a href={data.cta.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1565c0] hover:bg-[#0d47a1] text-white font-semibold rounded-xl transition-colors text-sm">
              {data.cta.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {data.items.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border transition-all ${
                  openIndex === i ? "border-blue-200 shadow-sm" : "border-gray-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className={`text-sm font-semibold pr-4 ${openIndex === i ? "text-[#1565c0]" : "text-[#0d2b4e]"}`}>
                    {item.question}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    openIndex === i ? "bg-[#1565c0] rotate-45" : "bg-gray-100"
                  }`}>
                    <svg className={`w-3 h-3 ${openIndex === i ? "text-white" : "text-gray-500"}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-500 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
