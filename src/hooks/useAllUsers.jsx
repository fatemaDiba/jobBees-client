import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllUsers = () => {
  const axiosBase = useAxios();
  const { data: allUsers = {}, isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosBase.get("/user/all-usersInfo");
      return res.data;
    },
  });

  return { allUsers, isLoading };
};

export default useAllUsers;
