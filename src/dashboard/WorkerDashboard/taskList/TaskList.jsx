import Title from "../../../components/Title";
import Card from "./components/Card";

const TaskList = () => {
  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="Task List"></Title>
      <div>
        <Card></Card>
      </div>
    </div>
  );
};

export default TaskList;
