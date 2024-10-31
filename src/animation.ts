export const pageAnim = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const recipeAnim = {
  hidden: {
    scale: 0.5,
  },
  show: {
    scale: 1,
    transition: { duration: 1 },
  },
};
