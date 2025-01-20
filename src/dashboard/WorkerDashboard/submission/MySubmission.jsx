import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../loading/Loading";

const MySubmission = () => {
  const axiosBase = useAxios();
  const { user } = useAuth();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const { data, isLoading } = useQuery({
    queryKey: ["mySubmission", user?.email, currentPage],
    queryFn: async () => {
      const res = await axiosBase.get(
        `/submission/my-submissions/${user?.email}?page=${currentPage}&limit=${itemsPerPage}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="My Submissions"></Title>
      <div>
        <div>
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 text-gray-800">
            My Submissions
          </h2>
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
            {isLoading ? (
              <Loading></Loading>
            ) : (
              <>
                <table className="table-auto w-full text-left min-w-max">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-gray-600 font-semibold">
                        Task Title
                      </th>
                      <th className="px-4 py-2 text-gray-600 font-semibold">
                        Buyer Name
                      </th>
                      <th className="px-4 py-2 text-gray-600 font-semibold">
                        Payable Amount
                      </th>
                      <th className="px-4 py-2 text-gray-600 font-semibold">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data?.submissions.map((submission) => {
                      return (
                        <tr key={submission?._id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border-t">
                            {submission?.task_title}
                          </td>
                          <td className="px-4 py-2 border-t">
                            {submission?.buyerName}
                          </td>
                          <td className="px-4 py-2 border-t">
                            {submission?.payable_amount}
                          </td>
                          <td
                            className={`px-4 py-2 border-t font-bold rounded ${
                              submission?.status === "approved"
                                ? "text-green-500 bg-green-100"
                                : submission?.status === "pending"
                                ? "text-yellow-500 bg-yellow-100"
                                : "text-red-500 bg-red-100"
                            }`}
                          >
                            {submission.status}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </>
            )}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-8 px-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-2 py-2 rounded bg-blue-500 text-sm text-white ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              } hover:bg-blue-600 transition`}
            >
              Previous
            </button>
            <span className="text-gray-700 text-sm font-medium">
              Page {currentPage} of {data?.totalPages || 1}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === data?.totalPages}
              className={`px-2 py-2 rounded bg-blue-500 text-sm text-white ${
                currentPage === data?.totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } hover:bg-blue-600 transition`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubmission;
