import Image from "next/image";
import type { ContentConfig } from "@/types/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection({ data }: { data: ContentConfig["testimonials"] }) {
  return (
    <section className="py-20" style={{ background: "linear-gradient(180deg, #f0f8ff 0%, #ffffff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">{data.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0d2b4e] mt-2 mb-4">{data.headline}</h2>
          <p className="text-gray-500 max-w-xl mx-auto">{data.subtext}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.items.map((item) => (
            <div key={item.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <StarRating rating={item.rating} />
              <p className="text-sm text-gray-600 leading-relaxed mt-4 flex-1">"{item.text}"</p>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0d2b4e]">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.role}, {item.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
