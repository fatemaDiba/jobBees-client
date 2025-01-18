const DetailCard = ({ singleTask }) => {
  const {
    title,
    buyerName,
    completion_date,
    payable_amount,
    required_workers,
    photo,
  } = singleTask;

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Task Details Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Task Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={photo}
              alt=""
              className="w-full rounded-lg object-cover shadow-md"
            />
          </div>
          {/* Task Info */}
          <div className="lg:w-1/2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Task Title:
              </h3>
              <p className="text-gray-600">{title}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Buyer Name:
              </h3>
              <p className="text-gray-600">{buyerName}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Completion Date:
              </h3>
              <p className="text-gray-600">{completion_date}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Payable Amount:
              </h3>
              <p className="text-gray-600">${payable_amount}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Required Workers:
              </h3>
              <p className="text-gray-600">{required_workers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Form */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-6 text-center">
          Submit Your Work
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="submission_Details"
              className="block text-sm font-medium text-gray-700"
            >
              Submission Details
            </label>
            <textarea
              id="submission_Details"
              rows="5"
              placeholder="Write the details about your submission..."
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-md"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailCard;
