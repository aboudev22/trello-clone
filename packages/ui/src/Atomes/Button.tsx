import { motion } from "framer-motion";
import "./button.css";

export const Button = ({ label }: { label: string }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="p-2 text-xs font-bold bg-black rounded-md w-fit text-pink-500  cursor-pointer"
    >
      {label}
    </motion.button>
  );
};
