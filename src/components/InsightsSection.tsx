import Image from "next/image";
import type { ContentConfig } from "@/types/content";

export default function InsightsSection({ data }: { data: ContentConfig["insights"] }) {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs font-bold text-[#0ea5e9] tracking-widest uppercase">{data.sectionLabel}</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d2b4e] mt-2">{data.headline}</h2>
          </div>
          <a href="#blog"
            className="text-sm font-semibold text-[#1565c0] hover:text-[#0d47a1] flex items-center gap-1 transition-colors">
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.articles.map((article) => (
            <a key={article.title} href={article.href}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#1565c0] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0d2b4e] text-sm leading-snug mb-2 group-hover:text-[#1565c0] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
