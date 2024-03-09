import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@stores/index";
import { HeaderMenu, SideMenu, Footer } from "@components/index";

export const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authStatus = useAuthStore((state) => state.status);

  if (authStatus === "pending") {
    return <p>Loading...</p>;
  }

  if (authStatus === "unauthorized") {
    return <Navigate to="/auth/login" />;
  }

  return (
    <main className="bg-gradient-to-b from-[#12141C] to-black overflow-y-scroll w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
      <HeaderMenu />
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <section className={`flex-grow p-4 mt-16 ${isMenuOpen ? "ml-[12.5rem]" : "ml-0"}`}>
        <Outlet />
        <Footer />
      </section>
    </main>
  );
};
