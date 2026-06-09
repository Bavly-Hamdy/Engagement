import { Music } from "lucide-react";
import { motion } from "motion/react";

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-5 backdrop-blur-md bg-brand-bg/80 p-2 pr-5 shadow-lg border border-brand-border/40 rounded-full"
    >
      <div className="text-right hidden sm:block pl-3">
        <div className="text-[9px] uppercase tracking-widest font-sans font-bold text-brand-secondary mb-1">Now Playing</div>
        <div className="text-xs italic font-arabic text-brand-primary font-bold">الليل وسماه</div>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
        className="w-12 h-12 rounded-full border border-brand-primary flex items-center justify-center relative bg-brand-bg/50 hover:bg-brand-border/30 transition-colors text-brand-primary outline-none cursor-pointer shadow-sm"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <div className="w-6 h-6 flex items-center justify-center relative gap-1">
             <div className="w-[2px] h-3 bg-brand-primary animate-pulse"></div>
             <div className="w-[2px] h-5 bg-brand-primary animate-pulse [animation-delay:0.2s]"></div>
             <div className="w-[2px] h-4 bg-brand-primary animate-pulse [animation-delay:0.4s]"></div>
          </div>
        ) : (
          <Music size={18} strokeWidth={1.5} />
        )}
      </motion.button>
    </motion.div>
  );
}
