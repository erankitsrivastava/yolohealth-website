import Image from "next/image";
import type { ContentConfig } from "@/types/content";

export default function PartnersSection({ data }: { data: ContentConfig["partners"] }) {
  return (
    <section id="partners" className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">
          {data.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {data.logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
