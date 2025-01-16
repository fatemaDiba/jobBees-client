const SubmissionTable = () => {
  const submissions = [
    {
      id: 1,
      taskTitle: "Watch YouTube Video",
      buyerName: "John Doe",
      payableAmount: "$10",
      status: "Approved",
    },
    {
      id: 2,
      taskTitle: "Write Blog Post",
      buyerName: "Jane Smith",
      payableAmount: "$15",
      status: "Pending",
    },
    {
      id: 3,
      taskTitle: "Share on Instagram",
      buyerName: "Mike Johnson",
      payableAmount: "$20",
      status: "Rejected",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-500 bg-green-100";
      case "Pending":
        return "text-yellow-500 bg-yellow-100";
      case "Rejected":
        return "text-red-500 bg-red-100";
      default:
        return "text-gray-500 bg-gray-100";
    }
  };

  return (
    <div className="p-6">
      <h2 className="text=xl md:text-2xl xl:text-3xl font-bold mb-6 text-gray-800">
        My Submissions
      </h2>
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-200">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-gray-600 font-semibold">
                Task Title
              </th>
              <th className="px-4 py-2 text-gray-600 font-semibold">
                Buyer Name
              </th>
              <th className="px-4 py-2 text-gray-600 font-semibold">
                Payable Amount
              </th>
              <th className="px-4 py-2 text-gray-600 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-t">{submission.taskTitle}</td>
                <td className="px-4 py-2 border-t">{submission.buyerName}</td>
                <td className="px-4 py-2 border-t">
                  {submission.payableAmount}
                </td>
                <td
                  className={`px-4 py-2 border-t font-bold rounded ${getStatusClass(
                    submission.status
                  )}`}
                >
                  {submission.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTable;
