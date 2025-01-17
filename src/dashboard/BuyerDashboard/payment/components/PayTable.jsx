const PayTable = () => {
  const dummyPayments = [
    {
      id: "P001",
      date: "2025-01-10",
      taskTitle: "Blog Writing",
      amount: "$100",
      status: "Completed",
    },
    {
      id: "P002",
      date: "2025-01-12",
      taskTitle: "Logo Design",
      amount: "$250",
      status: "Completed",
    },
    {
      id: "P003",
      date: "2025-01-14",
      taskTitle: "Website Development",
      amount: "$500",
      status: "Pending",
    },
  ];

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-5">
        Payment History
      </h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
        <table className="table-auto w-full min-w-max">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Payment ID</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Task Title</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyPayments.map((payment, index) => (
              <tr
                key={payment.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="py-3 px-4">{payment.id}</td>
                <td className="py-3 px-4">{payment.date}</td>
                <td className="py-3 px-4">{payment.taskTitle}</td>
                <td className="py-3 px-4">{payment.amount}</td>
                <td
                  className={`py-3 px-4 font-semibold ${
                    payment.status === "Completed"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayTable;
