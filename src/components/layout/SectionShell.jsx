import { motion } from 'motion/react'

import { cn } from '../../lib/cn.js'

function SectionShell({ id, className, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={cn(
        'rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(14,165,233,0.08)] backdrop-blur sm:p-8 lg:p-10',
        className,
      )}
    >
      {children}
    </motion.section>
  )
}

export default SectionShell
