import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../components/AllSection/Doctor/DoctorDetails/DoctorDetails";
import { base_url } from "../utils/config";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import Bookings from "../pages/Dashboard/Bookings/Bookings";
import Payment from "../pages/Payment/Payment";
import User from "../pages/Dashboard/Admin/Users/User";
import AddDoctors from "../pages/Dashboard/Admin/Doctors/AddDoctors";
import AllBookings from "../pages/Dashboard/Admin/Bookings/AllBookings";
import ContactUs from "../pages/ContactUs/ContactUs";

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
        path: "/contact",
        element: <ContactUs />,
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
      {
        path: "/payments",
        element: <Payment />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/bookings", element: <Bookings /> },
      { path: "/dashboard/users", element: <User /> },
      { path: "/dashboard/add-doctor", element: <AddDoctors /> },
      { path: "/dashboard/all-bookings", element: <AllBookings /> },
    ],
  },
]);
