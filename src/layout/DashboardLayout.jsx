import { Outlet } from "react-router-dom";
import DashboardSideBar from "../components/shared/DashboardSideBar/DashboardSideBar";

const DashboardLayout = () => {
  return (
    <div className="flex items-center">
      <DashboardSideBar />
      <div className="absolute right-1/2 top-1/3">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
