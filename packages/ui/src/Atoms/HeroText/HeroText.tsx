import clsx from "clsx";
import { motion } from "framer-motion";
import "./HeroText.css";

interface HeroTextProps {
  text: string;
  className?: string;
}

const containerVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "linear" as const,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "linear" as const,
    },
  },
};

export const HeroText = ({ text, className }: HeroTextProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={clsx(
        "flex justify-center items-center flex-wrap dark:text-white font-extrabold text-2xl xl:text-7xl text-center w:sm xl:w-5xl gap-y-0 gap-3",
        className
      )}
    >
      {text.split(" ").map((item, index) => (
        <motion.p
          variants={childVariants}
          key={`${index}-${item}`}
          className="inline"
        >
          {item}
        </motion.p>
      ))}
    </motion.div>
  );
};
