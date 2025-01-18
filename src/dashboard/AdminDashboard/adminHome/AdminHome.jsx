import WithdrawalRequests from "./components/WithdrawalRequests";
import AdminDash from "./components/AdminDash";
import Title from "../../../components/Title";
import useUsersInfo from "../../../hooks/useUsersInfo";
import Loading from "../../../loading/Loading";

const AdminHome = () => {
  const { totalBuyers, totalWorkers, isLoading, isError } = useUsersInfo();

  if (isLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pb-16">
      <Title title="Admin-Home"></Title>
      <div>
        <AdminDash
          totalBuyers={totalBuyers}
          totalWorkers={totalWorkers}
        ></AdminDash>
        <WithdrawalRequests></WithdrawalRequests>
      </div>
    </div>
  );
};

export default AdminHome;
