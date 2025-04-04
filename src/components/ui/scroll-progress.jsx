import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress({
  className
}) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    (<motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-blue-500 to-blue-700",
        className
      )}
      style={{
        scaleX,
      }} />)
  );
}
