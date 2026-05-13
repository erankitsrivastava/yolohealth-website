"use client";
import { useState } from "react";
import type { ContentConfig } from "@/types/content";

export default function Navbar({ data }: { data: ContentConfig["navbar"] }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black text-[#0d2b4e] tracking-tight">yolo</span>
              <span className="text-2xl font-black text-[#0ea5e9] tracking-tight">health</span>
              <span className="text-[#0ea5e9] font-bold text-lg">®</span>
            </div>
            <div className="hidden sm:block border-l border-gray-300 pl-2 ml-1">
              <p className="text-[10px] text-gray-500 leading-tight">Healthcare</p>
              <p className="text-[10px] text-gray-500 leading-tight">Reimagined</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {data.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-[#0d2b4e] hover:bg-blue-50 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={data.cta.href}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-[#0d2b4e] hover:bg-[#1a3d6b] rounded-lg transition-colors"
            >
              {data.cta.label}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
          {data.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#0d2b4e] hover:bg-blue-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 pb-1">
            <a
              href={data.cta.href}
              className="block text-center px-4 py-2 text-sm font-semibold text-white bg-[#0d2b4e] hover:bg-[#1a3d6b] rounded-lg"
            >
              {data.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
