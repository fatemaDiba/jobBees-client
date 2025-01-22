import React, { useEffect } from "react";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../loading/Loading";

export const Home = () => {
  const { user, loading } = useAuth(); // Auth state
  const [userData, userLoading] = useUser(); // User data state
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !userLoading) {
      if (user) {
        // Redirect based on role
        if (userData?.userType === "admin") {
          navigate("/dashboard/admin-home");
        } else if (userData?.userType === "worker") {
          navigate("/dashboard/worker-home");
        } else if (userData?.userType === "buyer") {
          navigate("/dashboard/buyer-home");
        }
      } else {
        // Redirect to login if no user is found
        navigate("/login");
      }
    }
  }, [user, userData, loading, userLoading, navigate]);

  // Show loading spinner while fetching data
  if (loading || userLoading) {
    return <Loading />;
  }

  return null;
};
