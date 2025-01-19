import Title from "../../../components/Title";
import UserTable from "./UserTable";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../loading/Loading";

const ManageUser = () => {
  const axiosBase = useAxios();
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUser"],
    queryFn: async () => {
      const res = await axiosBase.get("/user/all-users");
      return res.data;
    },
  });

  return (
    <div className="pb-16 bg-gray-50">
      <Title title="Manage User"></Title>
      <div>
        {isLoading && <Loading></Loading>}
        <UserTable allUsers={allUsers} refetch={refetch}></UserTable>
      </div>
    </div>
  );
};

export default ManageUser;
