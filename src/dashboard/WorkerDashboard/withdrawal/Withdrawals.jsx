import Title from "../../../components/Title";
import useUser from "../../../hooks/useUser";
import TotalEarning from "./components/TotalEarning";
import WithdrawForm from "./components/WithdrawForm";

const Withdrawals = () => {
  const [userData] = useUser();
  const { coin, email, displayName } = userData;

  return (
    <div className="pb-16 bg-gray-50 p-10">
      <Title title="Withdrawals"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <TotalEarning coin={coin}></TotalEarning>
        </div>
        <WithdrawForm
          coin={coin}
          displayName={displayName}
          email={email}
        ></WithdrawForm>
      </div>
    </div>
  );
};

export default Withdrawals;
