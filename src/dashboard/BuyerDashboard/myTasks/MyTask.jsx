import Title from "../../../components/Title";
import TaskTable from "./components/TaskTable";

const MyTask = () => {
  return (
    <div className="bg-gray-50 p-10 pb-16">
      <Title title="My Tasks"></Title>
      <div>
        <TaskTable></TaskTable>
      </div>
    </div>
  );
};

export default MyTask;
