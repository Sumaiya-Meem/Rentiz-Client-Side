import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


            

const useProperty = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, refetch, data:allProperty =[]} = useQuery({
        queryKey: ['propertyData'],
        queryFn: async () =>
        {
            const res = await axiosSecure.get('/properties')
            return res.data;
        }
      })
      return [allProperty,isLoading,refetch]
};


export default useProperty;