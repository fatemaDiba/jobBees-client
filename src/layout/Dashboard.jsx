import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import DashHeader from "../components/dashboardNav/DashHeader";
import Sidebar from "../components/dashboardNav/Sidebar";
import { useState } from "react";

const Dashboard = () => {
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
        <div className="md:w-full">
          <DashHeader></DashHeader>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
