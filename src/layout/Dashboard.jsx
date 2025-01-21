import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import DashHeader from "../components/dashboardNav/DashHeader";
import Sidebar from "../components/dashboardNav/Sidebar";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const { pathname } = useLocation();
  const axiosBase = useAxios();
  const { user } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    axiosBase.get(`/notify/get-notification/${user?.email}`).then((res) => {
      setNotifications(res.data);
    });
  }, [user?.email]);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div className="flex">
        <div
          className={`min-h-full bg-slate-200 transition-all duration-300 ${
            sidebar ? "w-[15%] md:w-[7%]" : "w-[20%]"
          } `}
        >
          <Sidebar sidebar={sidebar} handleSidebar={handleSidebar}></Sidebar>
        </div>
        <div className="w-full overflow-hidden">
          <DashHeader notifications={notifications}></DashHeader>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
