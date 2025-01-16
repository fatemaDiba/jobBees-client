import Title from "../../../components/Title";
import CoinCard from "./components/CoinCard";

const PurchaseCoin = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <Title title="Purchase Coin"></Title>
      <div>
        <CoinCard></CoinCard>
      </div>
    </div>
  );
};

export default PurchaseCoin;
