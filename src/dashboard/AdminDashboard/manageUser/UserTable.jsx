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

  const handleRole = (id, e) => {
    const selectedRole = e.target.value;

    axiosBase
      .patch(`/user/all-users/${id}`, { userType: selectedRole })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Updated!",
            text: "User Role has been Updated.",
            icon: "success",
            timer: 1000,
          });
          refetch();
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          timer: 1000,
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
          <tbody>
            {allUsers?.map((user) => {
              return (
                <tr key={user?._id} className="border-b hover:bg-gray-100">
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
                      <select
                        onChange={(e) => {
                          handleRole(user?._id, e);
                        }}
                        defaultValue=""
                        className="border  border-gray-300 rounded px-2 py-1"
                      >
                        <option value="" disabled>
                          Update Role
                        </option>
                        <option value="admin">Admin</option>
                        <option value="buyer">Buyer</option>
                        <option value="worker">Worker</option>
                      </select>
                    </div>
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

export default UserTable;
