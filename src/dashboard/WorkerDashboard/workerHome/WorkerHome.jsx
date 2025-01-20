import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import useAxios from "../../../hooks/useAxios";
import ApprovedSubmissions from "./components/ApprovedSubmissions";
import WorkerDash from "./components/WorkerDash";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../loading/Loading";

const WorkerHome = () => {
  const axiosBase = useAxios();
  const { user } = useAuth();
  const { data: allSubmissions = [], isLoading } = useQuery({
    queryKey: ["allSubmissions", user?.email],
    queryFn: async () => {
      const res = await axiosBase.get(
        `/submission/all-submissions/${user?.email}`
      );
      return res.data;
    },
  });

  const {
    totalApprovedSubmissions,
    totalSubmissions,
    totalPending,
    totalEarnings,
  } = allSubmissions;

  return (
    <div className="bg-gray-50 pb-16">
      <Title title="Worker-Home"></Title>
      <div>
        {isLoading && <Loading></Loading>}

        <WorkerDash
          totalSubmissions={totalSubmissions}
          totalPending={totalPending}
          totalEarnings={totalEarnings}
        ></WorkerDash>

        <ApprovedSubmissions
          totalApprovedSubmissions={totalApprovedSubmissions}
        ></ApprovedSubmissions>
      </div>
    </div>
  );
};

export default WorkerHome;
