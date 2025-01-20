const BuyerDash = ({ allTasks }) => {
  const { totalTasks, totalRequiredWorkers } = allTasks;

  return (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Tasks Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform ease-in-out hover:shadow-lg">
          <h3 className="text-base md:text-lg font-semibold text-gray-700">
            Total Tasks
          </h3>
          <p className="text-xl md:text-2xl xl:text-3xl font-bold text-light-primary mt-2">
            {totalTasks}
          </p>
        </div>

        {/* Pending Tasks Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform ease-in-out hover:shadow-lg">
          <h3 className="text-base md:text-lg font-semibold text-gray-700">
            Pending Tasks
          </h3>
          <p className="text-xl md:text-2xl xl:text-3xl font-bold text-orange-500 mt-2">
            {totalRequiredWorkers}
          </p>
        </div>

        {/* Total Payment Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform ease-in-out hover:shadow-lg">
          <h3 className="text-base md:text-lg font-semibold text-gray-700">
            Total Payment
          </h3>
          <p className="text-xl md:text-2xl xl:text-3xl font-bold text-green-500 mt-2">
            $0.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyerDash;
