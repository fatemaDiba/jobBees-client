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
    <div className="">
      <DashHeader handleSidebar={handleSidebar}></DashHeader>
      <div className="flex">
        <div
          className={`min-h-full bg-slate-200 ${
            sidebar ? "w-[5%]" : "w-[20%]"
          }`}
        >
          <Sidebar></Sidebar>
        </div>
        <div className="w-full">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
