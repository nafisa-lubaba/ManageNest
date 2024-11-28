
import UseAuth from '../hooks/UseAuth';
import useAxiosPublic from '../hooks/UseAxiosPublic';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const {
        signInWithGoogle,
        // loading,
    } = UseAuth()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                        toast.success('Google sigin in successfull')
                    })
            })
    }
    return (
        <div>
              <div>
            <button
                // disabled={loading}
                onClick={handleGoogleSignIn}
                className=' flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
            >
                <FcGoogle size={32} />

                <p>Continue with Google</p>
            </button>
        </div>
            
        </div>
    );
};

export default SocialLogin;