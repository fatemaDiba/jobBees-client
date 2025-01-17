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
        <table className="table-auto w-full bg-white  border border-gray-200 min-w-full">
          <thead className="bg-gray-200">
            <tr className=" text-gray-700 text-xs md:text-sm">
              <th className="py-2 md:py-3 px-2 md:px-4 text-left min-w-[150px]">
                Worker Name
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-left min-w-[200px]">
                Task Title
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-left min-w-[150px]">
                Payable Amount
              </th>
              <th className="py-2 md:py-3 px-2 md:px-4 text-center min-w-[200px]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {dummySubmissions.map((submission, index) => (
              <tr
                key={submission.id}
                className=" hover:bg-gray-50 text-xs md:text-sm"
              >
                <td className="py-2 md:py-3 px-2 md:px-4">
                  {submission.workerName}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-4">
                  {submission.taskTitle}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-4">
                  ${submission.payableAmount}
                </td>
                <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                  <div className="flex flex-col md:flex-row justify-center gap-2">
                    <button
                      // onClick={() => openModal(submission)}
                      className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2"
                    >
                      View Submission
                    </button>
                    <button className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 mr-2">
                      Approve
                    </button>
                    <button className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mr-2 md:mr-0 ">
                      Reject
                    </button>
                  </div>
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
