import { AnimatePresence, motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { useState } from "react";
import "./NavBar.css";

interface NavBarProps {
  items: string[];
  links?: string[];
}

export const NavBar = ({ items }: NavBarProps) => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <nav className="w-fit flex bg-neutral-900 rounded-md">
      {items.map((item) => (
        <div key={item} className="relative m-1">
          <AnimatePresence>
            {selected === item && (
              <motion.div
                initial={{ y: 20, opacity: 0, rotate: 100 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ ease: "circInOut" }}
                className="size-fit absolute left-[2px] z-10 top-[50%] -translate-y-[50%]"
              >
                <Sparkle
                  size={20}
                  strokeWidth={2}
                  color="oklch(62.3% 0.214 259.815)"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <p
            onClick={() => setSelected(item)}
            className="text-sm z-10 font-bold ml-3 px-2 py-3 text-white cursor-pointer relative"
          >
            {item}
          </p>
          {selected === item && (
            <motion.div
              transition={{ type: "spring", stiffness: 30, damping: 10 }}
              layoutId="item-bg"
              className="flex items-center top-[2px] z-0 bottom-[2px] w-full bg-blue-900 rounded-md absolute"
            />
          )}
        </div>
      ))}
    </nav>
  );
};
