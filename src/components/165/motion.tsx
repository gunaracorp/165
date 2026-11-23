'use client'

// 165 — MOTION SYSTEM
// Shared animation primitives built on Framer Motion.
// Doctrine: institutional dignity — everything moves gently, nothing bounces.
// Every primitive honours `prefers-reduced-motion` via useReducedMotion().
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type Variants,
} from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

// institutional easing — fast departure, soft landing
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

// ---------- MotionConfig root: global reduced-motion respect ----------
export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

// ---------- Reveal — scroll-triggered fade + rise ----------
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  once = true,
  ...rest
}: Omit<HTMLMotionProps<'div'>, 'children' | 'className'> & {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-48px' }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

// ---------- Stagger — orchestrated list/grid entrances ----------
const STAGGER_CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
}

const STAGGER_ITEM: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

export function Stagger({
  children,
  className,
  as = 'div',
  once = true,
  ...rest
}: Omit<HTMLMotionProps<'div'>, 'children' | 'className'> & {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul'
  once?: boolean
}) {
  const reduce = useReducedMotion()
  // ul/div share the motion API; div-typed props are a safe superset here
  const Comp = (as === 'ul' ? motion.ul : motion.div) as typeof motion.div
  return (
    <Comp
      className={className}
      variants={STAGGER_CONTAINER}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'show'}
      viewport={{ once, margin: '-48px' }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export function StaggerItem({
  children,
  className,
  as = 'div',
  ...rest
}: Omit<HTMLMotionProps<'div'>, 'children' | 'className'> & {
  children: ReactNode
  className?: string
  as?: 'div' | 'li'
}) {
  const Comp = (as === 'li' ? motion.li : motion.div) as typeof motion.div
  return (
    <Comp className={className} variants={STAGGER_ITEM} {...rest}>
      {children}
    </Comp>
  )
}

// ---------- Hero entrance — one-time orchestration on mount ----------
export const HERO_CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

export const HERO_ITEM: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export function HeroMotion({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={HERO_CONTAINER}
      initial={reduce ? false : 'hidden'}
      animate={reduce ? undefined : 'show'}
    >
      {children}
    </motion.div>
  )
}

export function HeroItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={HERO_ITEM}>
      {children}
    </motion.div>
  )
}

// ---------- AnimatedNumber — counts up the first time it enters view ----------
export function AnimatedNumber({
  value,
  duration = 1.3,
  className,
}: {
  value: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-32px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000))
      const eased = 1 - Math.pow(1 - p, 3) // cubic ease-out
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration, reduce])

  // reduced motion → no counter theatre, the number simply is
  if (reduce) return <span className={className}>{value}</span>
  return (
    <span ref={ref} className={className}>
      {inView ? display : 0}
    </span>
  )
}

// ---------- PageFade — section-to-section transition (AnimatePresence child) ----------
export function PageFade({
  transitionKey,
  children,
  className,
}: {
  transitionKey: string
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      key={transitionKey}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.26, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ---------- MenuCollapse — animated mount/unmount wrapper ----------
export function MenuCollapse({
  open,
  children,
  className,
}: {
  open: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          className={cn('overflow-hidden', className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ---------- DrawRule — self-drawing hairline; section punctuation in brass ----------
export function DrawRule({
  className,
  delay = 0,
  width,
  origin = 'left',
}: {
  className?: string
  delay?: number
  width?: string
  origin?: 'left' | 'center'
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      aria-hidden
      className={cn('h-[2px] origin-left', className)}
      style={{
        width: width ?? '76px',
        background: 'linear-gradient(90deg, var(--khidr), color-mix(in srgb, var(--brass) 65%, transparent) 55%, transparent)',
        ...(origin === 'center' ? { marginLeft: 'auto', marginRight: 'auto', transformOrigin: 'center' } : {}),
      }}
      initial={reduce ? false : { scaleX: 0, opacity: 0 }}
      whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    />
  )
}

// ---------- Lift — institutional hover elevation (no bounce, soft spring) ----------
export function Lift({
  children,
  className,
  amount = 4,
}: {
  children: ReactNode
  className?: string
  amount?: number
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -amount }}
      whileTap={reduce ? undefined : { y: -1 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
    >
      {children}
    </motion.div>
  )
}

// ---------- FloatOrnament — slow-turning eight-point star (rubʿ al-hizb geometry)
// that drifts gently against the scroll. Pure ornament: aria-hidden, pointer-
// events none, honours reduced motion by standing perfectly still. ----------
export function FloatOrnament({
  className,
  size = 320,
  drift = -60,
}: {
  className?: string
  size?: number
  drift?: number
}) {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, drift])
  return (
    <motion.div
      aria-hidden
      className={cn('pointer-events-none absolute', className)}
      style={reduce ? undefined : { y }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 260, repeat: Infinity, ease: 'linear' }}
      >
        {/* two overlapping squares — the eight-point star of Islamic geometry */}
        <rect x="21" y="21" width="58" height="58" stroke="currentColor" strokeWidth="0.5" />
        <rect x="21" y="21" width="58" height="58" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.35" />
        <circle cx="50" cy="50" r="33" stroke="currentColor" strokeWidth="0.25" strokeDasharray="1 2.2" />
      </motion.svg>
    </motion.div>
  )
}

export { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
