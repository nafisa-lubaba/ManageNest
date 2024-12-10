

import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://managenest-server-production.up.railway.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;