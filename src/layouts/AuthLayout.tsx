import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@stores/index";

export const AuthLayout = () => {
  const authStatus = useAuthStore((state) => state.status);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  if (authStatus === "pending") {
    checkAuthStatus();
    return <>Loading...</>;
  }

  if (authStatus === "authorized") {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="h-screen flex">
      <div
        className="hidden lg:flex w-full lg:w-1/2 login_img_section
        justify-around items-center"
      >
        <div className=" bg-black opacity-20 inset-0 z-0"></div>
        <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-sans">Movies App</h1>
          <p className="text-white mt-1">Una app sencilla de usar</p>
          <div className="flex justify-center lg:justify-start mt-6"></div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 justify-center items-center bg-gradient-to-b from-[#12141C] to-black space-y-2">
        <Outlet />
      </div>
    </div>
  );
};
