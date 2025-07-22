import clsx from "clsx";
import { LeftSizeHeader } from "../../Molecules/LeftSizeHeader/LeftSizeHeader";
import "./LandingHeader.css";

interface LandingHeaderProps {
  className: string;
}

export const LandingHeader = ({ className }: LandingHeaderProps) => {
  return (
    <nav className={clsx("flex justify-between items-center", className)}>
      <p className="text-xl xl:text-2xl font-bold xl:font-black text-blue-500">
        Trello
      </p>
      <LeftSizeHeader />
    </nav>
  );
};
