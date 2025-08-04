import { Outlet } from "react-router-dom";
import { Header } from "../components";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};
