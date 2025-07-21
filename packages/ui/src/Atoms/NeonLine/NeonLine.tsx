import clsx from "clsx";
import { motion } from "framer-motion";
import "./NeoLine.css";

interface NeonLineProps {
  width: number;
  className?: string;
}

export const NeonLine = ({ width, className }: NeonLineProps) => {
  return (
    <div className={clsx("relative w-fit overflow-x-hidden", className)}>
      <div
        style={{ width }}
        className="z-[1] h-[2px] bg-gradient-to-r from-blue-500/15 via-blue-500/30 to-blue-500/15"
      ></div>
      <motion.div
        initial={{ translateX: "210%" }}
        animate={{ translateX: "-100%" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeOut",
          repeatDelay: 2,
        }}
        style={{ width: width / 2 }}
        className="z-[2] top-0 h-[2px] bg-gradient-to-l from-blue-500/5 to-blue-500 absolute"
      >
        <div
          style={{ width: width / 3 }}
          className="h-full bg-gradient-to-l from-blue-500/5 to-blue-500"
        ></div>
      </motion.div>
    </div>
  );
};
