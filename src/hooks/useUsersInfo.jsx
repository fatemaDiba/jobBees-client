import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useUsersInfo = () => {
  const axiosBase = useAxios();

  const {
    data: buyerData = {},
    isLoading: buyersLoading,
    isError: buyersError,
  } = useQuery({
    queryKey: ["allBuyers"],
    queryFn: async () => {
      const res = await axiosBase.get("/user/all-buyers");
      return res.data;
    },
  });

  const {
    data: workerData = {},
    isLoading: workersLoading,
    isError: workersError,
  } = useQuery({
    queryKey: ["allWorkers"],
    queryFn: async () => {
      const res = await axiosBase.get("/user/all-workers");
      return res.data;
    },
  });

  const totalBuyers = buyerData?.totalBuyer || 0; // Extract totalBuyer
  const totalWorkers = workerData?.totalWorker || 0; // Extract totalWorker
  const isLoading = buyersLoading || workersLoading;
  const isError = buyersError || workersError;

  return { totalBuyers, totalWorkers, isLoading, isError };
};

export default useUsersInfo;
