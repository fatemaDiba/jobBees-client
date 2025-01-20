import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../loading/Loading";

const MySubmission = () => {
  const axiosBase = useAxios();
  const { user } = useAuth();

  const { data: mySubmission = [], isLoading } = useQuery({
    queryKey: ["mySubmission", user?.email],
    queryFn: async () => {
      const res = await axiosBase.get(
        `/submission/my-submissions/${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "approved":
        return "text-green-500 bg-green-100";
      case "pending":
        return "text-yellow-500 bg-yellow-100";
      case "rejected":
        return "text-red-500 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
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
                  {mySubmission?.map((submission) => {
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
                          className={`px-4 py-2 border-t font-bold rounded ${getStatusClass(
                            submission?.status
                          )}`}
                        >
                          {submission.status}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubmission;
