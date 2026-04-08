import { socialLinks } from "../data/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-slate-400">© 2026 Atul Kumar Tiwari. All rights reserved.</p>
          <p className="text-xs text-slate-500">Crafted with React, Vite, Tailwind, and Motion.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
