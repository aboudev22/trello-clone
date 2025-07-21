import clsx from "clsx";
import "./ParticleNeon.css";

interface ParticleNeonProps {
  className?: string;
  width?: number;
  height?: number;
}

export const ParticleNeon = ({ className }: ParticleNeonProps) => {
  return (
    <div className="relative w-54 h-54 flex justify-center items-center">
      <div
        className={clsx("neon w-12 h-12 bg-amber-500 rounded-full", className)}
      />
      <div className="absolute rounded-full top-0 h-full left-0 w-full z-20 bg-neutral-500/5 backdrop-blur-3xl backdrop-saturate-200" />
    </div>
  );
};
