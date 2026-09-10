"use client";

import { motion } from "framer-motion";
import { Pinyon_Script } from "next/font/google";

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function HandwrittenLogo() {
  return (
    <div className="flex justify-center">
      <motion.h1
        className={`${pinyon.className} text-7xl md:text-9xl text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]`}
        initial={{
          opacity: 0,
          scale: 0.9,
          filter: "blur(8px)",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
        }}
      >
        Brunch out of Seven
      </motion.h1>
    </div>
  );
}