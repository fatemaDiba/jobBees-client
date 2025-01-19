import { FaTrashCan } from "react-icons/fa6";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";

const TaskTable = ({ allTasks, refetch }) => {
  const axiosBase = useAxios();
  const handleDeleteBtn = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosBase.delete(`/task/all-tasks/${id}`).then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
                timer: 1000,
              });
              refetch();
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
        });
      });
  };

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
          {allTasks?.map((task) => {
            return (
              <tbody>
                <tr className="border-b hover:bg-gray-100 text-xs md:text-sm">
                  <td className="px-4 py-3">{task?.title}</td>
                  <td className=" px-4 py-3">{task?.task_detail}</td>
                  <td className="px-4 py-3">{task?.required_workers}</td>
                  <td className="px-4 py-3">${task?.payable_amount}</td>
                  <td className="px-4 py-3">{task?.completion_date}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => {
                        handleDeleteBtn(task._id);
                      }}
                      className="bg-red-500 flex gap-2 items-center text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete<FaTrashCan></FaTrashCan>
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

export default TaskTable;
