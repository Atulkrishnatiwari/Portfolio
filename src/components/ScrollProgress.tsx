import { motion, useScroll } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-sky-400 via-ink-500 to-purple-500 shadow-[0_0_20px_rgba(99,179,237,0.6)]"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
