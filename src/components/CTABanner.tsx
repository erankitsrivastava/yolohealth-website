import Image from "next/image";
import type { ContentConfig } from "@/types/content";

export default function CTABanner({ data }: { data: ContentConfig["ctaBanner"] }) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div id="demo" className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-[#1565c0] to-[#0ea5e9] rounded-3xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <div className="absolute top-1/2 -translate-y-1/2 right-8 w-72 opacity-20 lg:opacity-30">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={400}
                height={400}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16 max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              {data.headline}
            </h2>
            <p className="text-blue-100 mb-8 text-base">{data.subtext}</p>
            <a
              href={data.cta.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1565c0] font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm"
            >
              {data.cta.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
