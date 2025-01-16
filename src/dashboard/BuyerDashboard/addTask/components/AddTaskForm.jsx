const AddTaskForm = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-6">
          Add a New Task
        </h2>
        <form className="space-y-6">
          {/* Task Title */}
          <div>
            <label
              htmlFor="task_title"
              className="block text-sm font-medium text-gray-700"
            >
              Task Title
            </label>
            <input
              type="text"
              id="task_title"
              placeholder="e.g., Watch my YouTube video and leave a comment"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Task Detail */}
          <div>
            <label
              htmlFor="task_detail"
              className="block text-sm font-medium text-gray-700"
            >
              Task Detail
            </label>
            <textarea
              id="task_detail"
              rows="4"
              placeholder="Provide a detailed description of the task..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Required Workers */}
          <div>
            <label
              htmlFor="required_workers"
              className="block text-sm font-medium text-gray-700"
            >
              Required Workers
            </label>
            <input
              type="number"
              id="required_workers"
              placeholder="e.g., 100"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Payable Amount */}
          <div>
            <label
              htmlFor="payable_amount"
              className="block text-sm font-medium text-gray-700"
            >
              Payable Amount (per worker)
            </label>
            <input
              type="number"
              id="payable_amount"
              placeholder="e.g., 5"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Completion Date */}
          <div>
            <label
              htmlFor="completion_date"
              className="block text-sm font-medium text-gray-700"
            >
              Completion Date
            </label>
            <input
              type="date"
              id="completion_date"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submission Info */}
          <div>
            <label
              htmlFor="submission_info"
              className="block text-sm font-medium text-gray-700"
            >
              Submission Info
            </label>
            <input
              type="text"
              id="submission_info"
              placeholder="e.g., Upload a screenshot as proof"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Task Image URL */}
          <div>
            <label
              htmlFor="task_image_url"
              className="block text-sm font-medium text-gray-700"
            >
              Task Image URL
            </label>
            <input
              type="url"
              id="task_image_url"
              placeholder="Paste an image URL to attract workers"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Add Task Button */}
          <div>
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
