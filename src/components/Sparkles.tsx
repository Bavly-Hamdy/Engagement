import { motion } from "motion/react";
import { useEffect, useState } from "react";

const random = (min: number, max: number) => Math.random() * (max - min) + min;

interface SparkleProps {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Sparkle = ({ color = "var(--color-brand-accent)", size = 20, style }: SparkleProps) => {
  return (
    <motion.div
      style={style}
      className="absolute pointer-events-none z-0"
      initial={{ scale: 0, opacity: 0, rotate: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 90, 180],
      }}
      transition={{
        duration: random(1.5, 3.5),
        repeat: Infinity,
        ease: "easeInOut",
        delay: random(0, 2),
      }}
    >
      <svg width={size} height={size} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 0C80 0 84.2846 41.2925 101.434 58.5661C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.434 101.434C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.5661 101.434C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.5661 58.5661C75.7154 41.2925 80 0 80 0Z" fill={color}/>
      </svg>
    </motion.div>
  );
};

export default function Sparkles({ count = 12 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; size: number; color: string }[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: `${random(5, 95)}%`,
        left: `${random(5, 95)}%`,
        size: random(10, 28),
        color: Math.random() > 0.5 ? "var(--color-brand-accent)" : "var(--color-brand-border)",
      }));
    };
    setSparkles(generateSparkles());
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={{ top: sparkle.top, left: sparkle.left }}
        />
      ))}
    </div>
  );
}
