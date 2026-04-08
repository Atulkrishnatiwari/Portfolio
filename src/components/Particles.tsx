const particles = Array.from({ length: 12 }, (_, index) => index)

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-30 overflow-hidden">
      {particles.map((particle) => (
        <span
          key={particle}
          className="particle"
          style={{
            left: `${(particle * 11 + 8) % 100}%`,
            top: `${(particle * 17 + 12) % 100}%`,
            animationDelay: `${particle * 0.7}s`,
          }}
        />
      ))}
    </div>
  )
}
