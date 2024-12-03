import { useQuery } from '@tanstack/react-query';
import UseAuth from "./UseAuth";
import useAxiosPublic from "./UseAxiosPublic";


const UseAdmin = () => {
    const { user } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default UseAdmin;