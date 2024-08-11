import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlideInSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust visibility threshold if needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }} // Start position for slide effect
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }} // End position
      transition={{ duration: 0.6, ease: "easeOut" }} // Transition duration and easing
    >
      {children}
    </motion.div>
  );
};

export default SlideInSection;
