const TotalEarning = ({ coin }) => {
  const coinsToDollarRate = 20; // 20 coins = 1 dollar
  const withdrawalAmount = (coin / coinsToDollarRate).toFixed(2);

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow p-6">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-4">
          Your Total Earnings
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center bg-blue-50 p-4 rounded-md">
            <span className="text-gray-600 font-semibold text-base md:text-lg">
              Total Coins:
            </span>
            <span className="text-blue-600 font-bold text-lg md:text-xl">
              {coin} Coins
            </span>
          </div>
          <div className="flex justify-between items-center bg-green-50 p-4 rounded-md">
            <span className="text-gray-600 font-semibold text-base md:text-lg">
              Withdrawal Amount:
            </span>
            <span className="text-green-600 font-bold text-lg md:text-xl">
              ${withdrawalAmount} USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalEarning;
