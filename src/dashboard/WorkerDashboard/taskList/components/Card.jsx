const Card = () => {
  const tasks = [
    {
      id: 1,
      taskTitle: "Watch YouTube Video",
      buyerName: "John Doe",
      completionDate: "2025-01-20",
      payableAmount: "$10",
      requiredWorkers: 5,
    },
    {
      id: 2,
      taskTitle: "Write Blog Post",
      buyerName: "Jane Smith",
      completionDate: "2025-01-22",
      payableAmount: "$15",
      requiredWorkers: 3,
    },
    {
      id: 3,
      taskTitle: "Share on Instagram",
      buyerName: "Mike Johnson",
      completionDate: "2025-01-25",
      payableAmount: "$20",
      requiredWorkers: 10,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 text-gray-800">
        Available Tasks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {task.taskTitle}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Buyer:</strong> {task.buyerName}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Completion Date:</strong> {task.completionDate}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Payable Amount:</strong> {task.payableAmount}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Required Workers:</strong> {task.requiredWorkers}
            </p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
