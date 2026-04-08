import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-ink-300 via-ink-500 to-ink-700"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
