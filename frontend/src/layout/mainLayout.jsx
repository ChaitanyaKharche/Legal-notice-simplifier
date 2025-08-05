import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const MainLayout = () => {
  return (
    <div className="bg-[#F7F8F9] h-screen">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
