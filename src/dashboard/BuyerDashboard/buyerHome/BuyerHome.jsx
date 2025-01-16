import Title from "../../../components/Title";
import BuyerDash from "./components/BuyerDash";
import ReviewTasks from "./components/ReviewTasks";

const BuyerHome = () => {
  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="User-Home"></Title>
      <div>
        <BuyerDash></BuyerDash>
        <ReviewTasks></ReviewTasks>
      </div>
    </div>
  );
};

export default BuyerHome;
