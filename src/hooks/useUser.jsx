import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, error, data:user =[]} = useQuery({
        queryKey: ['userData'],
        queryFn: async () =>
        {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
      })
      return [user]
};

export default useUser;