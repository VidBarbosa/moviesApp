import { useState } from "react";
import {
  IconHome,
  IconSearch,
  IconDeviceTv,
  IconUniverse,
  IconX,
  IconMenuDeep,
} from "@tabler/icons-react";
import HeaderMenuItem from "./HeaderMenuItem";

export const HeaderMenu = () => {
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const menuClass = `fixed md:relative inset-0 md:inset-auto top-0 md:top-auto w-full md:w-auto bg-black md:bg-transparent bg-opacity-80 md:bg-opacity-100 transition-opacity duration-500 ease-out ${isHeaderMenuOpen ? "opacity-100" : "opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"} flex justify-center items-center`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between py-2 px-6 bg-black text-white">
      <h1 className="text-2xl font-bold text-slate-600">Movies App</h1>

      <button
        onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}
        className="md:hidden p-2 text-white z-50"
      >
        {isHeaderMenuOpen ? <IconX size={24} /> : <IconMenuDeep size={24} />}
      </button>

      <div className={menuClass}>
        <nav className={`md:mx-auto`}>
          <ul className="flex flex-col md:flex-row gap-4 items-center justify-center p-4">
            <HeaderMenuItem icon={<IconHome size={20} />} label="Home" href="#" />
            <HeaderMenuItem icon={<IconSearch size={20} />} label="Buscar" href="#search" />
            <HeaderMenuItem icon={<IconDeviceTv size={20} />} label="Movies" href="#movies" />
            <HeaderMenuItem icon={<IconUniverse size={20} />} label="Series" href="#series" />
          </ul>
        </nav>
      </div>

    </header>
  );
};

