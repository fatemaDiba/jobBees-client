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
import PrivateUserRoutes from "../private/PrivateUserRoutes";
import PrivateWorkerRoutes from "../private/PrivateWorkerRoutes";
import PrivateAdminRoutes from "../private/PrivateAdminRoutes";
import { Home as DashboardHome } from "../dashboard/Home";
import TermsOfUse from "../footerRoutes/TermOfUse";

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
        path: "/dashboard/home",
        element: <DashboardHome></DashboardHome>,
      },
      // admin routes
      {
        path: "/dashboard/admin-home",
        element: (
          <PrivateAdminRoutes>
            <AdminHome></AdminHome>
          </PrivateAdminRoutes>
        ),
      },
      {
        path: "/dashboard/manage-task",
        element: (
          <PrivateAdminRoutes>
            <ManageTask></ManageTask>
          </PrivateAdminRoutes>
        ),
      },
      {
        path: "/dashboard/manage-user",
        element: (
          <PrivateAdminRoutes>
            <ManageUser></ManageUser>
          </PrivateAdminRoutes>
        ),
      },
      // buyer routes
      {
        path: "/dashboard/buyer-home",
        element: (
          <PrivateUserRoutes>
            <BuyerHome></BuyerHome>
          </PrivateUserRoutes>
        ),
      },
      {
        path: "/dashboard/add-task",
        element: (
          <PrivateUserRoutes>
            <AddTask></AddTask>
          </PrivateUserRoutes>
        ),
      },
      {
        path: "/dashboard/my-added-task",
        element: (
          <PrivateUserRoutes>
            <MyTask></MyTask>
          </PrivateUserRoutes>
        ),
      },
      {
        path: "/dashboard/update-task/:id",
        element: (
          <PrivateUserRoutes>
            <UpdateTask></UpdateTask>
          </PrivateUserRoutes>
        ),
      },
      {
        path: "/dashboard/payment-history",
        element: (
          <PrivateUserRoutes>
            <PaymentHistory></PaymentHistory>
          </PrivateUserRoutes>
        ),
      },
      {
        path: "/dashboard/purchase-coin",
        element: (
          <PrivateUserRoutes>
            <PurchaseCoin></PurchaseCoin>
          </PrivateUserRoutes>
        ),
      },
      {
        path: "/dashboard/checkout",
        element: (
          <PrivateUserRoutes>
            <Checkout></Checkout>
          </PrivateUserRoutes>
        ),
      },
      // worker routes
      {
        path: "/dashboard/worker-home",
        element: (
          <PrivateWorkerRoutes>
            <WorkerHome></WorkerHome>
          </PrivateWorkerRoutes>
        ),
      },
      {
        path: "/dashboard/my-submission",
        element: (
          <PrivateWorkerRoutes>
            <MySubmission></MySubmission>
          </PrivateWorkerRoutes>
        ),
      },
      {
        path: "/dashboard/task-list",
        element: (
          <PrivateWorkerRoutes>
            <TaskList></TaskList>
          </PrivateWorkerRoutes>
        ),
      },
      {
        path: "/dashboard/task-details/:id",
        element: (
          <PrivateWorkerRoutes>
            <DetailTask></DetailTask>
          </PrivateWorkerRoutes>
        ),
      },
      {
        path: "/dashboard/withdrawal",
        element: (
          <PrivateWorkerRoutes>
            <Withdrawals></Withdrawals>
          </PrivateWorkerRoutes>
        ),
      },
    ],
  },
]);
export default router;
