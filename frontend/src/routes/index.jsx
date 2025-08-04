import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { MainLayout } from "../layout/mainLayout";

const RoutesProvider = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default RoutesProvider;
