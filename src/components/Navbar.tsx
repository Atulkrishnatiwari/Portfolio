import { useEffect, useState } from "react"
import { navLinks } from "../data/portfolio"

type NavbarProps = {
  theme: "dark" | "light"
  onToggleTheme: () => void
}
export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition duration-300 ${
        scrolled
          ? "border-white/10 bg-[#050914]/70 shadow-[0_12px_40px_rgba(2,6,23,0.35)]"
          : "border-white/5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-gradient text-lg font-semibold">
          devfolio
        </a>
        <nav className="mx-4 flex flex-1 items-center gap-4 overflow-x-auto text-xs text-slate-300 md:mx-10 md:gap-6 md:text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition hover:text-white after:absolute after:left-0 after:top-full after:h-px after:w-0 after:bg-gradient-to-r after:from-sky-400 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="glass-card rounded-full px-4 py-2 text-sm font-medium text-white"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="glass-card rounded-full px-3 py-2 text-xs text-white"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  )
}
