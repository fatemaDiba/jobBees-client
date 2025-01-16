const TotalEarning = () => {
  const user = {
    coins: 300, // Example coin
  };

  const coinsToDollarRate = 20; // 20 coins = 1 dollar
  const minWithdrawCoins = 200; // Minimum coins for withdrawal = 10$

  const withdrawalAmount = (user.coins / coinsToDollarRate).toFixed(2);
  const isEligibleForWithdrawal = user.coins >= minWithdrawCoins;

  return (
    <div className="p-6 flex flex-col justify-center ">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-200 p-6">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-4">
          Your Total Earnings
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded-md">
            <span className="text-gray-600 font-semibold text-lg">
              Total Coins:
            </span>
            <span className="text-blue-600 font-bold text-xl">
              {user.coins} Coins
            </span>
          </div>
          <div className="flex justify-between items-center bg-green-50 p-4 rounded-md">
            <span className="text-gray-600 font-semibold text-lg">
              Withdrawal Amount:
            </span>
            <span className="text-green-600 font-bold text-xl">
              ${withdrawalAmount} USD
            </span>
          </div>
        </div>
        {/* <div className="mt-6 text-center">
          {isEligibleForWithdrawal ? (
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold shadow-md hover:bg-blue-700 transition duration-200">
              Request Withdrawal
            </button>
          ) : (
            <p className="text-red-600 font-semibold">
              You need at least {minWithdrawCoins} coins to withdraw.
            </p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default TotalEarning;
