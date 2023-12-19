import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
