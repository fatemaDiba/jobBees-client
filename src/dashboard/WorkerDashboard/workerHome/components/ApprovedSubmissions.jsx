const ApprovedSubmissions = () => {
  return (
    <div className="p-10">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">
        Approved Submissions
      </h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Task Title</th>
              <th className="px-4 py-2 text-left">Payable Amount</th>
              <th className="px-4 py-2 text-left">Buyer Name</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row 1 */}
            <tr className="border-b">
              <td className="px-4 py-2">Watch Video & Comment</td>
              <td className="px-4 py-2">$10</td>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2 text-green-500 font-semibold">
                Approved
              </td>
            </tr>
            {/* Example Row 2 */}
            <tr className="border-b">
              <td className="px-4 py-2">Write a Blog Post</td>
              <td className="px-4 py-2">$15</td>
              <td className="px-4 py-2">Alice Smith</td>
              <td className="px-4 py-2 text-green-500 font-semibold">
                Approved
              </td>
            </tr>
            {/* Example Row 3 */}
            <tr>
              <td className="px-4 py-2">Share Post on Instagram</td>
              <td className="px-4 py-2">$20</td>
              <td className="px-4 py-2">Mike Johnson</td>
              <td className="px-4 py-2 text-green-500 font-semibold">
                Approved
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedSubmissions;
