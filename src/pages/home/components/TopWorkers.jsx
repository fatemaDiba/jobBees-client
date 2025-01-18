import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import WorkersCard from "./WorkersCard";
import Loading from "../../../loading/Loading";

const TopWorkers = () => {
  const axiosBase = useAxios();
  const {
    data: topWorkers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["toWorkers"],
    queryFn: async () => {
      const res = await axiosBase.get("/user/all-users");
      return res.data;
    },
  });

  return (
    <div className="w-11/12 md:container xl:w-10/12 mx-auto my-12">
      <div className="flex flex-col items-center justify-center mb-6">
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-3">
          Meet Our Top Workers
        </h2>
        <p className="">
          Here are the top workers who earned the highest coins this month!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading && <Loading></Loading>}
        {topWorkers?.map((worker) => {
          return <WorkersCard worker={worker} key={worker._id}></WorkersCard>;
        })}
      </div>
    </div>
  );
};

export default TopWorkers;
