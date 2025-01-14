import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import register from "../../assets/register.json";
import useAuth from "../../hooks/useAuth";
import Title from "../../components/Title";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { newUser, signInWithGoogle, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleRegisterBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!password.match(regex)) {
      toast.error("Please give A Valid Password ");
      return;
    }
    newUser(email, password)
      .then((res) => {
        // console.log(res.user);
        form.reset();
        // toast.success("Successfully registered user");

        updateUser(name, photoUrl)
          .then((res) => {})
          .catch((error) => {
            // toast.error("Something went wrong");
          });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // toast.error("Something went wrong");
        setLoading(false);
      });
  };

  const handleGoogleBtn = () => {
    signInWithGoogle()
      .then((res) => {
        // toast.success("Successfully registered with google");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        // toast.error("Something went wrong");
        setLoading(false);
      });
  };
  return (
    <div>
      <Title title="Register"></Title>
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-14 mt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="card bg-light-secondary/50 shadow-2xl">
            <div className="card-body dark:text-white">
              <h2 className="font-bold text-center text-2xl md:text-4xl mb-6">
                <span className="text-light-primary">Register</span> Now
              </h2>
              <form onSubmit={handleRegisterBtn}>
                <div className="grid grid-cols-2 gap-3">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Role</span>
                    </label>
                    <select className="select select-bordered w-full">
                      <option disabled defaultValue>
                        Role
                      </option>
                      <option>User</option>
                      <option>Worker</option>
                    </select>
                  </div>
                  <div className="form-control">
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
                  </div>
                  <div className="form-control col-span-2">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="url"
                      name="photo"
                      placeholder="Photo URL"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control mt-10">
                  <button className="btn bg-light-primary/70 hover:bg-blue-700 text-white w-full">
                    Register
                  </button>
                </div>
              </form>
              <div className="my-2">
                <p className="text-sm mb-2 text-black">Register with Google</p>
                <button
                  onClick={handleGoogleBtn}
                  className="btn bg-slate-200 hover:bg-slate-400 w-full font-bold text-black"
                >
                  Google <FcGoogle className="text-xl" />
                </button>
              </div>
              <div className="text-sm">
                <p className="text-black">
                  Already Have An Account?
                  <Link
                    to="/login"
                    className="text-light-primary font-bold ml-2"
                  >
                    LogIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full justify-center hidden md:flex">
            <Lottie animationData={register}></Lottie>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
