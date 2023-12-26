import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../components/AllSection/Doctor/DoctorDetails/DoctorDetails";
import { base_url } from "../utils/config";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "/doctorDetails/:id",
        element: <DoctorDetails />,
        loader: ({ params }) => fetch(`${base_url}/doctor/${params?.id}`),
      },
    ],
  },
]);
