"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export default function AnimateOnScroll({ children }: { children: ReactNode }) {
  const visibleVariant: Variants = {
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    },
    hidden: { 
      opacity: 0, 
      y: 40 
    },
  };

  return (
    <motion.div
      className="w-full flex justify-center" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} 
      variants={visibleVariant}
    >
      {children}
    </motion.div>
  );
}