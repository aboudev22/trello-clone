import clsx from "clsx";

interface HerroTextProps {
  text: string;
  theme: "dark" | "white";
  className?: string;
}

export const HerroText = ({ text, theme, className }: HerroTextProps) => {
  return (
    <h1
      className={clsx(
        "font-bold text-5xl",
        theme === "dark" ? "text-amber-50" : "text-black",
        className
      )}
    >
      {text}
    </h1>
  );
};
