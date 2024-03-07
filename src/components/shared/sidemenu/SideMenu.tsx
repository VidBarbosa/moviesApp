import { SideMenuItem } from "./SideMenuItem";
import { useAuthStore } from "@stores/auth/auth.store";
import "./SideMenu.css";

interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "Dashboard", subTitle: "Visualizar data", href: "/dashboard"},
  // { title: 'Categorias', subTitle: 'Peliculas y Series', href: '/dashboard/bears', Icon: 'bear' },
  // { title: 'Persona', subTitle: 'Nombre y apellido', href: '/dashboard/person', Icon: 'person' },
  // { title: 'Tareas', subTitle: 'Listado de tareas', href: '/dashboard/tasks', Icon: 'tasks' },
  // { title: 'Boda', subTitle: 'Invitados a la boda', href: '/dashboard/wedding-invitation', Icon: 'wedding'},
];

export const SideMenu = () => {
  const logoutUser = useAuthStore((state) => state.logoutUser);
  const userName = useAuthStore((state) => state.user?.name || "No user");
  const userAvatar = useAuthStore((state) => state.user?.avatar || "No avatar");

  return (
    <div
      id="menu"
      className="bg-[#111111] min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-auto rounded-r-3xl shadow-lg"
    >
      <div id="logo" className="mt-6 px-6">
        {/* Title */}
        <h1 className="text-lg md:text-2xl font-bold text-white">Movies App</h1>
      </div>

      {/*  Profile */}
      <div id="profile" className="px-6 py-10">
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
    </div>
  );
};
