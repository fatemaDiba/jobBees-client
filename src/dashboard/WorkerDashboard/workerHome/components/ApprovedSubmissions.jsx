const ApprovedSubmissions = ({ totalApprovedSubmissions }) => {
  return (
    <div className="p-10">
      <h2 className="text-2x xl:text-3xl font-bold mb-6 text-gray-800">
        Approved Submissions
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table table-auto w-full bg-white">
          <thead className="bg-gray-200 text-gray-700 text-sm md:text-base">
            <tr>
              <th className="px-4 py-2 text-left">Task Title</th>
              <th className="px-4 py-2 text-left">Payable Amount</th>
              <th className="px-4 py-2 text-left">Buyer Name</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {totalApprovedSubmissions?.map((submission) => {
              return (
                <tr key={submission._id} className="border-b">
                  <td className="px-4 py-2">{submission.task_title}</td>
                  <td className="px-4 py-2">${submission.payable_amount}</td>
                  <td className="px-4 py-2">{submission.buyerName}</td>
                  <td className="px-4 py-2 text-green-500 font-semibold">
                    Approved
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedSubmissions;
