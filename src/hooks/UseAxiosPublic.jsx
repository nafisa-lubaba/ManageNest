// import axios from "axios";


// const UseAxiosPublic = axios.create ({
//      baseURL: 'http://localhost:5000/'
// })
// const UseAxiosPublic = () => {
//     return axiosPublic;
// };


// export default UseAxiosPublic;

import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;