import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUser = () => {
  const { user } = useAuth();
  const axiosBase = useAxios();
  const {
    data: userData = {},
    isLoading: userLoading,
    error,
  } = useQuery({
    queryKey: ["singleUser", user?.email],
    queryFn: async () => {
      const res = await axiosBase.get(`/user/single-user/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (error) {
    console.error("Error fetching user data:", error);
  }
  return [userData, userLoading];
};

export default useUser;
