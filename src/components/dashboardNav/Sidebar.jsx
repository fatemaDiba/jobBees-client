import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaBars, FaTasks, FaUser } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { FaCoins } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import useUser from "../../hooks/useUser";

const Sidebar = ({ sidebar, handleSidebar }) => {
  const [userData] = useUser();
  const user = userData.userType;

  const navList = (
    <div className="text-sm md:text-base list-none space-y-4 !text-black/90 !font-normal">
      {/* admin route */}
      {user === "admin" && (
        <>
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
                <span className={`${sidebar ? "hidden" : "block"}`}>Home</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/admin-profile"
              className={({ isActive }) =>
                `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
              }
            >
              <div
                className={`flex items-center gap-2 ${
                  sidebar ? "justify-center" : "justify-start"
                } `}
              >
                <FaUser />
                <span className={`${sidebar ? "hidden" : "block"}`}>
                  Profile
                </span>
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
        </>
      )}
      {/* user route */}
      {user === "buyer" && (
        <>
          <li>
            <NavLink
              to="/dashboard/buyer-home"
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
          <li>
            <NavLink
              to="/dashboard/buyer-profile"
              className={({ isActive }) =>
                `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
              }
            >
              <div
                className={`flex items-center gap-2 ${
                  sidebar ? "justify-center" : "justify-start"
                } `}
              >
                <FaUser />
                <span className={`${sidebar ? "hidden" : "block"}`}>
                  Profile
                </span>
              </div>
            </NavLink>
          </li>
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
                <span className={`${sidebar ? "hidden" : "block"}`}>
                  Add Task
                </span>
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
                <span className={`${sidebar ? "hidden" : "block"}`}>
                  My Tasks
                </span>
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
        </>
      )}
      {/* worker route */}
      {user === "worker" && (
        <>
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
                <span className={`${sidebar ? "hidden" : "block"}`}>Home</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/worker-profile"
              className={({ isActive }) =>
                `${sidebar ? "" : isActive ? "active dashLink" : "dashLink"} `
              }
            >
              <div
                className={`flex items-center gap-2 ${
                  sidebar ? "justify-center" : "justify-start"
                } `}
              >
                <FaUser />
                <span className={`${sidebar ? "hidden" : "block"}`}>
                  Profile
                </span>
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
                <span className={`${sidebar ? "hidden" : "block"}`}>
                  Task List
                </span>
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
        </>
      )}
    </div>
  );
  return (
    <div className="w-[80%] mx-auto py-5">
      <div
        className={`flex flex-col ${sidebar ? "items-center" : "items-start"}`}
      >
        <div
          className="p-3 hover:bg-slate-400 rounded-xl mb-5 "
          onClick={handleSidebar}
        >
          <FaBars className="text-xl md:text-2xl"></FaBars>
        </div>
        {navList}
      </div>
    </div>
  );
};

export default Sidebar;
