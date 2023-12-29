import { RouterProvider } from "react-router-dom";
import { router } from "./routes/MainRoutes";
import BackToTopButton from "./components/shared/BackToTopButton/BackToTopButton";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <BackToTopButton />
      <Toaster />
    </div>
  );
};

export default App;
