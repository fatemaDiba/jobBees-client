import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";

const WithdrawalRequests = () => {
  const { user } = useAuth();
  const axiosBase = useAxios();

  const { data: allWithdraw = [], refetch } = useQuery({
    queryKey: ["allWithdraw"],
    queryFn: async () => {
      const res = await axiosBase.get("/withdraw/all-withdraws");
      return res.data;
    },
    enabled: !!user?.email,
  });

  const handlePaymentBtn = (id) => {
    axiosBase
      .patch(`/withdraw/all-withdraws/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Updated!",
            text: "User Role has been Updated.",
            icon: "success",
            timer: 1000,
          });
          refetch();
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
    <div className="p-4 md:p-10">
      <h2 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
        Pending Withdrawal Requests
      </h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="table-auto w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-xs md:text-sm uppercase">
              <th className="p-2 md:p-4 border">User Email</th>
              <th className="p-2 md:p-4 border">Amount</th>
              <th className="p-2 md:p-4 border">Request Date</th>
              <th className="p-2 md:p-4 border">Status</th>
              <th className="p-2 md:p-4 border">Action</th>
            </tr>
          </thead>
          {allWithdraw?.map((withdraw) => {
            return (
              <tbody>
                <tr className="text-gray-800 text-xs md:text-sm">
                  <td className="p-2 md:p-4 border truncate">
                    {withdraw?.worker_email}
                  </td>
                  <td className="p-2 md:p-4 border">
                    ${withdraw?.withdrawal_amount}
                  </td>
                  <td className="p-2 md:p-4 border">
                    {withdraw?.withdrawal_date}
                  </td>
                  <td className="p-2 md:p-4 border">{withdraw?.status}</td>
                  <td className="p-2 md:p-4 border">
                    <button
                      onClick={() => {
                        handlePaymentBtn(withdraw?._id);
                      }}
                      disabled={withdraw?.status === "Approved"}
                      className={`px-3 py-1 md:px-4 md:py-2 text-white rounded ${
                        withdraw?.status === "Approved"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-light-primary hover:bg-blue-600"
                      }`}
                    >
                      Payment Success
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default WithdrawalRequests;
