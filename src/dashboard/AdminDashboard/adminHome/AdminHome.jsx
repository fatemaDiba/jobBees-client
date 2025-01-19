import WithdrawalRequests from "./components/WithdrawalRequests";
import AdminDash from "./components/AdminDash";
import Title from "../../../components/Title";
import Loading from "../../../loading/Loading";
import useAllUsers from "../../../hooks/useAllUsers";

const AdminHome = () => {
  const { allUsers, isLoading } = useAllUsers();

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
        <AdminDash allUsers={allUsers}></AdminDash>
        <WithdrawalRequests></WithdrawalRequests>
      </div>
    </div>
  );
};

export default AdminHome;
