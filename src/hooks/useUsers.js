import { useQuery } from "@tanstack/react-query";
import { base_url } from "../utils/config";
import useAuth from "./useAuth";

const useUsers = () => {
  const { user } = useAuth();
  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${base_url}/users/${user?.email}`);
      return res.json();
    },
  });

  return [users, loading, refetch];
};

export default useUsers;
