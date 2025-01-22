import { useRef } from "react";
import Title from "../../../components/Title";
import AddTaskForm from "./components/AddTaskForm";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const imgBB_key = import.meta.env.VITE_IMG_API_key;
const hostingAPI = `https://api.imgbb.com/1/upload?key=${imgBB_key}`;

const AddTask = () => {
  const [userData, userLoading, refetch] = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const formRef = useRef();
  const { user } = useAuth();
  const buyerName = user?.displayName;
  const email = user?.email;
  const navigate = useNavigate();

  // main onsubmit function
  const onSubmit = async (data) => {
    const imgFile = { image: data.photo[0] };

    try {
      const res = await axios.post(hostingAPI, imgFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const image = res?.data?.data?.display_url;
      if (image) {
        const taskData = {
          ...data,
          photo: image,
          email,
          buyerName,
        };
        const res = await axiosSecure.post("/task/add-task", taskData);

        if (res?.data?.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Added Task",
            showConfirmButton: false,
            timer: 1000,
          });
          await refetch();
          navigate("/dashboard/my-added-task");
        } else if (res?.data?.redirectToPurchaseCoin) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Not Enough Coin",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate("/dashboard/purchase-coin");
        }
      }
    } catch (error) {
      console.error("Error in onSubmit:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something Went Wrong!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="Add Task"></Title>
      <div>
        <AddTaskForm
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          errors={errors}
          formRef={formRef}
        ></AddTaskForm>
      </div>
    </div>
  );
};

export default AddTask;
