import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Sparkles } from "lucide-react";

type HoverButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export function HoverButton({ children, className }: HoverButtonProps) {
  const buttonMouseX = useMotionValue(0);
  const buttonMouseY = useMotionValue(0);
  const buttonMouseRadius = useMotionValue(0);

  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    buttonMouseX.set(e.clientX - rect.left);
    buttonMouseY.set(e.clientY - rect.top);
    buttonMouseRadius.set(Math.max(rect.width, rect.height) / 2);
  };

  return (
    <motion.button
      onMouseMove={handleButtonMouseMove}
      className={`group relative w-full sm:w-auto bg-[#019963] border-2 text-primary-foreground hover:bg-[#019963]/90 text-sm font-semibold py-2 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${buttonMouseRadius}px circle at ${buttonMouseX}px ${buttonMouseY}px,
              rgba(255,255,255,0.15),
              transparent 80%
            )
          `,
        }}
      />
      <Sparkles className="size-4" />
      {children}
    </motion.button>
  );
}
