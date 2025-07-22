import { ArrowUpRight } from "lucide-react";
import "./LeftSizeHeader.css";

export const LeftSizeHeader = () => {
  return (
    <nav className="flex gap-1 xl:gap-4 w-fit">
      <button className="btn h-10 xl:h-auto flex-none flex items-center gap-2 xl:gap-5 px-2 xl:px-4 xl:py-2 rounded-full bg-transparent border border-blue-500 cursor-pointer">
        <p className="text-sm xl:text-xl dark:text-white text-neutral-700 font-bold">
          Connexion
        </p>
        <div className="row bg-blue-500 rounded-full p-0.5 xl:p-[4px]">
          <ArrowUpRight size={20} color="white" />
        </div>
      </button>
      <button className="hidden xl:flex bg-blue-500 p-2 cursor-pointer hover:shadow-2xl shadow-blue-500 hover:bg-blue-800">
        <p className="text-xl text-white">Obtenir trello gratuitement</p>
      </button>
    </nav>
  );
};
