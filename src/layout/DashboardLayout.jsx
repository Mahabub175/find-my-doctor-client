import { Outlet } from "react-router-dom";
import DashboardSideBar from "../components/shared/DashboardSideBar/DashboardSideBar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <DashboardSideBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
