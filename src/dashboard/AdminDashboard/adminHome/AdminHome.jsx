import React from "react";
import WithdrawalRequests from "./components/WithdrawalRequests";
import AdminDash from "./components/AdminDash";
import Title from "../../../components/Title";
const AdminHome = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <Title title="Admin-Home"></Title>

      <div>
        <AdminDash></AdminDash>
        <WithdrawalRequests></WithdrawalRequests>
      </div>
    </div>
  );
};

export default AdminHome;
