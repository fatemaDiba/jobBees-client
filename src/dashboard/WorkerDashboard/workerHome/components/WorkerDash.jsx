const WorkerDash = ({ totalSubmissions, totalPending, totalEarnings }) => {
  return (
    <div className="p-10">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 text-gray-800">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Submissions Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform ease-in-out">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Total Submissions
          </h3>
          <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-blue-500">
            {totalSubmissions}
          </p>
        </div>

        {/* Total Pending Submissions Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform ease-in-out">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Pending Submissions
          </h3>
          <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-orange-500">
            {totalPending}
          </p>
        </div>

        {/* Total Earnings Card */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:scale-105 transition-transform ease-in-out">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
            Total Earnings
          </h3>
          <p className="text-2xl md:text-3xl xl:text-4xl font-bold text-green-500">
            ${totalEarnings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkerDash;
