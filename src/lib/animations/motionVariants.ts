import { Variants } from "framer-motion";

/**
 * Container variant with staggered child orchestration
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger variant with slightly longer delays for rich hero reveals
 */
export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

/**
 * Fade up transition variant for typography & buttons
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // easeOutCubic/Quart
    },
  },
};

/**
 * Fade in scale for visual cards and automotive showcases
 */
export const fadeInScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Anti-gravity / floating hover variant
 * Simulates weightless luxury motion
 */
export const antiGravityFloat: Variants = {
  animate: {
    y: [-8, 8, -8],
    rotate: [-0.5, 0.5, -0.5],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Background glow pulse animation
 */
export const ambientGlow: Variants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.35, 0.65, 0.35],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/**
 * Interactive card hover effect
 */
export const luxuryHoverCard = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    y: -6,
    scale: 1.02,
    boxShadow: "0 20px 40px -12px rgba(0, 240, 255, 0.25)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};
