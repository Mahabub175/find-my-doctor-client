import { Outlet } from "react-router-dom";
import DashboardSideBar from "../components/shared/DashboardSideBar/DashboardSideBar";

const DashboardLayout = () => {
  return (
    <div className="flex items-center">
      <DashboardSideBar />
      <div className="ml-[20%]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
