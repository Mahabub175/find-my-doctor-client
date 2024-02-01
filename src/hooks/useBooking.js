import { useQuery } from "@tanstack/react-query";
import { base_url } from "../utils/config";
import useAuth from "./useAuth";

const useBooking = () => {
  const { user } = useAuth();
  const {
    data: booking = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(`${base_url}/appointments/${user?.email}`);
      return res.json();
    },
  });

  return [booking, loading, refetch];
};

export default useBooking;
