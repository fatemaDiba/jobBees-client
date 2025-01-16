const ReviewTasks = () => {
  //   const [showModal, setShowModal] = useState(false);
  //   const [selectedSubmission, setSelectedSubmission] = useState(null);

  const dummySubmissions = [
    {
      id: "S001",
      workerName: "John Doe",
      taskTitle: "Survey Participation",
      payableAmount: "5",
      submissionDetail: "Survey screenshot uploaded.",
    },
    {
      id: "S002",
      workerName: "Jane Smith",
      taskTitle: "App Testing",
      payableAmount: "10",
      submissionDetail: "Bug report document uploaded.",
    },
  ];
  //   const openModal = (submission) => {
  //     setSelectedSubmission(submission);
  //     setShowModal(true);
  //   };
  //   const closeModal = () => {
  //     setShowModal(false);
  //     setSelectedSubmission(null);
  //   };

  return (
    <div className="">
      <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-5 ">
        Review Submissions
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table-auto w-full bg-white  border border-gray-200">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="py-3 px-4 text-left">Worker Name</th>
              <th className="py-3 px-4 text-left">Task Title</th>
              <th className="py-3 px-4 text-left">Payable Amount</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummySubmissions.map((submission, index) => (
              <tr key={submission.id} className=" hover:bg-gray-50">
                <td className="py-3 px-4">{submission.workerName}</td>
                <td className="py-3 px-4">{submission.taskTitle}</td>
                <td className="py-3 px-4">${submission.payableAmount}</td>
                <td className="py-3 px-4 text-center flex items-center">
                  <button
                    // onClick={() => openModal(submission)}
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2"
                  >
                    View Submission
                  </button>
                  <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Submission Detail
            </h3>
            <p className="text-gray-700 mb-6">
              {selectedSubmission?.submissionDetail}
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ReviewTasks;
