import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideLeftProps {
  children: React.ReactNode; // Type for children prop
}

const SlideLeft: React.FC<SlideLeftProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust visibility threshold if needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -300 }} // Start position for slide effect from the left
      animate={{ x: inView ? 0 : -300 }} // End position
      transition={{ duration: 0.7, ease: "easeIn" }} // Transition duration and easing
    >
      {children}
    </motion.div>
  );
};

export default SlideLeft;
