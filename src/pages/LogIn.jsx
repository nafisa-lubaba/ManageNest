// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import UseAuth from '../hooks/UseAuth';
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import backgroundImage from "../assets/building.jpg";

// const LogIn = () => {
//     const navigate = useNavigate()
//     const location = useLocation()
//     const from = location?.state || '/'
//     const { signIn, setLoading } = UseAuth()
//     // const [email, setEmail] = useState('')
//     const { register, handleSubmit, reset, formState: { errors } } = useForm();

//     const onSubmit = async data => {
//         console.log(data);
//         const email = data.email;
//         const password = data.password
//         console.log(email, password);
//         signIn(email, password)
//           .then(result => {
//             const user = result.user;
//             console.log(user);
//             toast.success('Log in Successful');
//             navigate(from, { replace: true });
//           })
//           .catch(error => {
//             // Handle the error here
//             console.error('Sign in error:', error);
//             toast.error('An error occurred while signing in');
//           });
//       }
//     return (
//         <div className='flex justify-center items-center min-h-screen'
//         style={{
//             backgroundImage: `url(${backgroundImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//         <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 text-gray-900 bg-white bg-opacity-90'>
//           <div className='mb-2 text-center'>
//             <h1 className='my-3 text-4xl font-bold'>Sign In</h1>
//             <p className='text-sm text-black'>Welcome to....</p>
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
//               {errors.email && <span className="text-orange-500">Email is required</span>}
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input type="password"  {...register("password", {
//                 required: true,
//               })} placeholder="password" className="input input-bordered" />
  
  
//             </div>
//             <div className="form-control mt-6">
//               <input className="btn  bg-orange-500 text-white" type="submit" value="Sign In" />
//             </div>
//           </form>
          
//           <div className='flex flex-col items-center pt-4 space-x-1'>
  
//             <p className='px-3 text-sm dark text-black'>
//               Login with social accounts
//             </p>
//             <div className='flex'>
//               {/* <SocialLogin></SocialLogin> */}
//             </div>
//             <p className='px-6 text-sm text-center text-black'>
//               Don&apos;t have an account yet?{' '}
//               <Link
//                 to='/signup'
//                 className='hover:underline hover:text-orange-500 text-gray-600'
//               >
//                 Sign up
//               </Link>
//               .
//             </p>
//           </div>
  
  
//         </div>
//       </div>
//     );
// };

// export default LogIn;


import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import backgroundImage from "../assets/building.jpg";
import SocialLogin from "../components/SocialLogin";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signIn } = UseAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
        toast.error("Error logging in. Please try again.");
      });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white bg-opacity-90 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold">Sign In</h1>
          <p className="text-sm text-gray-500">Welcome back! Please log in.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer Section */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
           <SocialLogin></SocialLogin>
          </p>
          <p className="text-sm mt-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-500 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
