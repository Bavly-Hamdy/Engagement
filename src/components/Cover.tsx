import { motion } from "motion/react";
import Sparkles from "./Sparkles";
import ringsBg from "../assets/rings.png";
import type { Key } from "react";

interface CoverProps {
  key?: Key;
  onOpen: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } },
};

const cornerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 0.95, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden font-serif bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(rgba(252, 249, 245, 0.62), rgba(252, 249, 245, 0.62)), url('${ringsBg}')` }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
    >
      {/* Responsive Decorative Corners */}
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-r-2 sm:border-r-[3px] border-t-2 sm:border-t-[3px] border-brand-border m-3 sm:m-6 md:m-8 z-10 origin-top-right pointer-events-none"
      />
      <motion.div
        variants={cornerVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 left-0 w-16 h-16 sm:w-32 sm:h-32 md:w-56 md:h-56 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-brand-border m-3 sm:m-6 md:m-8 z-10 origin-bottom-left pointer-events-none"
      />
      
      <div className="relative flex flex-col items-center justify-center px-4 py-8 sm:p-8 max-w-lg mx-auto text-center z-10 w-full h-full">
        <motion.div 
          className="flex flex-col items-center relative w-full justify-center my-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Watermark */}
          <motion.span
            variants={itemVariants}
            className="absolute text-7xl sm:text-9xl md:text-[160px] font-sans font-black text-brand-faint -z-10 opacity-70 uppercase tracking-tighter pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none"
          >
            INVITE
          </motion.span>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="font-arabic text-base sm:text-xl text-brand-primary mb-4 sm:mb-6 font-extrabold tracking-[0.2em] uppercase"
          >
            دعوة خطوبة
          </motion.h2>
          
          {/* Main Names */}
          <motion.div variants={itemVariants} className="relative z-10 w-full py-2">
            <Sparkles count={15} />
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.08] text-brand-primary relative z-10 tracking-tight">
              Ameena
              <span className="text-3xl sm:text-5xl font-serif italic font-normal text-brand-accent block my-2 sm:my-3">
                &
              </span>
              Narmidhil
            </h1>
          </motion.div>

          {/* Date Tag */}
          <motion.p
            variants={itemVariants}
            dir="ltr"
            style={{ direction: "ltr", unicodeBidi: "isolate" }}
            className="font-sans text-[11px] sm:text-xs text-brand-secondary font-bold tracking-[0.3em] uppercase mt-6 sm:mt-10 mb-8 sm:mb-10 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-xs border border-brand-border/40"
          >
            25 September 2026
          </motion.p>
          
          {/* Call to action button */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOpen}
            className="px-8 sm:px-12 py-3.5 sm:py-4 bg-brand-primary text-brand-bg text-[11px] sm:text-xs uppercase tracking-[0.3em] font-sans font-bold hover:bg-brand-accent transition-all duration-300 z-20 rounded-full shadow-lg hover:shadow-xl cursor-pointer border-none outline-none"
          >
            افتح الدعوة
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
