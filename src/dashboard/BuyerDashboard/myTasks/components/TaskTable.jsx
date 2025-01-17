import { FaTrashCan } from "react-icons/fa6";

const TaskTable = ({ myTasks }) => {
  const handleDeleteBtn = (id) => {
    axiosBase.delete("/task/my-task", { id }).then((res) => {});
  };

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-5">
        My Tasks List
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table table-auto w-full min-w-max bg-white border border-gray-200">
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
            {myTasks?.map((task, index) => {
              return (
                <tr
                  key={task._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{task.title}</td>
                  <td className="py-3 px-4">{task.task_details}</td>
                  <td className="py-3 px-4">{task.completion_date}</td>
                  <td className="py-3 px-4">{task.required_workers}</td>
                  <td className="py-3 px-4">{task.payable_amount}</td>
                  <td className="py-3 px-4 flex justify-center items-center">
                    <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2">
                      Update
                    </button>
                    <button
                      onClick={() => {
                        handleDeleteBtn(task._id);
                      }}
                      className="flex items-center gap-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                      Delete <FaTrashCan />
                    </button>
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

export default TaskTable;
