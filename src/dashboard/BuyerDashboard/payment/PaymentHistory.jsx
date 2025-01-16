import Title from "../../../components/Title";
import PayTable from "./components/PayTable";

const PaymentHistory = () => {
  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="Payment History"></Title>
      <div>
        <PayTable></PayTable>
      </div>
    </div>
  );
};

export default PaymentHistory;
