import Title from "../../../components/Title";
import TaskTable from "./TaskTable";

const ManageTask = () => {
  return (
    <div className="pb-16 bg-gray-50">
      <Title title="Manage Task"></Title>
      <div>
        <TaskTable></TaskTable>
      </div>
    </div>
  );
};

export default ManageTask;
