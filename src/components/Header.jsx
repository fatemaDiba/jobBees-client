import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOutBtn = (e) => {
    e.preventDefault();
    logOutUser()
      .then((res) => {
        console.log("User Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        console.log(first)("Something went wrong!");
      });
  };

  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  return (
    <header className="w-full py-2 fixed z-50 top-0 bg-light-secondary/90 shadow-xl backdrop-blur-sm">
      <div className="navbar justify-between w-11/12 md:container xl:w-10/12 mx-auto p-0">
        <div className="">
          <div className="dropdown lg:p-0">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-[30] mt-3 w-52 p-2 shadow "
            >
              {navList}
            </ul>
          </div>
          <a className="flex gap-3 items-center text-xl dark:text-white md:text-3xl font-bold">
            <img src="/assets/logo.png" alt="" className="w-12 md:w-14" />
            JobBees
          </a>
        </div>

        <div>
          <div className="hidden lg:flex mr-4">
            <ul className="menu-horizontal dark:text-white font-semibold px-1 gap-6 text-sm">
              {navList}
            </ul>
          </div>
          {user ? (
            <div className="flex gap-4 ">
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
                className="btn btn-ghost dark:border-white/70 btn-circle avatar"
              >
                <div className="md:w-10 w-8 rounded-full relative">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className=" bg-light-primary/70 hover:bg-blue-700 text-sm px-4 py-2 rounded-md font-semibold dark:text-black ml-3"
              >
                LogIn
              </Link>
              <Link
                to="/register"
                className="  bg-light-primary/70 hover:bg-blue-700 text-sm px-4 py-2 rounded-md font-semibold dark:text-black  ml-3"
              >
                Register
              </Link>
              <Link
                to="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-fatemaDiba"
                className=" bg-light-primary/70 hover:bg-blue-700 text-sm px-4 py-2 rounded-md font-semibold dark:text-black  ml-3"
              >
                Join as developer
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
