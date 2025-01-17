const AddTaskForm = ({ register, handleSubmit, errors, formRef }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
        <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-6">
          Add a New Task
        </h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
              {...register("title", {
                required: "Task Title Is Required",
              })}
              placeholder="e.g., Watch my YouTube video"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.title.message}
              </p>
            )}
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
              {...register("task_detail", {
                required: "Task Detail Is Required",
              })}
              placeholder="Provide a detailed description of the task..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.task_detail && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.task_detail.message}
              </p>
            )}
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
              min={1}
              {...register("required_workers", {
                required: "Required Workers Number Is Required",
                min: {
                  value: 1,
                  message: "Minimum value is 1",
                },
              })}
              placeholder="e.g., 100"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.required_workers && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.required_workers.message}
              </p>
            )}
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
              min={1}
              {...register("payable_amount", {
                required: "Payable_amount Is Required",
                min: {
                  value: 1,
                  message: "Minimum value is 1", // Custom error message
                },
              })}
              placeholder="e.g., 5"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.payable_amount && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.payable_amount.message}
              </p>
            )}
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
              {...register("completion_date", {
                required: "Completion_date Is Required",
              })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.completion_date && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.completion_date.message}
              </p>
            )}
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
              {...register("submission_info", {
                required: "submission_info Is Required",
              })}
              placeholder="e.g., Upload a screenshot as proof"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.submission_info && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.submission_info.message}
              </p>
            )}
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
              type="file"
              id="task_image_url"
              {...register("photo", {
                required: "Task Image Is Required",
              })}
              placeholder="Paste an image URL to attract workers"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm font-semibold">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Add Task Button */}
          <div>
            <button
              type="submit"
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
