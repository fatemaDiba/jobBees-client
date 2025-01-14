import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../error/Error";
import Home from "../pages/home/Home";
import Register from "../pages/logreg/Register";
import Login from "../pages/logreg/Login";
import Contact from "../footerRoutes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
