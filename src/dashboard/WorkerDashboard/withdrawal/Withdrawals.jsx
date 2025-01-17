import Title from "../../../components/Title";
import TotalEarning from "./components/TotalEarning";
import WithdrawForm from "./components/WithdrawForm";

const Withdrawals = () => {
  return (
    <div className="pb-16 bg-gray-50 p-10">
      <Title title="Withdrawals"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <TotalEarning></TotalEarning>
        </div>
        <WithdrawForm></WithdrawForm>
      </div>
    </div>
  );
};

export default Withdrawals;
