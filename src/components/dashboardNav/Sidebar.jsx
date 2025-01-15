import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";

const Sidebar = () => {
  const navList = (
    <div className="list-none space-y-2 text-black">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <p className="flex items-center gap-2">
            <IoHome />
            Home
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-task"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <p className="flex items-center gap-2">
            <FaTasks></FaTasks>Manage Task
          </p>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-user"
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          <p className="flex items-center gap-2">
            <FaUserCog></FaUserCog>Manage User
          </p>
        </NavLink>
      </li>
    </div>
  );
  return <div className="w-[70%] mx-auto py-5">{navList}</div>;
};

export default Sidebar;
