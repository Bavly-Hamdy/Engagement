import { motion } from "motion/react";

import Sparkles from "./Sparkles";

interface CoverProps {
  onOpen: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const } },
};

const cornerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 0.95, scale: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Cover({ onOpen }: CoverProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden font-serif bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "linear-gradient(rgba(252, 249, 245, 0.60), rgba(252, 249, 245, 0.60)), url('/rings.png')" }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <motion.div variants={cornerVariants} initial="hidden" animate="visible" className="absolute top-0 right-0 w-64 h-64 border-r-[3px] border-t-[3px] border-brand-border m-8 z-10 origin-top-right"></motion.div>
      <motion.div variants={cornerVariants} initial="hidden" animate="visible" className="absolute bottom-0 left-0 w-64 h-64 border-l-[3px] border-b-[3px] border-brand-border m-8 z-10 origin-bottom-left"></motion.div>
      
      <div className="relative flex flex-col items-center justify-center p-8 max-w-md mx-4 text-center z-10 w-full h-full">
        <motion.div 
          className="flex flex-col items-center relative w-full justify-center flex-grow"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className="absolute text-[120px] sm:text-[180px] font-sans font-black text-brand-faint -z-10 opacity-80 uppercase tracking-tighter pointer-events-none select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">INVITE</motion.span>

          <motion.h2 variants={itemVariants} className="font-arabic text-lg sm:text-xl text-brand-primary mb-8 font-extrabold tracking-[0.2em] uppercase">
            دعوة خطوبة
          </motion.h2>
          
          <motion.div variants={itemVariants} className="relative z-10 w-full">
            <Sparkles count={15} />
            <h1 className="text-7xl sm:text-9xl font-bold leading-none text-brand-primary relative z-10">
              Rashad <br/>
              <span className="text-5xl font-serif italic font-normal text-brand-accent block my-4">&</span>
              Esraa
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="font-sans text-xs text-brand-secondary font-bold tracking-[0.3em] uppercase mt-12 mb-12">
            25 September 2026
          </motion.p>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="px-10 py-4 bg-brand-primary text-brand-bg text-[11px] uppercase tracking-[0.3em] font-sans hover:bg-brand-accent transition-colors z-20 shadow-none border-none outline-none cursor-pointer"
          >
            افتح الدعوة
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
