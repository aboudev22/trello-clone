import clsx from "clsx";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
  className?: string;
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
  variants?:
    | "Default"
    | "Secondary"
    | "Destructive"
    | "Outline"
    | "Ghost"
    | "Link"
    | "Icon"
    | "withIcon"
    | "Loading";
}

export const Button = ({
  label,
  variants = "Default",
  className,
  icon,
  onClick,
}: ButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      className={clsx(
        "flex justify-center items-center whitespace-nowrap gap-1 text-sm font-bold w-fit cursor-pointer transition-all",
        variants === "Default" &&
          "px-4 py-2 rounded-md bg-black hover:bg-black/90 text-white",
        variants === "Secondary" &&
          "px-4 py-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-black",
        variants === "Destructive" &&
          "px-4 py-2 rounded-md bg-red-500 hover:bg-red-500/80 text-white",
        variants === "Ghost" &&
          "px-4 py-2 rounded-md text-black hover:bg-neutral-100",
        variants === "Outline" &&
          "px-4 py-2 rounded-md border border-black/15 text-black hover:bg-neutral-100",
        variants === "withIcon" &&
          "px-4 py-2 rounded-md border border-black/15 text-black hover:bg-neutral-100",
        variants === "Link" &&
          "text-black hover:border-b hover:border-b-black rounded-none",
        variants === "Icon" && "px-2 py-2 rounded-md bg-neutral-200 ",
        variants === "Loading" &&
          "px-4 py-2 text-white bg-neutral-700 rounded-md",
        className
      )}
    >
      {variants === "Loading" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 200 200"
        >
          <radialGradient
            id="a9"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stop-color="#FFFFFF"></stop>
            <stop offset=".3" stop-color="#FFFFFF" stop-opacity=".9"></stop>
            <stop offset=".6" stop-color="#FFFFFF" stop-opacity=".6"></stop>
            <stop offset=".8" stop-color="#FFFFFF" stop-opacity=".3"></stop>
            <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a9)"
            stroke-width="20"
            stroke-linecap="round"
            stroke-dasharray="200 1000"
            stroke-dashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="1"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#FFFFFF"
            stroke-width="10"
            stroke-linecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
      )}
      {icon}
      {label}
    </motion.button>
  );
};
