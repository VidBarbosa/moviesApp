import React from "react";
import { SideMenuItem } from "./SideMenuItem";
import { useAuthStore } from "@stores/auth/auth.store";
import classNames from "classnames";
import {
  IconLayoutSidebarLeftExpand,
  IconLayoutSidebarLeftCollapse,
} from "@tabler/icons-react";
import "./SideMenu.css";

interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
}

interface SideMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems: MenuItem[] = [
  { title: "Dashboard", subTitle: "Todas las películas", href: "/dashboard" },
  // Añade más items según sea necesario
];

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, setIsOpen }) => {
  const logoutUser = useAuthStore((state) => state.logoutUser);
  const userName = useAuthStore((state) => state.user?.name || "No user");
  const userAvatar = useAuthStore((state) => state.user?.avatar || "No avatar");

  return (
    <section
      id="menu"
      className={classNames(
        "fixed top-0 left-0 h-screen bg-black z-10 text-slate-300 transition-width duration-700 ease-in-out rounded-r-2xl shadow-2xl",
        isOpen ? "w-48" : "w-0",
        "overflow-hidden"
      )}
    >
      <section className="overflow-y-auto h-full">
        {/*  Profile */}
        <div id="profile" className="px-6 pt-20 mb-10">
          <a href="#" className="inline-flex space-x-2 items-center mt-3">
            <span>
              <img
                className="rounded-full w-8 h-8"
                src={userAvatar}
                alt={userName}
              />
            </span>
            <p className="text-sm md:text-base font-regular">
              Hola, <span className="font-bold">{userName}</span>
            </p>
          </a>
        </div>

        {/* Menu Items */}
        <nav id="nav" className="w-full px-6">
          {menuItems.map((item) => (
            <SideMenuItem key={item.href} {...item} />
          ))}

          {/* Logout */}
          <a onClick={logoutUser} className="mt-10">
            <div></div>
            <div className="flex flex-col cursor-pointer">
              <span className="text-lg text-slate-300 font-bold leading-5">
                Logout
              </span>
              <span className="text-sm text-slate-500 hidden md:block">
                Cerrar sesión
              </span>
            </div>
          </a>
        </nav>
        {/* Botón para toggle del menú */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed top-44  z-20 p-2 bg-black text-white transition-transform duration-500 ease-in-out rounded-r-2xl ${
            isOpen ? "translate-x-48" : "translate-x-0"
          }`}
          style={{
            left: "0",
            transform: `translateX(${isOpen ? "460%" : "0"})`,
          }}
        >
          {isOpen ? (
            <IconLayoutSidebarLeftCollapse size={24} />
          ) : (
            <IconLayoutSidebarLeftExpand size={24} />
          )}
        </button>
        {/* Fin toggle del menú */}
      </section>
    </section>
  );
};
