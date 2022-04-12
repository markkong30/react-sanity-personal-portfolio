export const slideIn = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { duration: 1 } },
  exit: { x: "100%", transition: { duration: 1 } },
};

export const heroBubble = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const badgeSlide = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.5, staggerChildren: 0.15 } },
};
