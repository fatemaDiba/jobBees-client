import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Title";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import PayTable from "./components/PayTable";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosBase = useAxios();

  const { data: paymentHistory, isLoading } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosBase.get(
        `/payment/payment-history/${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  return (
    <div className="bg-gray-50 pb-16 p-10">
      <Title title="Payment History"></Title>
      <div>
        <PayTable paymentHistory={paymentHistory}></PayTable>
      </div>
    </div>
  );
};

export default PaymentHistory;
