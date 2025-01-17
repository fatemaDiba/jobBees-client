import Title from "../../../components/Title";
import useAxios from "../../../hooks/useAxios";
import TaskTable from "./components/TaskTable";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const MyTask = () => {
  const axiosBase = useAxios();
  const { user } = useAuth();
  const email = user?.email;

  const {
    data: myTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myTasks", email],
    queryFn: async () => {
      const res = await axiosBase.get(`/task/my-tasks/${email}`);
      return res.data;
    },
    enabled: !!email,
  });

  console.log(myTasks);

  return (
    <div className="bg-gray-50 p-10 pb-16">
      <Title title="My Tasks"></Title>
      <div>
        <TaskTable myTasks={myTasks}></TaskTable>
      </div>
    </div>
  );
};

export default MyTask;
