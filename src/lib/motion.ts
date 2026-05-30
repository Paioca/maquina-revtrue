import type { Variants } from "framer-motion";

/** Eases reused across the site (Linear/Vercel feel — slight overshoot in/out). */
export const ease = [0.16, 1, 0.3, 1] as const;

/** Fade in + translate up. Default entrance for any block. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

/** Stagger container — children animate in sequence. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Scale-in for cards/CTAs. */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

/** Use as `whileInView={... }` props on any motion.div. */
export const inViewProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
} as const;
