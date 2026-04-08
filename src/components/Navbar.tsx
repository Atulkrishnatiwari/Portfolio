import { navLinks } from "../data/portfolio"

type NavbarProps = {
  theme: "dark" | "light"
  onToggleTheme: () => void
}
export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0d16]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-semibold text-slate-100">
          devfolio
        </a>
        <nav className="mx-4 flex flex-1 items-center gap-4 overflow-x-auto text-xs text-slate-300 md:mx-10 md:gap-6 md:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white transition hover:border-white/30"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  )
}
