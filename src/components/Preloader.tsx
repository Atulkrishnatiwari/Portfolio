import { motion } from "framer-motion"

export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-[#020617]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="h-14 w-14 rounded-full border border-ink-400/30 border-t-ink-400"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
      />
      <motion.p
        className="mt-6 text-sm uppercase tracking-[0.4em] text-slate-400"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  )
}
