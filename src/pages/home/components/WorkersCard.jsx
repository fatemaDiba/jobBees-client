const WorkersCard = ({ worker }) => {
  return (
    <div className="p-6">
      <div className="bg-gray-100 shadow-md rounded-lg p-4 flex items-center space-x-4 hover:shadow-xl shadow-blue-300 hover:scale-x-105 transition-transform duration-300 ease-in-out">
        <img
          src={worker?.photo}
          alt=""
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg md:text-xl font-semibold">
            {worker?.displayName}
          </h3>
          <p className="text-gray-600">
            Coins:
            <span className="text-yellow-500 font-semibold ml-1">
              {worker?.coin}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkersCard;
