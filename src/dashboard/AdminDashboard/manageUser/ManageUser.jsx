import Title from "../../../components/Title";
import UserTable from "./UserTable";

const ManageUser = () => {
  return (
    <div className="pb-10 bg-gray-50">
      <Title title="Manage User"></Title>
      <div>
        <UserTable></UserTable>
      </div>
    </div>
  );
};

export default ManageUser;
