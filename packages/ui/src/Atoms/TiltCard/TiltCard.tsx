import clsx from "clsx";
import { useRef, useState } from "react";
import "./tiltCard.css";

interface TiltCardProps {
  className?: string;
  description: string;
  title: string;
}

export const TiltCard = ({ className, title, description }: TiltCardProps) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rec = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rec.left;
    const y = e.clientY - rec.top;
    const centerX = rec.width / 2;
    const centerY = rec.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div
      onMouseMove={handleMouseDown}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      ref={cardRef}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      className={clsx(
        "tilt w-xs p-5 rounded-2xl dark:bg-white/10 bg-black/10 backdrop-blur-xl backdrop-saturate-150 transition-all cursor-grab",
        className
      )}
    >
      <h1 className="text-sm text-center select-none font-black dark:text-white text-black">
        {title}
      </h1>
      <p className="text-sm text-justify font-bold mt-2 select-none dark:text-white text-black">
        {description}
      </p>
    </div>
  );
};
