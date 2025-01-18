import Title from "../../../components/Title";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../../loading/Loading";
import Card from "./components/Card";
import { useQuery } from "@tanstack/react-query";

const TaskList = () => {
  const axiosBase = useAxios();
  const { data: allTasks = [], isLoading } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await axiosBase.get("/task/all-tasks");
      return res.data;
    },
  });

  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="Task List"></Title>
      <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 text-gray-800">
        Available Tasks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading && <Loading></Loading>}
        {allTasks?.map((task) => {
          return <Card key={task._id} task={task}></Card>;
        })}
      </div>
    </div>
  );
};

export default TaskList;
