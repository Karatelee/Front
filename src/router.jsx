import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Foods from "@/pages/foods";
import Food from "@/pages/Food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/foods",
    element: <Foods />,
  },
  {
    path: "/foods/:id",
    element: <Food />,
  },
]);

export default router;
