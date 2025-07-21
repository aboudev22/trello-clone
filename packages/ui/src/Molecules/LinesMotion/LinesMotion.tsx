import clsx from "clsx";
import { motion } from "framer-motion";
import { NeonLine } from "../../Atoms/NeonLine/NeonLine";
import "./LineMotion.css";

interface LineMotionProps {
  className?: string;
}

const rotateProps = [-15, -8, -5, -2, 2, 5, 8, 15];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      ease: "linear" as const,
    },
  },
};
const childrenVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: {
    duration: 0.4,
  },
};

export const LinesMotion = ({ className }: LineMotionProps) => {
  return (
    <div
      className={clsx(
        "flex h-full w-full justify-between items-center",
        className
      )}
    >
      {[...Array(2)].map((_, i) => (
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-between"
        >
          {[...Array(8)].map((_, index) => (
            <motion.div
              variants={childrenVariants}
              style={{
                rotate:
                  i === 0
                    ? `${-rotateProps[index]}deg`
                    : `${rotateProps[index]}deg`,
              }}
              className={"py-6"}
            >
              <NeonLine
                delay={Math.round(Math.random() * 4)}
                key={index}
                width={400}
              />
            </motion.div>
          ))}
        </motion.section>
      ))}
    </div>
  );
};
