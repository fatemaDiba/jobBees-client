import { useForm } from "react-hook-form";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";

const WithdrawForm = ({ coin, email, displayName }) => {
  const minWithdrawCoins = 200; // Minimum coins to withdraw = $10
  const isEligibleForWithdrawal = coin >= minWithdrawCoins;
  const axiosBase = useAxios();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { coinToWithdraw, withdrawAmount, paymentSystem } = data;
    const withdrawal_date = new Date().toISOString();
    const withdrawData = {
      worker_email: email,
      worker_name: displayName,
      withdrawal_coin: coinToWithdraw,
      withdrawal_amount: withdrawAmount,
      payment_system: paymentSystem,
      withdrawal_date,
      status: "Pending",
    };
    try {
      const res = await axiosBase.post("/withdraw/all-withdraws", withdrawData);
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully withdrew Money",
          showConfirmButton: false,
          timer: 1000,
        });
        // navigate(location?.state?.from || "/dashboard");
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something Went Wrong!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  const handleCoinChange = (e) => {
    const coinValue = e.target.value;
    const withdrawAmount = coinValue / 20;
    setValue("withdrawAmount", withdrawAmount); // Automatically set amount
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200 p-6">
        <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-800 text-center mb-6">
          Withdrawal Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Coin to Withdraw */}
          <div>
            <label
              htmlFor="coinToWithdraw"
              className="block text-gray-600 font-medium mb-2"
            >
              Coin To Withdraw
            </label>
            <input
              type="number"
              id="coinToWithdraw"
              {...register("coinToWithdraw", {
                required: "Coin To Withdraw is required",
                onChange: handleCoinChange,
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter coin amount"
              max={coin}
            />
            <p className="text-sm text-gray-500 mt-1">
              You have {coin} coins available.
            </p>
            {errors.coinToWithdraw && (
              <p className="text-red-600 text-sm mt-1">
                {errors.coinToWithdraw.message}
              </p>
            )}
          </div>

          {/* Withdrawal Amount */}
          <div>
            <label
              htmlFor="withdrawAmount"
              className="block text-gray-600 font-medium mb-2"
            >
              Withdraw Amount ($)
            </label>
            <input
              type="number"
              id="withdrawAmount"
              {...register("withdrawAmount", {
                required: "Withdraw Amount To Withdraw is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100  focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="$0.00"
              readOnly
            />
            {errors.withdrawAmount && (
              <p className="text-red-600 text-sm mt-1">
                {errors.withdrawAmount.message}
              </p>
            )}
          </div>

          {/* Payment System */}
          <div>
            <label
              htmlFor="paymentSystem"
              className="block text-gray-600 font-medium mb-2"
            >
              Select Payment System
            </label>
            <select
              id="paymentSystem"
              {...register("paymentSystem", {
                required: "Payment System To Withdraw is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>
              <option value="bkash">Bkash</option>
              <option value="rocket">Rocket</option>
              <option value="nagad">Nagad</option>
              <option value="other">Other</option>
            </select>
            {errors.accountNumber && (
              <p className="text-red-600 text-sm mt-1">
                {errors.accountNumber.message}
              </p>
            )}
          </div>

          {/* Account Number */}
          <div>
            <label
              htmlFor="accountNumber"
              className="block text-gray-600 font-medium mb-2"
            >
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              {...register("accountNumber", {
                required: "Account Number To Withdraw is required",
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter account number"
            />
            {errors.accountNumber && (
              <p className="text-red-600 text-sm mt-1">
                {errors.accountNumber.message}
              </p>
            )}
          </div>

          {/* Withdraw Button */}
          {isEligibleForWithdrawal ? (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Withdraw
            </button>
          ) : (
            <p className="text-center text-red-600 font-semibold">
              Insufficient coins. You need at least {minWithdrawCoins} coins to
              withdraw.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default WithdrawForm;
