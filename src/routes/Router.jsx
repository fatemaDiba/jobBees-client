import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../error/Error";
import Home from "../pages/home/Home";
import Register from "../pages/logreg/Register";
import Login from "../pages/logreg/Login";
import Contact from "../footerRoutes/Contact";
import About from "../footerRoutes/About";
import Cookie from "../footerRoutes/Cookies";
import PrivacyPolicy from "../footerRoutes/PrivacyPolicy";
import TermsOfUse from "../footerRoutes/TermOfUse";
import PrivateUser from "../private/PrivateUser";
import Dashboard from "../layout/Dashboard";
import ManageTask from "../dashboard/AdminDashboard/manageTask/ManageTask";
import ManageUser from "../dashboard/AdminDashboard/manageUser/ManageUser";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/cookie",
        element: <Cookie></Cookie>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/term-of-use",
        element: <TermsOfUse></TermsOfUse>,
      },
      {
        path: "/login",
        element: (
          <PrivateUser>
            <Login></Login>
          </PrivateUser>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateUser>
            <Register></Register>
          </PrivateUser>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard/manage-task",
        element: <ManageTask></ManageTask>,
      },
      {
        path: "/dashboard/manage-user",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);
export default router;
