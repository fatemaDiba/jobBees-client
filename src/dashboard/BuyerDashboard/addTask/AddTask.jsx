import { useRef } from "react";
import Title from "../../../components/Title";
import useAxios from "../../../hooks/useAxios";
import AddTaskForm from "./components/AddTaskForm";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const imgBB_key = import.meta.env.VITE_IMG_API_key;
const hostingAPI = `https://api.imgbb.com/1/upload?key=${imgBB_key}`;

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosBase = useAxios();
  const formRef = useRef();
  const { user } = useAuth();
  const email = user?.email;

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
        const res = await axiosBase.post("/task/add-task", {
          ...data,
          photo: image,
          email: email,
        });

        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully Added Task",
            showConfirmButton: false,
            timer: 1000,
          });
          formRef.current.reset();
        }
        // navigate(location?.state?.from || "/dashboard");
      } else {
        toast.error("Failed to upload image. Try again.");
      }
    } catch (error) {
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
