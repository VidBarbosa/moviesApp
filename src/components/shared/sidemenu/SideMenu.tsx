import './SideMenu.css';
import { SideMenuItem } from './SideMenuItem';
import { useAuthStore } from '@stores/auth/auth.store';


interface MenuItem {
  title: string;
  subTitle: string;
  href: string;
  Icon: string | undefined;
}

const menuItems: MenuItem[] = [
  { title: 'Dashboard', subTitle: 'Visualizar data', href: '/dashboard', Icon: 'dashboard' },
  { title: 'Osos', subTitle: 'Manejador de osos', href: '/dashboard/bears', Icon: 'bear' },
  { title: 'Persona', subTitle: 'Nombre y apellido', href: '/dashboard/person', Icon: 'person' },
  { title: 'Tareas', subTitle: 'Listado de tareas', href: '/dashboard/tasks', Icon: 'tasks' },
  { title: 'Boda', subTitle: 'Invitados a la boda', href: '/dashboard/wedding-invitation', Icon: 'wedding'},
];


export const SideMenu = () => {

  const logoutUser = useAuthStore( state => state.logoutUser );
  const userName = useAuthStore( state => state.user?.fullName || 'No user' );

  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-80 left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        {/* Title */}
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Movies App
          <span className="text-blue-500 text-xs"> StateManager</span>
          .
        </h1>
        <p className="text-slate-500 text-sm">Manejador de estados simple pero poderoso.</p>
      </div>

      {/*  Profile */ }
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenido,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <img className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="" />
          </span>
          <span className="text-sm md:text-base font-bold">
            { userName }
          </span>
        </a>
      </div>

      {/* Menu Items */ }
      <nav id="nav" className="w-full px-6">

        {
          menuItems.map( item =>(
            <SideMenuItem key={item.href} {...item} />
          ) )
        }



        {/* Logout */}
        <a onClick={ logoutUser } className="mt-10">
          <div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">Logout</span>
            <span className="text-sm text-slate-500 hidden md:block">Cerrar sesión</span>
          </div>
        </a>

      </nav>
    </div>
  );
};