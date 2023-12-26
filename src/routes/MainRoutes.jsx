import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../components/AllSection/Doctor/DoctorDetails/DoctorDetails";

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctor/${params?.id}`),
      },
    ],
  },
]);
