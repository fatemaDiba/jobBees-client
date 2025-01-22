import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import register1 from "../../assets/register.json";
import useAuth from "../../hooks/useAuth";
import Title from "../../components/Title";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";

const imgBB_key = import.meta.env.VITE_IMG_API_key;
const hostingAPI = `https://api.imgbb.com/1/upload?key=${imgBB_key}`;

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { newUser, setLoading, updateUser } = useAuth();
  const navigate = useNavigate();
  const axiosBase = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleShowPass = () => setShowPass(!showPass);

  const onSubmit = async (data) => {
    const { name, email, password, role } = data;
    const imgFile = data.photo[0];

    if (!imgFile) {
      toast.error("Please upload a photo");
      return;
    }

    try {
      const formData = new FormData(); //img er jonno
      formData.append("image", imgFile);
      const res = await axios.post(hostingAPI, formData); //fetch kore img antese
      const image = res?.data?.data?.display_url;

      if (image) {
        const userRes = await newUser(email, password);
        await updateUser(name, image);

        const userData = { email, displayName: name, role, photo: image };
        const res = await axiosBase.post("/user/add", userData);

        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully created user",
            showConfirmButton: false,
            timer: 1000,
          });
          setLoading(false);
          navigate("/dashboard/home", { replace: true });
        }
      } else {
        toast.error("Failed to upload image. Try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something Went Wrong!",
        showConfirmButton: false,
        timer: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Title title="Register" />
      <div className="w-11/12 sm:container xl:w-10/12 mx-auto mb-14 mt-32">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="card bg-light-secondary/50 shadow-2xl">
            <div className="card-body dark:text-white">
              <h2 className="font-bold text-center text-2xl md:text-4xl mb-6">
                <span className="text-light-primary">Register</span> Now
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-3">
                  {/* Name Input */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered"
                      {...register("email", {
                        required: "Please provide a valid email",
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Role Selection */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Role</span>
                    </label>
                    <select
                      className="select select-bordered w-full"
                      defaultValue=""
                      {...register("role", {
                        required: "Please select a role",
                      })}
                    >
                      <option disabled value="">
                        Select Role
                      </option>
                      <option value="buyer">Buyer</option>
                      <option value="worker">Worker</option>
                    </select>
                    {errors.role && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.role.message}
                      </p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        className="input input-bordered w-full"
                        {...register("password", {
                          required: "Password is required",
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            message:
                              "Password must be at least 6 characters long and include one uppercase letter",
                          },
                        })}
                      />
                      <div
                        onClick={handleShowPass}
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                      >
                        {showPass ? (
                          <FaEye className="text-lg text-black/80" />
                        ) : (
                          <FaEyeSlash className="text-lg text-black/80" />
                        )}
                      </div>
                    </div>
                    {errors.password && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Photo Upload */}
                  <div className="form-control col-span-2">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-bordered w-full"
                      {...register("photo", { required: "Photo is required" })}
                    />
                    {errors.photo && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.photo.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="form-control mt-7">
                  <button className="btn bg-light-primary/70 hover:bg-blue-700 text-white w-full">
                    Register
                  </button>
                </div>
              </form>

              {/* Login Redirect */}
              <div className="text-sm mt-4">
                <p className="text-black">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-light-primary font-bold ml-2"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="w-full justify-center hidden md:flex">
            <Lottie animationData={register1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
