import type { ReactElement } from "react";
import type { ContentConfig } from "@/types/content";

const socialIcons: Record<string, ReactElement> = {
  twitter: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  facebook: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

export default function Footer({ data }: { data: ContentConfig["footer"] }) {
  return (
    <footer className="bg-[#0d2b4e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-1 mb-3">
              <span className="text-2xl font-black text-white tracking-tight">yolo</span>
              <span className="text-2xl font-black text-[#38bdf8] tracking-tight">health</span>
              <span className="text-[#38bdf8] font-bold text-lg">®</span>
            </div>
            <p className="text-xs text-blue-200 mb-4">{data.logo.tagline}</p>
            <p className="text-sm text-blue-200/70 leading-relaxed mb-5">{data.description}</p>
            <div className="flex gap-3">
              {data.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-blue-200 hover:text-white transition-colors"
                >
                  {socialIcons[social.platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {data.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold text-blue-200 tracking-widest uppercase mb-4">{col.heading}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-sm text-blue-200/70 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-200/50">{data.copyright}</p>
          <div className="flex items-center gap-1 text-xs text-blue-200/50">
            <span>Made with</span>
            <span className="text-red-400">♥</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
