import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Loading from "../../../../loading/Loading";

const UpdateTask = () => {
  const { id } = useParams();
  const axiosBase = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const { data: refData = {}, isLoading } = useQuery({
    queryKey: ["refData", id],
    queryFn: async () => {
      const res = await axiosBase.get(`/task/single-task/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (refData) {
      reset({
        title: refData.title || "",
        task_detail: refData.task_detail || "",
        submission_info: refData.submission_info || "",
      });
    }
  }, [refData]);

  const onSubmit = (data) => {
    axiosBase
      .put(`/task/my-tasks/${id}`, data)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Updated Task",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(-1);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
        });
      });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
          <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-6">
            Update Your Task
          </h2>

          {isLoading ? (
            <p className="text-center text-gray-500">
              <Loading></Loading>
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Task Title */}
              <div>
                <label
                  htmlFor="task_title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  id="task_title"
                  {...register("title", {
                    required: "Task Title Is Required",
                  })}
                  placeholder="e.g., Watch my YouTube video"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm font-semibold">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Task Details */}
              <div>
                <label
                  htmlFor="task_detail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Detail
                </label>
                <textarea
                  id="task_detail"
                  rows="4"
                  {...register("task_detail", {
                    required: "Task Detail Is Required",
                  })}
                  placeholder="Provide a detailed description of the task..."
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
                {errors.task_detail && (
                  <p className="text-red-500 text-sm font-semibold">
                    {errors.task_detail.message}
                  </p>
                )}
              </div>

              {/* Submission Info */}
              <div>
                <label
                  htmlFor="submission_info"
                  className="block text-sm font-medium text-gray-700"
                >
                  Submission Info
                </label>
                <input
                  type="text"
                  id="submission_info"
                  {...register("submission_info", {
                    required: "Submission Info Is Required",
                  })}
                  placeholder="e.g., Upload a screenshot as proof"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.submission_info && (
                  <p className="text-red-500 text-sm font-semibold">
                    {errors.submission_info.message}
                  </p>
                )}
              </div>

              {/* Update Task Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md"
                >
                  Update Task
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
