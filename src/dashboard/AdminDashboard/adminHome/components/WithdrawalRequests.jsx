const WithdrawalRequests = () => {
  return (
    <div className="p-10">
      <h2 className=" text-xl md:text-2xl font-bold mb-6 text-gray-800">
        Pending Withdrawal Requests
      </h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm uppercase">
              <th className="p-4 border">User Email</th>
              <th className="p-4 border">Amount</th>
              <th className="p-4 border">Request Date</th>
              <th className="p-4 border">Status</th>
              <th className="p-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-800 text-sm">
              <td className="p-4 border">user1@example.com</td>
              <td className="p-4 border">$50.00</td>
              <td className="p-4 border">2025-01-15</td>
              <td className="p-4 border">Pending</td>
              <td className="p-4 border">
                <button className="px-4 py-2 text-white bg-light-primary hover:bg-blue-600 rounded">
                  Payment Success
                </button>
              </td>
            </tr>
            <tr className="text-gray-800 text-sm">
              <td className="p-4 border">user2@example.com</td>
              <td className="p-4 border">$75.00</td>
              <td className="p-4 border">2025-01-14</td>
              <td className="p-4 border">Pending</td>
              <td className="p-4 border">
                <button className="px-4 py-2 text-white bg-light-primary hover:bg-blue-600 rounded">
                  Payment Success
                </button>
              </td>
            </tr>
            <tr className="text-gray-800 text-sm">
              <td className="p-4 border">user3@example.com</td>
              <td className="p-4 border">$120.00</td>
              <td className="p-4 border">2025-01-13</td>
              <td className="p-4 border">Pending</td>
              <td className="p-4 border">
                <button className="px-4 py-2 text-white bg-light-primary hover:bg-blue-600 rounded">
                  Payment Success
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawalRequests;
