import { socialLinks } from "../data/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm text-slate-400">© 2026 Atul Kumar Tiwari. All rights reserved.</p>
          <p className="text-xs text-slate-500">Crafted with React, Vite, Tailwind, and Motion.</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative transition hover:text-white after:absolute after:left-0 after:top-full after:h-px after:w-0 after:bg-gradient-to-r after:from-sky-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
