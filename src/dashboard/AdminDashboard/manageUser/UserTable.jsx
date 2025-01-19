import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

const UserTable = ({ allUsers, refetch }) => {
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
          axiosBase.delete(`/user/all-users/${id}`).then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
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
        Manage Users
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-2 md:p-4 text-left">Name</th>
              <th className="p-2 md:p-4 text-left">Email</th>
              <th className="p-2 md:p-4 text-left">Photo</th>
              <th className="p-2 md:p-4 text-left">Role</th>
              <th className="p-2 md:p-4 text-left">Coin</th>
              <th className="p-2 md:p-4 text-center">Action</th>
            </tr>
          </thead>
          {allUsers?.map((user) => {
            return (
              <tbody>
                <tr className="border-b hover:bg-gray-100">
                  <td className="px-4 py-3">{user?.displayName}</td>
                  <td className="px-4 py-3">{user?.email}</td>
                  <td className="px-4 py-3">
                    <img
                      src={user?.photo}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-3">{user?.userType}</td>
                  <td className="px-4 py-3">${user?.coin}</td>
                  <td className="px-4 py-3 ">
                    <div className="flex flex-col md:flex-row justify-center gap-2">
                      <button
                        onClick={() => {
                          handleDeleteBtn(user._id);
                        }}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                      >
                        <FaTrashCan></FaTrashCan>
                      </button>
                      <select className="border  border-gray-300 rounded px-2 py-1">
                        <option disabled selected>
                          Update Role
                        </option>
                        <option value="Admin">Admin</option>
                        <option value="Buyer">Buyer</option>
                        <option value="Worker">Worker</option>
                      </select>
                    </div>
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

export default UserTable;
