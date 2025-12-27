"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b z-50">
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* 왼쪽 프로필 */}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
              J
            </div>
            <div className="text-left">
              <div className="text-lg font-semibold">Jaeyeon Won</div>
              <div className="text-sm text-gray-500">
                ECE @ UT Austin · Software
              </div>
            </div>
          </button>

          {/* 🔥 프로필 카드 */}
          {open && (
            <div className="absolute mt-4 w-80 bg-white rounded-xl shadow-xl p-5">
              <div className="text-xl font-semibold mb-2">
                Jaeyeon Won
              </div>

              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <Mail size={16} />
                wonjaeyeon0524@gmail.com
              </div>

              <div className="flex items-center gap-3 text-gray-700 mb-4">
                <Phone size={16} />
                737-267-6401
              </div>

              <a
                href="/resume.pdf"
                className="text-blue-600 font-medium hover:underline"
              >
                SEE MY RESUME →
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
