import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideInProps {
  children: React.ReactNode;
}

const SlideBotWopacity: React.FC<SlideInProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideBotWopacity;
