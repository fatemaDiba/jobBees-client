import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import TaskTable from "./TaskTable";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../../loading/Loading";

const ManageTask = () => {
  const axiosBase = useAxios();

  const { data: allTasks = [], isLoading ,refetch} = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await axiosBase.get("/task/all-tasks");
      return res.data;
    },
  });

  return (
    <div className="pb-16 bg-gray-50">
      <Title title="Manage Task"></Title>
      <div>
        {isLoading && <Loading></Loading>}
        <TaskTable allTasks={allTasks} refetch={refetch}></TaskTable>
      </div>
    </div>
  );
};

export default ManageTask;
