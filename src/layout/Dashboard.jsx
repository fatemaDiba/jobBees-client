import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import DashHeader from "../components/dashboardNav/DashHeader";
import Sidebar from "../components/dashboardNav/Sidebar";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [sidebar, setSidebar] = useState(false);

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
          <DashHeader></DashHeader>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
