import { useState, useEffect } from "react";
import { getCurrentUser } from "../functions/userFunctions";
import { useAuth } from "../context/Useauth";

const useUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (!isAuthenticated) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await getCurrentUser();
        // console.log("Fetched user data:", res);
        setUser(res.user);
      } catch (err) {
        setError(err);
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [isAuthenticated]);

  return { user, loading, error };
};

export default useUser;
