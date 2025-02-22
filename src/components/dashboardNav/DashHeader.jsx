import { FaUser } from "react-icons/fa6";
import { TbBellFilled } from "react-icons/tb";
import Title from "../Title";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { PiCoinsFill } from "react-icons/pi";
import useUser from "../../hooks/useUser";
import { useState } from "react";

const DashHeader = ({ notifications }) => {
  const { user, logOutUser } = useAuth();
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();
  const [userData] = useUser();

  const handleLogOutBtn = (e) => {
    e.preventDefault();
    logOutUser()
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logged Out User",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something Went Wrong!",
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  const handleShowNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="bg-light-secondary/90">
      <Title title="Dashboard"></Title>

      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start ">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex gap-3 items-center text-xl md:text-2xl xl:text-[28px] dark:text-white font-bold"
            >
              <img src="/assets/logo.png" alt="logo" className="w-10" />
              <p className="hidden sm:block">JobBees</p>
            </Link>
          </div>
        </div>
        <div className="navbar-end relative">
          {/* Coin */}
          <div className="px-2 md:px-3 py-2 md:mr-2 flex items-center justify-center gap-1 rounded-lg hover:bg-blue-500 bg-light-accent">
            <span className="font-bold text-sm md:text-base">
              {userData?.coin}
            </span>
            <PiCoinsFill className="fill-yellow-500 font-bold text-xl md:text-2xl"></PiCoinsFill>
          </div>

          {/* Role */}
          <div className="">
            <Tooltip
              anchorSelect="#user-role"
              place="bottom"
              className="!rounded-lg !bg-gray-700 !text-white"
              clickable
            >
              <p className="p-2 font-bold text-md uppercase">
                {userData?.userType}
              </p>
            </Tooltip>
            <div
              id="user-role"
              role="button"
              className="flex items-center justify-center h-10 w-10"
            >
              <FaUser className="text-xl" />
            </div>
          </div>

          {/* notification */}
          <button className="w-10 h-10 md:mr-2 hover:bg-slate-400 rounded-full  flex items-center justify-center">
            <div
              onClick={handleShowNotification}
              className="relative indicator"
            >
              <TbBellFilled className="text-2xl"></TbBellFilled>
              <div
                className={`absolute top-12 right-0 w-[280px] md:w-[400px] bg-white shadow-md rounded-lg p-4 z-50 overflow-y-auto h-64 ${
                  showNotification ? "block" : "hidden"
                }`}
              >
                {notifications.length > 0 ? (
                  notifications?.map((notification) => {
                    return (
                      <div
                        key={notification._id}
                        className="p-2 border-b last:border-b-0 border-blue-500 hover:bg-gray-100 text-start"
                      >
                        <p>{notification.message}</p>
                        <p className="text-end">
                          {new Date(notification.time).toLocaleDateString()}
                        </p>
                      </div>
                    );
                  })
                ) : (
                  <p>No Notifications For You</p>
                )}
              </div>
              {notifications && (
                <span className="badge badge-xs badge-primary indicator-item"></span>
              )}
            </div>
          </button>

          {/* image */}
          <div className="">
            <Tooltip
              anchorSelect="#profile-pic"
              place="bottom"
              className="!p-2 !rounded-lg !bg-gray-700 !text-white !h-24"
              clickable
            >
              <div className="flex flex-col justify-center items-center space-y-2 py-2">
                <p className="font-bold text-md">{user?.displayName}</p>
                <button
                  onClick={handleLogOutBtn}
                  className="px-4 py-2 text-white font-semibold rounded-lg hover:bg-blue-700 bg-light-primary/70"
                >
                  Logout
                </button>
              </div>
            </Tooltip>

            <div
              tabIndex={0}
              role="button"
              id="profile-pic"
              className="btn btn-ghost btn-md dark:border-white/70 btn-circle avatar"
            >
              <div className="md:w-10 w-8 rounded-full relative">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
