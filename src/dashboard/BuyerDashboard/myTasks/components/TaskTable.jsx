import { FaTrashCan } from "react-icons/fa6";

const TaskTable = () => {
  const dummyTasks = [
    {
      id: "T001",
      title: "Blog Writing",
      detail: "Write a blog about climate change",
      completionDate: "2025-02-15",
      requiredWorkers: 50,
      payableAmount: "$10",
    },
    {
      id: "T002",
      title: "App Testing",
      detail: "Test the new mobile app and report bugs",
      completionDate: "2025-02-10",
      requiredWorkers: 30,
      payableAmount: "$15",
    },
  ];

  return (
    <div className="">
      <h2 className="text-2x xl:text-3xl font-bold text-gray-800 mb-5">
        My Tasks List
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full bg-white border border-gray-200">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Details</th>
              <th className="py-3 px-4 text-left">Completion Date</th>
              <th className="py-3 px-4 text-left">Required Workers</th>
              <th className="py-3 px-4 text-left">Payable Amount</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* backend a sort korbo */}
            {dummyTasks
              .sort(
                (a, b) =>
                  new Date(b.completionDate) - new Date(a.completionDate)
              )
              .map((task, index) => (
                <tr
                  key={task.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="py-3 px-4">{task.id}</td>
                  <td className="py-3 px-4">{task.title}</td>
                  <td className="py-3 px-4">{task.detail}</td>
                  <td className="py-3 px-4">{task.completionDate}</td>
                  <td className="py-3 px-4">{task.requiredWorkers}</td>
                  <td className="py-3 px-4">{task.payableAmount}</td>
                  <td className="py-3 px-4 flex justify-center items-center">
                    <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2">
                      Update
                    </button>
                    <button className="flex items-center gap-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                      Delete <FaTrashCan></FaTrashCan>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
