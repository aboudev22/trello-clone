import clsx from "clsx";
import { motion } from "framer-motion";
import "./Paragraphe.css";

interface ParagrapheProps {
  className?: string;
  title?: string;
  paragraphs: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: { duration: 0.4, ease: "linear" },
};

export const Paragraphe = ({
  className,
  title,
  paragraphs,
}: ParagrapheProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={clsx(
        "flex flex-col w-fit justify-center items-center",
        className
      )}
    >
      {title && (
        <motion.h1
          transition={{ ease: "linear" }}
          variants={childVariants}
          className="font-bold mb-2 text-center text-xl dark:text-white text-black"
        >
          {title}
        </motion.h1>
      )}

      {paragraphs.map((paragraph, index) => (
        <motion.p
          transition={{ ease: "linear" }}
          variants={childVariants}
          key={index}
          className="text-xs font-bold dark:text-white text-black text-center w-xs"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
};
