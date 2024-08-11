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
  const min = 0.5;
  const max = 0.99;
  const randomValue = Math.random() * (max - min) + min;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 300 }}
      animate={{ y: inView ? 0 : 300 }}
      transition={{ duration: randomValue, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideBot;
