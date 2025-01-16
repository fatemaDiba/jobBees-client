import { FaTrashCan } from "react-icons/fa6";

const UserTable = () => {
  return (
    <div className="p-10">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 text-gray-800">
        Manage Users
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Photo</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Coin</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Example User Row */}
            <tr className="border-b hover:bg-gray-100">
              <td className="px-4 py-3">John Doe</td>
              <td className="px-4 py-3">johndoe@example.com</td>
              <td className="px-4 py-3">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-4 py-3">
                <select className="border border-gray-300 rounded px-2 py-1">
                  <option value="Admin">Admin</option>
                  <option value="Buyer">Buyer</option>
                  <option value="Worker" selected>
                    Worker
                  </option>
                </select>
              </td>
              <td className="px-4 py-3">$500</td>
              <td className="px-4 py-3">
                <button className="flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2">
                  Remove <FaTrashCan></FaTrashCan>
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                  Update Role
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
