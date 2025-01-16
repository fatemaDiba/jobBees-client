import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUser = () => {
  const [userData, setUserData] = useState(null);
  const axiosBase = useAxios();
  const { user } = useAuth();
  const email = user?.email;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axiosBase.post("/user/single-user", { email });
        setUserData(res.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData();
  }, [email, axiosBase]);

  return userData;
};

export default useUser;
