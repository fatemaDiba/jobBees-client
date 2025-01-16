const WithdrawForm = () => {
  const user = {
    coins: 300, // Example total coins
  };

  const coinsToDollarRate = 20; // Conversion rate
  const minWithdrawCoins = 200; // Minimum coins to withdraw = $10

  const isEligibleForWithdrawal = user.coins >= minWithdrawCoins;

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200 p-6">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-6">
          Withdrawal Form
        </h2>

        {isEligibleForWithdrawal ? (
          <form className="flex flex-col gap-4">
            {/* Coin to Withdraw */}
            <div>
              <label
                htmlFor="coinToWithdraw"
                className="block text-gray-600 font-medium mb-2"
              >
                Coin To Withdraw
              </label>
              <input
                type="number"
                id="coinToWithdraw"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter coin amount"
                max={user.coins}
              />
              <p className="text-sm text-gray-500 mt-1">
                You have {user.coins} coins available.
              </p>
            </div>

            {/* Withdrawal Amount */}
            <div>
              <label
                htmlFor="withdrawAmount"
                className="block text-gray-600 font-medium mb-2"
              >
                Withdraw Amount ($)
              </label>
              <input
                type="number"
                id="withdrawAmount"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="$0.00"
                readOnly
              />
            </div>

            {/* Payment System */}
            <div>
              <label
                htmlFor="paymentSystem"
                className="block text-gray-600 font-medium mb-2"
              >
                Select Payment System
              </label>
              <select
                id="paymentSystem"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select</option>
                <option value="bkash">Bkash</option>
                <option value="rocket">Rocket</option>
                <option value="nagad">Nagad</option>
                <option value="other">Other</option>
              </select>
            </div>
            {/* Account Number */}
            <div>
              <label
                htmlFor="accountNumber"
                className="block text-gray-600 font-medium mb-2"
              >
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter account number"
              />
            </div>
            {/* Withdraw Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Withdraw
            </button>
          </form>
        ) : (
          <p className="text-center text-red-600 font-semibold">
            Insufficient coins. You need at least {minWithdrawCoins} coins to
            withdraw.
          </p>
        )}
      </div>
    </div>
  );
};

export default WithdrawForm;
