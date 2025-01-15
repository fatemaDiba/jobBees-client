import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Title from "../../components/Title";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { oldUser, signInWithGoogle, setLoading, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosBase = useAxios();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    oldUser(email, password)
      .then((res) => {
        // console.log(res.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome Back ${user.displayname}`,
          showConfirmButton: false,
          timer: 1000,
        });
        setLoading(false);
        navigate(location?.state ? location.state : "/");
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

  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((res) => {
        const email = res?.user?.email;
        const displayName = res?.user?.displayName;

        const userData = { email, displayName };

        axiosBase.post("/user/add", userData).then((res) => {
          if (res.data.acknowledged) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully created user",
              showConfirmButton: false,
              timer: 1000,
            });
            navigate(location?.state ? location.state : "/");
          }
          if (res.data.oldUser) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Welcome Back ${user.displayname}`,
              showConfirmButton: false,
              timer: 1000,
            });
            navigate(location?.state ? location.state : "/");
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Something Went Wrong!",
          showConfirmButton: false,
          timer: 1000,
        });
        setLoading(false);
      });
  };

  return (
    <div>
      <Title title="Login"></Title>
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-14 mt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="card bg-light-secondary/50 shadow-2xl">
            <div className="card-body text-white">
              <h2 className="font-bold text-center text-xl text-black/90 md:text-4xl mb-6">
                <span className="text-light-primary">Login</span> Now
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                    className="input input-bordered  text-black"
                  />
                </div>
                {/* pass */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPass ? "text" : "password"}
                      placeholder="password"
                      className="input input-bordered w-full  text-black"
                      required
                    />
                    <div
                      onClick={handleShowPass}
                      className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                    >
                      {showPass ? (
                        <FaEyeSlash className="text-lg text-black/80" />
                      ) : (
                        <FaEye className="text-lg text-black/80" />
                      )}
                    </div>
                  </div>
                  <label className="label">
                    <a className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 mb-4">
                  <button className="btn bg-light-primary/70 hover:bg-blue-700 text-white">
                    Login
                  </button>
                </div>
              </form>
              <div className="mb-4">
                <p className="text-sm mb-2 text-black">Login with Google</p>
                <button
                  className="btn font-bold bg-slate-200 hover:bg-slate-400 w-full text-black"
                  onClick={handleGoogleBtn}
                >
                  Google <FcGoogle className="text-xl" />
                </button>
              </div>

              <div className="text-sm">
                <p className="text-black">
                  Don't Have An Account?
                  <Link
                    to="/register"
                    className="text-light-primary font-bold ml-2"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full hidden md:flex justify-center">
            <img src="/assets/login.png" alt="Login Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
