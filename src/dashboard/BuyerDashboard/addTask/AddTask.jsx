import Title from "../../../components/Title";
import AddTaskForm from "./components/AddTaskForm";

const AddTask = () => {
  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="Add Task"></Title>
      <div>
        <AddTaskForm></AddTaskForm>
      </div>
    </div>
  );
};

export default AddTask;
