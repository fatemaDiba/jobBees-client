import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const DetailCard = ({ singleTask }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    _id,
    title,
    email,
    buyerName,
    completion_date,
    payable_amount,
    required_workers,
    photo,
  } = singleTask;
  const axiosBase = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { submission_Details } = data;
    const currentDate = new Date().toISOString();

    const submissionData = {
      task_id: _id,
      task_title: title,
      payable_amount: payable_amount,
      submissionDetails: submission_Details,
      buyerName: buyerName,
      buyerEmail: email,
      workerName: user?.displayName,
      workerEmail: user?.email,
      submissionDate: currentDate,
      status: "Pending",
    };

    try {
      const res = await axiosBase.post(
        "/submission/all-submission",
        submissionData
      );
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Submission Successful!",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(location?.state?.from || "/dashboard/my-submission");
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to Save Submission",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white shadow-lg  rounded-lg p-6 mb-8  md:max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* Task Image */}
          <div className="w-72 h-72 flex justify-center">
            <img
              src={photo}
              alt=""
              className="w-full h-full rounded-lg object-cover shadow-md"
            />
          </div>
          {/* Task Info */}
          <div className="lg:w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-700">
                Task Title:
              </h3>
              <p className="text-gray-600">{title}</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">
                Buyer Name:
              </h3>
              <p className="text-gray-600 text-sm md:text-base">{buyerName}</p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">
                Completion Date:
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {completion_date}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">
                Payable Amount:
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                ${payable_amount}
              </p>
            </div>
            <div className="flex items-center  gap-2">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">
                Required Workers:
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                {required_workers}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto hover:scale-105 transition-transform delay-300 ease-in">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-800 mb-6 text-center">
          Submit Your Work
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="submission_Details"
              className="block text-sm font-medium text-gray-700"
            >
              Submission Details
            </label>
            <textarea
              id="submission_Details"
              rows="5"
              {...register("submission_Details", {
                required: "Submission Details is required",
              })}
              placeholder="Write the details about your submission..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.submission_Details && (
              <p className="text-red-600 text-sm mt-1">
                {errors.submission_Details.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-md"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailCard;
