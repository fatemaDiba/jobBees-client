import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import BuyerDash from "./components/BuyerDash";
import ReviewTasks from "./components/ReviewTasks";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../../loading/Loading";
import useAuth from "../../../hooks/useAuth";

const BuyerHome = () => {
  const axiosBase = useAxios();
  const { user } = useAuth();
  const email = user?.email;

  // for all submission
  const {
    data: allSubmissions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allSubmissions"],
    queryFn: async () => {
      const res = await axiosBase.get(
        `/submission/all-submissions/buyer-task/${email}`
      );
      return res.data;
    },
    enabled: !!email,
  });
  // for buyer all task
  const { data: allTasks = {}, refetch: taskRefetch } = useQuery({
    queryKey: ["allTasks", user?.email],
    queryFn: async () => {
      const res = await axiosBase.get(`/task/buyer-all-tasks/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="User-Home"></Title>
      <div>
        <BuyerDash allTasks={allTasks}></BuyerDash>

        {isLoading && <Loading></Loading>}
        <ReviewTasks
          allSubmissions={allSubmissions}
          refetch={refetch}
          taskRefetch={taskRefetch}
        ></ReviewTasks>
      </div>
    </div>
  );
};

export default BuyerHome;
