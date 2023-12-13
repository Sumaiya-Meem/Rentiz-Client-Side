import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReview = () => {
 
             const axiosSecure = useAxiosSecure();
            const { isLoading, refetch, data:allReview =[]} = useQuery({
          queryKey: ['reviewData'],
          queryFn: async () =>
        {
            const res = await axiosSecure.get('/reviews')
            return res.data;
        }
      })
      return [allReview ,isLoading,refetch]
    
};

export default useReview;