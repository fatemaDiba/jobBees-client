import { FaCoins } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const CoinCard = () => {
  const navigate = useNavigate();
  const conversions = [
    { coins: 10, dollars: 1 },
    { coins: 150, dollars: 10 },
    { coins: 500, dollars: 20 },
    { coins: 1000, dollars: 35 },
  ];
  const handlePrice = (price) => {
    navigate("/dashboard/checkout", { state: price });
  };
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <h2 className="text-2xl xl:text-3xl font-bold text-gray-800 mb-8">
        {/* Coin Conversion Rates */}
        Purchase Coin
      </h2>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        {conversions.map((conversion, index) => (
          <div
            key={index}
            onClick={() => {
              handlePrice(conversion.dollars);
            }}
            className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex flex-col justify-center cursor-pointer items-center transform hover:scale-105 transition-transform duration-200 hover:shadow-xl"
          >
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              {conversion.coins} Coins
              <FaCoins className="fill-yellow-500"></FaCoins>
            </h3>
            <p className="text-gray-600 font-medium text-base md:text-lg">=</p>
            <p className="text-xl md:text-2xl font-bold text-blue-600 mt-4">
              ${conversion.dollars}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinCard;
