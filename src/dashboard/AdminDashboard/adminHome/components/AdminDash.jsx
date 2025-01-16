const AdminDash = () => {
  return (
    <div className="p-6">
      <div className="w-11/12 md:container xl:w-10/12 mx-auto">
        <h2 className=" text-xl md:text-3xl font-bold mb-6 text-gray-800">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Total Workers */}
          <div className="bg-white shadow-lg rounded-lg p-6  hover:scale-105 transition-transform ease-in-out">
            <h3 className="text-base md:text-lg font-bold text-gray-700">
              Total Workers
            </h3>
            <p className="text-xl md:text-2xl xl:text-3xl font-semibold text-blue-500 mt-4">
              200
            </p>
          </div>
          {/* Total Buyers */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform ease-in-out">
            <h3 className="text-base md:text-lg font-bold text-gray-700">
              Total Buyers
            </h3>
            <p className="text-xl md:text-2xl xl:text-3xl font-semibold text-green-500 mt-4">
              150
            </p>
          </div>
          {/* Total Coins */}
          <div className="bg-white shadow-lg rounded-lg p-6  hover:scale-105 transition-transform ease-in-out">
            <h3 className="text-base md:text-lg font-bold text-gray-700">
              Total Available Coins
            </h3>
            <p className="text-xl md:text-2xl xl:text-3xl font-semibold text-yellow-500 mt-4">
              12,345
            </p>
          </div>
          {/* Total Payments */}
          <div className="bg-white shadow-lg rounded-lg p-6  hover:scale-105 transition-transform ease-in-out">
            <h3 className="text-base md:text-lg font-bold text-gray-700">
              Total Payments
            </h3>
            <p className="text-xl md:text-2xl xl:text-3xl font-semibold text-red-500 mt-4">
              $45,678
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
