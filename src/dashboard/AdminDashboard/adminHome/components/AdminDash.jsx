const AdminDash = ({ totalWorkers, totalBuyers }) => {
  return (
    <div className="p-4 md:p-6 lg:p-10">
      <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-gray-800">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {/* Total Workers */}
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 hover:scale-105 transition-transform ease-in-out">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-700">
            Total Workers
          </h3>
          <p className="text-lg md:text-xl xl:text-2xl font-semibold text-blue-500 mt-2 md:mt-4">
            {totalWorkers}
          </p>
        </div>
        {/* Total Buyers */}
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 hover:scale-105 transition-transform ease-in-out">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-700">
            Total Buyers
          </h3>
          <p className="text-lg md:text-xl xl:text-2xl font-semibold text-green-500 mt-2 md:mt-4">
            {totalBuyers}
          </p>
        </div>
        {/* Total Coins */}
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 hover:scale-105 transition-transform ease-in-out">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-700">
            Total Available Coins
          </h3>
          <p className="text-lg md:text-xl xl:text-2xl font-semibold text-yellow-500 mt-2 md:mt-4">
            12,345
          </p>
        </div>
        {/* Total Payments */}
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 hover:scale-105 transition-transform ease-in-out">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-700">
            Total Payments
          </h3>
          <p className="text-lg md:text-xl xl:text-2xl font-semibold text-red-500 mt-2 md:mt-4">
            $45,678
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
