import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import Loading from "../loading/Loading";

const PrivateUserRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [userData, userLoading] = useUser();
  const role = userData?.userType;

  if (loading || userLoading) {
    return <Loading></Loading>;
  }
  if (user && role === "user") {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateUserRoutes;
