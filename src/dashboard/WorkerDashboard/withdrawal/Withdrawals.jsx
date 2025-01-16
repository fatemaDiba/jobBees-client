import Title from "../../../components/Title";
import TotalEarning from "./components/TotalEarning";
import WithdrawForm from "./components/WithdrawForm";

const Withdrawals = () => {
  return (
    <div className="pb-16 bg-gray-50">
      <Title title="Withdrawals"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <TotalEarning></TotalEarning>
        <WithdrawForm></WithdrawForm>
      </div>
    </div>
  );
};

export default Withdrawals;
