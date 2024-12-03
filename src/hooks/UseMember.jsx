import React from 'react';
import UseAuth from './UseAuth';
import useAxiosPublic from './UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UseMember = () => {
    const { user } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const { data: isMember, isPending: isMemberLoading } = useQuery({
        queryKey: [user?.email, 'isMember'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/member/${user?.email}`);
            console.log(res.data);
            return res.data?.member;
        }
    })
    return  [isMember, isMemberLoading]
};

export default UseMember;