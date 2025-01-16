import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUser = () => {
  const { user } = useAuth();
  const axiosBase = useAxios();
  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: ["singleUser", user?.email],
    queryFn: async () => {
      const res = await axiosBase.get(`/user/single-user/${user?.email}`);
      return res.data;
    },
  });
  return [userData, userLoading];
};

export default useUser;
