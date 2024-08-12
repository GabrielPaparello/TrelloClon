import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideBotProps {
  children: React.ReactNode;
}

const SlideBot: React.FC<SlideBotProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // FOR ANIMATING RANDOMNLY BEETWEEN RANGES
  const MIN_TIMING_ANIMATION_RANGE = 0.5;
  const MAX_TIMING_ANIMATION_RANGE = 0.99;
  const RANDOM_TIMING =
    Math.random() * (MAX_TIMING_ANIMATION_RANGE - MIN_TIMING_ANIMATION_RANGE) +
    MIN_TIMING_ANIMATION_RANGE;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: RANDOM_TIMING, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideBot;
