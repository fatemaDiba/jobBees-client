import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
