import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../loading/Loading";

const PrivateRegLog = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default PrivateRegLog;
