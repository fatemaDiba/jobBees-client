import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import BuyerDash from "./components/BuyerDash";
import ReviewTasks from "./components/ReviewTasks";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../../loading/Loading";

const BuyerHome = () => {
  const axiosBase = useAxios();
  const { data: allSubmissions = [], isLoading } = useQuery({
    queryKey: ["allSubmissions"],
    queryFn: async () => {
      const res = await axiosBase.get("/submission/all-submissions");
      return res.data;
    },
  });

  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="User-Home"></Title>
      <div>
        <BuyerDash></BuyerDash>
        {isLoading && <Loading></Loading>}
        <ReviewTasks allSubmissions={allSubmissions}></ReviewTasks>
      </div>
    </div>
  );
};

export default BuyerHome;
