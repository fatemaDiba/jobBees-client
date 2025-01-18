import { Link } from "react-router-dom";

const Card = ({ task }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-2xl transition-shadow flex flex-col">
      <div className="w-72 h-36 mx-auto mb-4">
        <img
          src={task.photo}
          alt="task_img"
          className="rounded-xl w-full h-full object-cover"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">{task.title}</h3>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Buyer:</strong> {task.buyerName}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Completion Date:</strong> {task.completion_date}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Payable Amount:</strong> {task.payable_amount}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <strong>Required Workers:</strong> {task.required_workers}
        </p>
      </div>
      <Link
        to={`/dashboard/task-details/${task._id}`}
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default Card;
