import { FaTrashCan } from "react-icons/fa6";

const TaskTable = () => {
  return (
    <div className="p-10">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 text-gray-800">
        Task List
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white text-sm md:text-base">
            <tr>
              <th className="p-2 md:p-4 min-w-[200px] text-left">Task Title</th>
              <th className="p-2 md:p-4 min-w-[150px] text-left">Details</th>
              <th className="p-2 md:p-4 min-w-[150px] text-left">
                Workers Needed
              </th>
              <th className="p-2 md:p-4  min-w-[150px] text-left">
                Payable Amount
              </th>
              <th className="p-2 md:p-4 min-w-[150px] text-left">
                Completion Date
              </th>
              <th className="p-2 md:p-4  min-w-[150px] text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Task Row */}
            <tr className="border-b hover:bg-gray-100 text-xs md:text-sm">
              <td className="px-4 py-3">Watch YouTube Video</td>
              <td className=" px-4 py-3">Comment on the video</td>
              <td className="px-4 py-3">100</td>
              <td className="px-4 py-3">$10</td>
              <td className="px-4 py-3">2025-02-01</td>
              <td className="px-4 py-3">
                <button className="bg-red-500 flex gap-2 items-center text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete<FaTrashCan></FaTrashCan>
                </button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
