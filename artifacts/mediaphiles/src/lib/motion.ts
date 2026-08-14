/** Smooth expo-out deceleration — used site-wide for a more premium, less linear feel than framer-motion's default easing. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Shared hover lift for interactive cards. */
export const cardHover = {
  y: -8,
  transition: { duration: 0.35, ease: EASE_OUT },
};
