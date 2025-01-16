import React from "react";
import WithdrawalRequests from "./components/WithdrawalRequests";
import AdminDash from "./components/AdminDash";
const AdminHome = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <AdminDash></AdminDash>
      <div>
        <WithdrawalRequests></WithdrawalRequests>
      </div>
    </div>
  );
};

export default AdminHome;
