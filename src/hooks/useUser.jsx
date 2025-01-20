import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUser = () => {
  const { user } = useAuth();
  const axiosBase = useAxios();

  const {
    data: userData = {},
    isLoading: userLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["singleUser", user?.email],
    queryFn: async () => {
      if (!user?.email) return {};
      const res = await axiosBase.get(`/user/single-user/${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email, // Ensure this query only runs if email exists
  });

  if (error) {
    console.error("Error fetching user data:", error);
  }

  return [userData, userLoading, refetch]; // Ensure refetch is returned
};

export default useUser;
