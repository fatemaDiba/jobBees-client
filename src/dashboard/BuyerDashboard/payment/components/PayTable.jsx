const PayTable = ({ paymentHistory }) => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-5">
        Payment History
      </h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg border border-gray-200">
        <table className="table-auto w-full min-w-max">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">User Email</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory?.map((payment, index) => {
              return (
                <tr
                  key={payment._id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <td className="py-3 px-4">{payment.email}</td>
                  <td className="py-3 px-4">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-green-600 font-semibold">
                    ${payment.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayTable;
