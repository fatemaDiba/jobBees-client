import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaCoins } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";

const Sidebar = ({ sidebar }) => {
  const navList = (
    <div className="list-none space-y-4 !text-black/90 !font-normal">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <IoHome />
            <span className={`${sidebar ? "hidden" : "block"}`}>Home</span>
          </div>
        </NavLink>
      </li>
      {/* admin route */}
      <li>
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <IoHome />
            <span className={`${sidebar ? "hidden" : "block"}`}>A_Home</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-task"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <FaTasks />
            <span className={`${sidebar ? "hidden" : "block"}`}>
              Manage Task
            </span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manage-user"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <FaUserCog />
            <span className={`${sidebar ? "hidden" : "block"}`}>
              Manage User
            </span>
          </div>
        </NavLink>
      </li>
      {/* user route */}
      <li>
        <NavLink
          to="/dashboard/add-task"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <FaTasks />
            <span className={`${sidebar ? "hidden" : "block"}`}>Add Task</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-added-task"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <HiClipboardDocumentList />
            <span className={`${sidebar ? "hidden" : "block"}`}>My Tasks</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/payment-history"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <MdPayment />
            <span className={`${sidebar ? "hidden" : "block"}`}>
              Payment History
            </span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/purchase-coin"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <FaCoins />
            <span className={`${sidebar ? "hidden" : "block"}`}>
              Purchase Coin
            </span>
          </div>
        </NavLink>
      </li>
      {/* worker route */}
      <li>
        <NavLink
          to="/dashboard/worker-home"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <IoHome />
            <span className={`${sidebar ? "hidden" : "block"}`}>W_Home</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-submission"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <FaListCheck />
            <span className={`${sidebar ? "hidden" : "block"}`}>
              My Submission
            </span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/task-list"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <FaList />
            <span className={`${sidebar ? "hidden" : "block"}`}>Task List</span>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/withdrawal"
          className={({ isActive }) =>
            `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
          }
        >
          <div
            className={`flex items-center gap-2 ${
              sidebar ? "justify-center" : "justify-start"
            } `}
          >
            <BsCashCoin />
            <span className={`${sidebar ? "hidden" : "block"}`}>
              Withdrawals
            </span>
          </div>
        </NavLink>
      </li>
    </div>
  );
  return <div className="w-[80%] mx-auto py-5">{navList}</div>;
};

export default Sidebar;
