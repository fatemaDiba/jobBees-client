import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import DetailCard from "./DetailCard";
import Loading from "../../../../loading/Loading";

const DetailTask = () => {
  const { id } = useParams();
  const axiosBase = useAxios();
  const { data: singleTask = {}, isLoading } = useQuery({
    queryKey: ["singleTask", id],
    queryFn: async () => {
      const res = await axiosBase.get(`/task/all-tasks/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  return (
    <div className="bg-gray-50 py-16">
      <h2 className="w-9/12 md:w-11/12 mx-auto text-2xl xl:text-3xl font-bold text-gray-800 mb-4 text-center">
        Task Details
      </h2>
      <div>
        {isLoading && <Loading></Loading>}
        <DetailCard singleTask={singleTask}></DetailCard>
      </div>
    </div>
  );
};

export default DetailTask;
