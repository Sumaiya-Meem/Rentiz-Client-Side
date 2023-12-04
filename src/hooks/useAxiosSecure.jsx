import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://rentiz-server-side.vercel.app'
})
const useAxiosSecure = () => {
    return  axiosSecure;
};

export default useAxiosSecure;