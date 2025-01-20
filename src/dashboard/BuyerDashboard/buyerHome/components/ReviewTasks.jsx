import { useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";

const ReviewTasks = ({ allSubmissions, refetch, taskRefetch }) => {
  const axiosBase = useAxios();
  const [showModal, setShowModal] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const openModal = (submission) => {
    setSelectedSubmission(submission);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedSubmission(null);
  };

  const handleApprove = (id) => {
    axiosBase
      .patch(`/submission/all-submissions/approve/${id}`)
      .then((res) => {
        if (res.data.submissionUpdate) {
          Swal.fire({
            title: "Approved!",
            text: "Submission has been Approved.",
            icon: "success",
            timer: 1500,
          });
          refetch();
          taskRefetch();
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          timer: 1000,
        });
      });
  };

  const handleReject = (id) => {
    axiosBase
      .patch(`/submission/all-submissions/reject/${id}`)
      .then((res) => {
        if (res.data.reject) {
          Swal.fire({
            title: "Rejected!",
            text: "Submission has been Rejected.",
            icon: "success",
            timer: 1500,
          });
          refetch();
          taskRefetch();
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          timer: 1000,
        });
      });
  };

  return (
    <div className="">
      <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-5 ">
        Review Submissions
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table-auto w-full bg-white  border border-gray-200 min-w-max">
          <thead className="bg-gray-200">
            <tr className=" text-gray-700 text-xs md:text-sm">
              <th className="py-2 md:py-3 px-2 md:px-4 text-left">
                Worker Name
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-left">
                Task Title
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-left">
                Payable Amount
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-left">Status</th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allSubmissions?.map((submission) => (
              <tr
                key={submission._id}
                className=" hover:bg-gray-50 text-xs md:text-sm"
              >
                <td className="py-2 md:py-3 px-2 md:px-4">
                  {submission.workerName}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-4">
                  {submission.task_title}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-4">
                  ${submission.payable_amount}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-4">
                  {submission.status}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                  <div className="flex flex-col md:flex-row justify-center gap-2">
                    <button
                      onClick={() => openModal(submission)}
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2"
                    >
                      View Submission
                    </button>
                    {submission.status === "pending" && (
                      <div>
                        {" "}
                        <button
                          onClick={() => {
                            handleApprove(submission?._id);
                          }}
                          className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => {
                            handleReject(submission?._id);
                          }}
                          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mr-2 md:mr-0 "
                        >
                          Reject
                        </button>
                      </div>
                    )}
                    {submission.status === "approved" && (
                      <button
                        disabled
                        className="bg-green-300 text-white py-1 px-3 rounded cursor-not-allowed"
                      >
                        Approved
                      </button>
                    )}
                    {submission.status === "rejected" && (
                      <button
                        disabled
                        className="bg-red-300 text-white py-1 px-3 rounded cursor-not-allowed"
                      >
                        Rejected
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Submission Detail
            </h3>
            <p className="text-gray-700 mb-6">
              {selectedSubmission?.submissionDetails}
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewTasks;
