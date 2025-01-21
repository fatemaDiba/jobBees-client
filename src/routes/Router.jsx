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
import MySubmission from "../dashboard/WorkerDashboard/submission/MySubmission";
import TaskList from "../dashboard/WorkerDashboard/taskList/TaskList";
import Withdrawals from "../dashboard/WorkerDashboard/withdrawal/Withdrawals";
import AdminHome from "../dashboard/AdminDashboard/adminHome/AdminHome";
import WorkerHome from "../dashboard/WorkerDashboard/workerHome/WorkerHome";
import BuyerHome from "../dashboard/BuyerDashboard/buyerHome/BuyerHome";
import PaymentHistory from "../dashboard/BuyerDashboard/payment/PaymentHistory";
import MyTask from "../dashboard/BuyerDashboard/myTasks/MyTask";
import AddTask from "../dashboard/BuyerDashboard/addTask/AddTask";
import PurchaseCoin from "../dashboard/BuyerDashboard/purchase/PurchaseCoin";
import UpdateTask from "../dashboard/BuyerDashboard/myTasks/components/UpdateTask";
import DetailTask from "../dashboard/WorkerDashboard/taskList/components/DetailTask";
import Checkout from "../dashboard/BuyerDashboard/purchase/checkout/Checkout";

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
      // admin routes
      {
        path: "/dashboard/admin-home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/manage-task",
        element: <ManageTask></ManageTask>,
      },
      {
        path: "/dashboard/manage-user",
        element: <ManageUser></ManageUser>,
      },
      // buyer routes
      {
        path: "/dashboard/buyer-home",
        element: <BuyerHome></BuyerHome>,
      },
      {
        path: "/dashboard/add-task",
        element: <AddTask></AddTask>,
      },
      {
        path: "/dashboard/my-added-task",
        element: <MyTask></MyTask>,
      },
      {
        path: "/dashboard/update-task/:id",
        element: <UpdateTask></UpdateTask>,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/purchase-coin",
        element: <PurchaseCoin></PurchaseCoin>,
      },
      {
        path: "/dashboard/checkout",
        element: <Checkout></Checkout>,
      },
      // worker routes
      {
        path: "/dashboard/worker-home",
        element: <WorkerHome></WorkerHome>,
      },
      {
        path: "/dashboard/my-submission",
        element: <MySubmission></MySubmission>,
      },
      {
        path: "/dashboard/task-list",
        element: <TaskList></TaskList>,
      },
      {
        path: "/dashboard/task-details/:id",
        element: <DetailTask></DetailTask>,
      },
      {
        path: "/dashboard/withdrawal",
        element: <Withdrawals></Withdrawals>,
      },
    ],
  },
]);
export default router;
